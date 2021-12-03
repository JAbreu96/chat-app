"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const read_1 = __importDefault(require("./read/read"));
const post_1 = __importDefault(require("./post/post"));
let messageRoutes = (0, express_1.Router)();
messageRoutes.use('/post', post_1.default);
messageRoutes.use('/get', read_1.default);
exports.default = messageRoutes;
//# sourceMappingURL=index.js.map