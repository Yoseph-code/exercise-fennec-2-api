import { Like } from "typeorm";
import { Service } from "../../lib/service";

type NewUserProps = {
  name: string
  cpf: string | number
  email: string
  salary: string | number
  birthDate: Date | string
}

class UserService extends Service {
  async newUser(data: NewUserProps) {
    const finded = await this.repo.user.findOneBy({ email: data.email, cpf: data.cpf })

    if (finded !== null) {
      throw new Error("usuario ja existe no sistema")
    }

    await this.repo.user.insert(data)

    return {
      message: `usuario ${data.name}, registrado com successo!`
    }
  }

  async getUserList(skip: number = 0, take: number = 10, keyword: string = "") {
    const [data, total] = await this.repo.user.findAndCount({
      where: { name: Like("%" + keyword + "%") },
      order: { name: "DESC" },
      select: [
        "id",
        "cpf",
        "email",
        "birthDate",
        "name",
        "salary",
        "created_at"
      ],
      skip,
      take
    })

    const result = this.dataManipulation.paginationParse(data, total, skip, take)

    return result
  }

  async getUser(id: string) {
    const findedUser = await this.repo.user.findOne({
      where: { id },
      select: [
        "id",
        "birthDate",
        "cpf",
        "email",
        "salary",
        "name"
      ]
    })

    return findedUser
  }

  async editUser(id: string, data: NewUserProps) {
    const finded = await this.repo.user.findOneBy({ id })

    if (finded === null) {
      throw new Error("usuario nao existe")
    }

    await this.repo.user.update({ id }, data)

    return {
      message: `usuario ${finded.name} atualizado`
    }
  }

  async deleteUser(id: string) {
    const finded = await this.repo.user.findOneBy({ id })

    if (finded === null) {
      throw new Error("usuario nao existe")
    }

    await this.repo.user.delete({ id })

    return {
      message: `usuario ${finded.name} deletado`
    }
  }
}

export default UserService