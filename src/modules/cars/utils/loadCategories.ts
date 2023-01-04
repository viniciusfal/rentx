import fs from 'fs';
import { parse } from 'csv-parse';

interface IImportCategories {
  name: string;
  description: string;
}

export function loadCategories(
  file: Express.Multer.File,
): Promise<IImportCategories[]> {
  return new Promise((resolve, reject) => {
    // Crie uma leitura por partes (caminho do arquivo que quero ler)
    const stream = fs.createReadStream(file.path);
    const categories: IImportCategories[] = [];

    const parseFile = parse();

    stream.pipe(parseFile);

    parseFile
      .on('data', async line => {
        const [name, description] = line;

        categories.push({
          name,
          description,
        });
      })
      .on('end', () => {
        // Realizar a remossão do arquivo na nossa pasta temporária ao final
        fs.promises.unlink(file.path);
        resolve(categories);
      })
      .on('error', err => reject(err));
  });
}
