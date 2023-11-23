import { BaseResponse } from './base.response';

export interface QueryItemResponse<TEntity> extends BaseResponse{
  item: TEntity
  error: BaseResponse
}
