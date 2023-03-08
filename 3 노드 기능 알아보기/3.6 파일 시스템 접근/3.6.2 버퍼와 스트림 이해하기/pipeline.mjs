import { pipline } from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

await pipline(
  fs.createReadStream('./readme4.txt'),
  zlib.createGzip(),
  fs.createWriteStream('./readme4.txt.gz'),
);