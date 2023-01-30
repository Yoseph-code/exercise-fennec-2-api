import { Service } from "../../lib/service";

type NewUserProps = {
  name: string
  cpf: string | number
  email: string
  salary: string | number
  birthDate: Date | string
}

class UserService extends Service {
  async newUser(data: NewUserProps) { }
}

export default UserService