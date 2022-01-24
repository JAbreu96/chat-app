"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./users/index"));
const index_2 = __importDefault(require("./messages/index"));
const index_3 = __importDefault(require("./conversations/index"));
let masterRoutes = (0, express_1.Router)();
masterRoutes.use('/user', index_1.default);
masterRoutes.use('/messages', index_2.default);
masterRoutes.use('/convo', index_3.default);
exports.default = masterRoutes;
//# sourceMappingURL=routes.js.map