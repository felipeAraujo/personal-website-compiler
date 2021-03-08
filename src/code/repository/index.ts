import { AxiosImplementation } from "code/helpers/http/axios/axios-implementation";
import { Personal } from "./github/personal/personal";
import { Personal as PersonalInterface } from "./interfaces/personal/personal";

export const personalRepository: PersonalInterface = new Personal(
    new AxiosImplementation()
);
