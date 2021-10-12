import { createMessage, encrypt, readKey } from "openpgp";
import { PublicPgpKeyRepository } from '~app/Repository/Auth/PublicPgpKeyRepository';
import { Credentials } from '~app/Auth/Credentials';
import { EncryptedCredentials } from '~app/Auth/types';

export class Encryptor {
  public constructor(readonly pgpRepository: PublicPgpKeyRepository) {}

  async encrypt(credentials: Credentials): Promise<EncryptedCredentials>
  {

    const message = createMessage({
      text: JSON.stringify(credentials.toJson())
    });

    const armoredKey = (await this.pgpRepository.fetchPublicKey()).publicKey;

    const publicKey = await readKey({
      armoredKey: armoredKey
    });

    return encrypt({
      message: await message,
      encryptionKeys: publicKey
    });
  }
}

export default Encryptor;
