import {
  InidividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from './interfaces/customer-protocol';

export class InidividualCustomer implements InidividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string;
  tradeName: string;
  cnpj: string;

  constructor(name: string, tradeName: string) {
    this.name = name;
    this.tradeName = tradeName;
    this.cnpj = '';
  }
}
