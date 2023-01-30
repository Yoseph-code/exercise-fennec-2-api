import { DataManipulation } from "../database/data-manipulation"
import { Repo } from "../database/repo"

export abstract class Service {
  public repo: Repo
  public dataManipulation: DataManipulation

  constructor() {
    this.repo = new Repo()
    this.dataManipulation = new DataManipulation()
  }
}