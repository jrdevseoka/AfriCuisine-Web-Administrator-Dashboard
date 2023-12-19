import { BaseResponse } from "./base.response";
import { ErrorResponse } from "./error.response";

export interface PostResponse extends BaseResponse {
    error?: ErrorResponse
}
