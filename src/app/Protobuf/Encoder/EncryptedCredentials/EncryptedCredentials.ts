import { EncryptedCredentials as EncryptedCred } from "~app/Auth/types";
import { auth } from '~schema/auth';

export class EncryptedCredentials {
  async encode(encryptedCredentials: EncryptedCred): Promise<Uint8Array> {
    const message = auth.LoginCredentials.create({ credentials: encryptedCredentials });

    return auth.LoginCredentials.encode(message).finish();
  }
}

export default EncryptedCredentials;
