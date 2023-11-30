import { BaseReponse } from './base.response';
export interface ErrorResponse extends BaseReponse {
  code?: number
}
