import { ICreateContactDTO } from "../../dtos/ICreateContactDTO";
import { Contact } from "../../infra/typeorm/entities/Contact";
import { IContactsRepository } from "../IContactsRepository";

class ContactsRepositoryInMemory implements IContactsRepository {
  private contacts: Contact[] = []

  async create({
    contact,
    contact_type,
    customer_id,
    driver_id
  }: ICreateContactDTO): Promise<Contact> {
    const newContact = new Contact()

    Object.assign(newContact, {
      contact,
      contact_type,
      customer_id,
      driver_id
    })

    this.contacts.push(newContact)

    return newContact
  }

  async findContact(contactInfo: string): Promise<Contact> {
    return this.contacts.find(contact => contact.contact === contactInfo)
  }

  async list(): Promise<Contact[]> {
    return this.contacts
  }

  findById(id: string): Promise<Contact> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { ContactsRepositoryInMemory }