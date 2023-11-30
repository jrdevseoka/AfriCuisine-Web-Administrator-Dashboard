import { BaseReponse } from "./base.response";

export interface AuthResponse extends BaseReponse
{
    token: string
}
