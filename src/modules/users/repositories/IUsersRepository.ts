import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUSerDTO';

export default interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  findByID(id: string): Promise<User | undefined>;
  save(user: User): Promise<User>;
}
