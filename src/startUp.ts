import express, { Application } from 'express';
import database from './infra/db';
import routes from './infra/routes';

class StartUp {
  public app: Application;
  private _db: database = new database();

  constructor() {
    this.app = express();
    this._db.createConnection();
    routes(this.app);
  }
}

export default new StartUp();
