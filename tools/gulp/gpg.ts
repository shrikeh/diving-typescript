import { generateKey } from "openpgp/lightweight";

export const foo = async () => {
  const { privateKey, publicKey, revocationCertificate } = await generateKey({
    type: 'ecc', // Type of the key, defaults to ECC
    curve: 'curve25519', // ECC curve name, defaults to curve25519
    userIDs: [{email: 'jon@example.com' }], // you can pass multiple user IDs
    passphrase: 'super long and hard to guess secret', // protects the private key
    format: 'armored' // output key format, defaults to 'armored' (other options: 'binary' or 'object')
  });

  console.log(privateKey);     // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
  console.log(publicKey);      // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
  console.log(revocationCertificate); // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
};
