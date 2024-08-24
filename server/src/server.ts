import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser'
import cors from 'cors';
import { DB_URL,PORT } from './config/config';
import connectDB from './config/connection';

class AppServer extends Server {
  constructor() {
    super();
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }
  
//   private loadCommonControllers() {
//     const controllerInstances = [];
//     for (const name of Object.keys(controllers)) {
//       const controller = (controllers as any)[name];
//       if (typeof controller === 'function') {
//         controllerInstances.push(new controller());
//       }
//     }
//     super.addControllers(controllerInstances, null);
//   }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

connectDB(DB_URL);
const server = new AppServer();
server.start(PORT);