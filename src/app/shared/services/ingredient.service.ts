import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient/ingredient.model';
import { enviroment } from 'src/app/env/env.config';
import { QueryItemsResponse } from '../models/res/query-items.response';
import { BaseResponse } from '../models/res/base.response';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {


  private endpoint: string =  `${enviroment.apiUrl}/ingredients`

  constructor(private http: HttpClient) {}

  create(ingredient: Ingredient)
  {
     return this.http.post<BaseResponse>(this.endpoint, ingredient);
  }
  getIngredients()
  {
    return this.http.get<QueryItemsResponse<Ingredient>>(this.endpoint);
  }
}
