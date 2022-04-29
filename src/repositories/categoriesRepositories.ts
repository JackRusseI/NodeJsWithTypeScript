import { Category } from "../models/categories"

type CreateCategoryDTO = {
  name: string,
  description: string
}

class categoriesRepository{

  private categories: Category[];

  constructor(){
    this.categories = [];
  }

  Create({ name, description }: CreateCategoryDTO): void{
    const category = new Category(name, description);

    this.categories.push(category);
  }

  Read(): Category[]{
    return this.categories;
  }  

  VerifyOne(catName: string): Boolean{
    const exist = this.categories.some( n => n.name == catName);
    return exist;
  }
}

export { categoriesRepository };