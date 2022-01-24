import { Server } from 'socket.io';
import { disconnect } from 'process';
import { any } from 'sequelize/dist/lib/operators';
let io: any;

const OpenConnection = {
  open: () => {
    io = new Server(3000);
    return io;
  },
  get: () => {
    if (!io) {
      console.log('Socket not Initialized');
    } else {
      return io;
    }
  }
}

export default OpenConnection;