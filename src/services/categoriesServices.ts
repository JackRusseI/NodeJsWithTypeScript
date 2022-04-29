import { categoriesRepository } from "../repositories/categoriesRepositories";

type CategoryService = {
  name: string,
  description: string
}

class CategoriesService{
  constructor(private categoryRequest:  categoriesRepository){}

  execute({name, description}: CategoryService): void{
    const exist = this.categoryRequest.VerifyOne(name);

    if(exist){
      throw new Error("Essa categoria já existe");
    }

    this.categoryRequest.Create({ name, description });
  }
}

export { CategoriesService }