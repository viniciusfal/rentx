/**
 * Contrato de Repositories (L -> Prinicipio de substituição de Liskov (LSP))
 * Agora posso trocar meu banco de dados ou minha forma de armazenagem de dados
  de uma forma bem mais prática
 */
import Category from '../model/Category';

export interface IcreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({ name, description }: IcreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}
