import { createHash } from 'crypto';

const getSHA1Hash = (input: string): string => {
  return createHash('sha1').update(input).digest('hex');
};

const inputString = "sua string aqui";
const sha1Hash = getSHA1Hash(inputString);

console.log(`SHA-1 hash: ${sha1Hash}`);
