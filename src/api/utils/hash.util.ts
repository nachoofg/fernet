import { createHash } from 'crypto';

export function generateRandomSalt(password: string) {
  const salt = [];
  for (let i = 0; i < 46; ++i) {
    const index = Math.floor(
      Math.random() *
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789./'
          .length,
    );
    salt.push(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789./'[index],
    );
  }
  return createHash('sha256')
    .update(password)
    .update(salt.join(''))
    .digest('hex')
    .toUpperCase();
}
