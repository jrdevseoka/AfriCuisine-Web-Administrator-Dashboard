import { CategoryCommand } from './../../shared/commands/category.command';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../users/auth.service";
import { enviroment } from "src/app/env/env.config";
import { Category } from "src/app/shared/models/ingredient/category.model";
import { PostResponse } from 'src/app/shared/res/post.response';
import { ItemsResponse } from 'src/app/shared/res/items.reponse';

@Injectable({
  providedIn: 'root'
})
export class IngrCategoryService {
  endpoint: string = `${enviroment.apiUri}/ingrcategories`
  constructor(private readonly http: HttpClient){}
  create(category: CategoryCommand)
  {
    return this.http.post<PostResponse>(this.endpoint, category)
  }
  getCategoryById(id: string){
    return this.http.get(`${this.endpoint}?id=${id}`)
  }
  getCategories(){
    return this.http.get<ItemsResponse<Category>>(this.endpoint)
  }

  update(category: Category)
  {
    return this.http.put<PostResponse>(this.endpoint, category)
  }
}
