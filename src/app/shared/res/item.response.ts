import { BaseResponse } from "./base.response";
import { ErrorResponse } from "./error.response";

export interface ItemReponse<TModel> extends BaseResponse {
    item: TModel
    error: ErrorResponse
}
