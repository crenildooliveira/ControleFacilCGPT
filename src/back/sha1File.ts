import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { promisify } from 'util';
import { pipeline } from 'stream';

const pipelineAsync = promisify(pipeline);

const getSHA1HashFromFile = async (filePath: string): Promise<string> => {
  const hash = createHash('sha1');
  const fileStream = createReadStream(filePath);

  await pipelineAsync(fileStream, hash);

  return hash.digest('hex');
};

const filePath = 'caminho/do/seu/arquivo';
getSHA1HashFromFile(filePath)
  .then((sha1Hash) => {
    console.log(`SHA-1 hash: ${sha1Hash}`);
  })
  .catch((error) => {
    console.error(`Erro ao calcular o SHA-1: ${error}`);
  });
