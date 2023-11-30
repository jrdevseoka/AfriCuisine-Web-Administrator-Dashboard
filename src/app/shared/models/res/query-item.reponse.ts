import { BaseReponse } from './base.response';
import { ErrorResponse } from './error.reponse';
export interface QueryItemResponse<TModel> extends BaseReponse
{
    item: TModel
    error?: ErrorResponse
}
