import { BaseResponse } from './base.response';

export interface QueryItemsResponse<TEntity> extends BaseResponse{
  items: TEntity[]
  error: BaseResponse
}
