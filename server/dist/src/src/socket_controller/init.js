"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
let io;
const OpenConnection = {
    open: () => {
        io = new socket_io_1.Server(3000);
        return io;
    },
    get: () => {
        if (!io) {
            console.log('Socket not Initialized');
        }
        else {
            return io;
        }
    }
};
exports.default = OpenConnection;
//# sourceMappingURL=init.js.map