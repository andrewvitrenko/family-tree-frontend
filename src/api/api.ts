import { Http } from './http';

export class Api {
  protected http: Http;

  constructor() {
    this.http = new Http();
  }
}
