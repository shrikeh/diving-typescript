import { BearerToken, EncryptedCredentials } from '~app/Auth/types';

export interface LoginRepository {
  loginWithEncryptedCredentials(encryptedCredentials: EncryptedCredentials): Promise<BearerToken>;
}

export default LoginRepository;
