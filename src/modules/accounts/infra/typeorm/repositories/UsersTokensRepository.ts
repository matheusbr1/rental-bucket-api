import { getRepository, Repository } from "typeorm";
import { ICreateUserTokenDTO } from "../../../dtos/ICreateIUserTokenDTO";
import { IUsersTokensRepository } from "../../../repositories/IUsersTokensRepository";
import { UserTokens } from "../entities/UserTokens";

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>

  constructor() {
    this.repository = getRepository(UserTokens)
  }

  async create({
    expires_date,
    refresh_token,
    user_id
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      expires_date,
      refresh_token,
      user_id
    })

    await this.repository.save(userToken)

    return userToken
  }

  async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens> {
    const user_token = await this.repository.findOne({
      user_id,
      refresh_token
    })

    return user_token
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}

export { UsersTokensRepository }