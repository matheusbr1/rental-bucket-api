import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { Contact } from '../../../../_contact/infra/typeorm/entities/Contact'
import { Address } from '../../../../_address/infra/typeorm/entities/Address'


@Entity('drivers')
class Driver {
  @PrimaryColumn()
  id?: string

  @Column()
  name: string

  @Column()
  CPF: number

  @Column()
  RG: string

  @Column()
  CNH: number

  @Column()
  birthday: string

  @Column()
  company_id: string

  @OneToMany(() => Contact, (contact) => contact.driver)
  contacts: Contact[]

  @OneToOne(() => Address, (address) => address.driver)
  address: Address

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Driver }