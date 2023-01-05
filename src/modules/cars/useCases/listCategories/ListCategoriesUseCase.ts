import Category from '../../model/Category';
import CategoriesRepository from '../../repositories/implementations/CategoriesRepository';

class ListCategoriesUseCase {
  private categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  public execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export default ListCategoriesUseCase;
