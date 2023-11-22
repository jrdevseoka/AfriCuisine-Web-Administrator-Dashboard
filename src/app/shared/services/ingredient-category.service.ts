import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/env/env.config';
import { QueryItemsResponse } from '../models/res/query-items.response';
import { Category } from '../models/category/category.model';
import { BaseResponse } from '../models/res/base.response';

@Injectable({
  providedIn: 'root'
})
export class IngredientCategoryService {

  apiUrl: string = `${enviroment.apiUrl}/ingredientcategory`
  constructor(private readonly httpClient: HttpClient) { }

  getCategories()
  {
       var response = this.httpClient.get<QueryItemsResponse<Category>>(this.apiUrl);
       return response;
  }
  create(category: Category)
  {
    var response = this.httpClient.post<BaseResponse>(this.apiUrl, category)
    return response;
  }

}
