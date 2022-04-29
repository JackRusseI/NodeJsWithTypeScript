import { response, Router } from "express";
import { stringify } from "uuid";
import { Category } from "../models/categories";
import { categoriesRepository } from "../repositories/categoriesRepositories";
import { CategoriesService } from "../services/categoriesServices";

const CategoryRoutes = Router();

const newCategoryRequest = new categoriesRepository();

CategoryRoutes.get("/", (req, resp)=>{
  const all = newCategoryRequest.Read();

  return resp.json(all);
})

CategoryRoutes.post("/", (req, resp)=>{
  const { name, description } = req.body;

  new CategoriesService(newCategoryRequest).execute({name, description});

  resp.status(201).send();
})

export { CategoryRoutes };