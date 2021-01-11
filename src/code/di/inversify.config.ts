import { Container } from "inversify";

import { TYPES } from "./types";

import { AxiosImplementation } from "code/helpers/http/axios/axios-implementation";
import { HTTPInterface } from "code/helpers/http/interface/http-interface";

import { Personal as PersonalRepository } from "code/repository/interfaces/personal/personal";
import { Personal as PersonalGithubRepository } from "code/repository/github/personal/personal";

const container = new Container();

// helpers
container.bind<HTTPInterface>(TYPES.helpers.httpInterface).to(AxiosImplementation);

// entities
container.bind<PersonalRepository>(TYPES.repository.personal).to(PersonalGithubRepository)

export { container };
