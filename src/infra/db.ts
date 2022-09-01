import mongoose from 'mongoose';

export default class Database {
  private DB_URL = `mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/db_portal`;

  createConnection() {
    mongoose.connect(this.DB_URL);
  }
}
