import { beforeEach, describe, expect, it, test } from "vitest"
import api from "./utils/api"

const USER_INITIAL_CONFIG = {
  name: "Yoseph gla",
  email: "yosephgla@gmail.com",
  cpf: "00000000001",
  birthDate: new Date(),
  salary: 1000.50
}

describe("Register", () => {
  it("should create a new user", async () => {
    const { data } = await api.post("/register", USER_INITIAL_CONFIG)

    expect(data.message).toBe(`usuario ${USER_INITIAL_CONFIG.name}, registrado com successo!`)
  })

  it("should return a paginated user list", async () => {
    const { data } = await api.get("/user?page=0&size=10&keyword=")

    expect(data.data[0].name).toBe(USER_INITIAL_CONFIG.name)
  })

  it("should return a details of especifique user", async () => {
    const result = await api.get("/user?page=0&size=10&keyword=")
    const id = result.data.data[0].id
    const { data } = await api.get(`/user/${id}`)

    expect(data.id).toBe(id)
  })

  it("should edit a user", async () => {
    const result = await api.get("/user?page=0&size=10&keyword=")
    const id = result.data.data[0].id
    const { data } = await api.put(`/user/${id}`, USER_INITIAL_CONFIG)

    expect(data.message).toBe(`usuario ${USER_INITIAL_CONFIG.name} atualizado`)
  })

  it("should edit a user", async () => {
    const result = await api.get("/user?page=0&size=10&keyword=")
    const id = result.data.data[0].id
    const { data } = await api.delete(`/user/${id}`)

    expect(data.message).toBe(`usuario ${USER_INITIAL_CONFIG.name} deletado`)
  })
})