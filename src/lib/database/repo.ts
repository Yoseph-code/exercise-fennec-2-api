import { Repository } from "typeorm";
import { dataSource } from "../../data-source";
import { User } from "../../entitys/user.entity";

export class Repo {
  public user: Repository<User>

  constructor() {
    this.user = dataSource.getRepository(User)
  }
}