"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const init_1 = __importDefault(require("../../../socket_controller/init"));
let authRoute = (0, express_1.Router)();
const index_1 = __importDefault(require("../../../../models/index"));
const authenticate = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const sequelize: any = await initDB.init()
        yield index_1.default.sequelize.authenticate();
        let queryStr = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
        index_1.default.sequelize.query(queryStr).then((data) => { console.log(data); });
        yield index_1.default.sequelize.close();
    }
    catch (_a) {
        console.log('Not connected');
        return false;
    }
    finally {
        return true;
    }
});
init_1.default.open().use((socket, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield authenticate('jc_abreu', 'gird')) {
    }
    else {
    }
    next();
}))
    .on('connection', (socket) => {
    console.log('user has connected');
    // socket.on('authenticate', (data: any) => {
    //   authenticate();
    // });
});
// authRoute.get('/', (req: any, res: any) => {
//   // const { password, username, email } = req.body;
//   authenticate();
//   res.send("Auth");
// });
exports.default = authRoute;
//# sourceMappingURL=auth.js.map