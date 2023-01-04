import CategoriesRepository from '../../repositories/implementations/CategoriesRepository';
import { loadCategories } from '../../utils/loadCategories';

class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  public async execute(file: Express.Multer.File): Promise<void> {
    const categories = await loadCategories(file);

    categories.map(async category => {
      const { name, description } = category;

      const categoryExists = this.categoriesRepository.findByName(name);

      if (!categoryExists) {
        this.categoriesRepository.create({ name, description });
      }
    });
  }
}
export { ImportCategoryUseCase };
