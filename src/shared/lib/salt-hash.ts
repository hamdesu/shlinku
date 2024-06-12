import bcrypt from 'bcryptjs';

export default async function saltAndHash(secret: string) {
  const salt = bcrypt.genSaltSync(8);
  const passHash = bcrypt.hashSync(secret, salt);
  return passHash;
}
