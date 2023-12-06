import { BaseResponse } from './base.response';
import { ErrorResponse } from './error.response';
export interface ItemsResponse<TModel> extends BaseResponse
{
   items: TModel[]
   error: ErrorResponse
}
