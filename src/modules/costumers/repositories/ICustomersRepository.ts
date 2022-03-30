import { ICreateCustomerDTO } from "../dtos/ICreateCustomerDTO";
import { Customer } from "../entities/Customer";
interface ICustomerRepository {
  create(data: ICreateCustomerDTO): void
  list(): Customer[]
  findByCPF(CPF: number): Customer
  findByCNPJ(CNPJ: number): Customer
}

export { ICustomerRepository }