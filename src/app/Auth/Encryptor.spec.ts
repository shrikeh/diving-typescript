/**
 * @jest-environment node
 */
import { describe, test, expect } from "@jest/globals";
import { mock } from 'jest-mock-extended';
import { EmailPass } from '~app/Auth/Credentials/EmailPass/EmailPass';
import { Encryptor } from '~app/Auth/Encryptor';
import { PublicPgpKeyRepository } from '~app/Repository/Auth/PublicPgpKeyRepository';

import { generateKey, readMessage, readPrivateKey, decrypt, decryptKey } from 'openpgp';

describe('Encryptor test', () => {
  const passphrase = 'super long and hard to guess secret';
  test('Encrypt', async() => {
    const { privateKey, publicKey, revocationCertificate } = await generateKey({
      type: 'ecc', // Type of the key, defaults to ECC
      curve: 'curve25519', // ECC curve name, defaults to curve25519
      userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs
      passphrase: passphrase, // protects the private key
      format: 'armored' // output key format, defaults to 'armored' (other options: 'binary' or 'object')
    });

    const credentials = new EmailPass("barney@shrikeh.net", "foobarbaz");

    const pgpKeyRepository = mock<PublicPgpKeyRepository>();
    pgpKeyRepository.fetchPublicKey.mockResolvedValue({ publicKey: publicKey });

    const encryptor = new Encryptor(pgpKeyRepository);
    const encrypted = await encryptor.encrypt(credentials);
    const decrypted = await decryptData(privateKey, passphrase, encrypted);

    expect(JSON.parse(decrypted)).toStrictEqual(JSON.parse(JSON.stringify(credentials)));
  });
});

const decryptData = async(
  armoredPrivateKey: string,
  passphrase: string,
  encrypted: string
) => {
  const message = await readMessage({
    armoredMessage: encrypted // parse armored message
  });

  const privateKey =  await decryptKey({
    privateKey: await readPrivateKey({ armoredKey: armoredPrivateKey }),
    passphrase
  });


  const decrypted = await decrypt({
    message: message,
    decryptionKeys: privateKey
  });

  return decrypted.data;

}
