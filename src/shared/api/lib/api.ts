import { Http } from './http';

export class Api {
  protected http: Http;

  constructor(name?: string) {
    this.http = new Http(name);
  }
}
