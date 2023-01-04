import Category from '../../model/Category';
import {
  ICategoriesRepository,
  IcreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  /**
   * O  Static permite que o metodo seja chamado sem instanciar um new Object
   *
   */
  public static getInstance(): CategoriesRepository {
    // Se for false (null ou undefined)
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  public create({ name, description }: IcreateCategoryDTO): void {
    const category = new Category();

    // funciona como um setter para o Javascript.
    Object.assign(category, {
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(category);
  }

  public list(): Category[] {
    return this.categories;
  }

  public findByName(name: string): Category {
    const categoryByName = this.categories.find(
      category => category.name === name,
    );

    return categoryByName;
  }
}

export default CategoriesRepository;
