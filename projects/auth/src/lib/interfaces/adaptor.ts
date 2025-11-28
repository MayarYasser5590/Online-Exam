import { AuthAPIResponse } from "./AuthAPIResponse ";
import { AuthModel } from "./AuthModel";

export interface Adaptor {
    adapt(data:AuthAPIResponse) : AuthModel;
}
