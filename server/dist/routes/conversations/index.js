"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_convo_1 = __importDefault(require("./get_convo/get_convo"));
const new_convo_1 = __importDefault(require("./new_convo/new_convo"));
let conversationRoutes = (0, express_1.Router)();
conversationRoutes.use('/read', get_convo_1.default);
conversationRoutes.use('/new', new_convo_1.default);
exports.default = conversationRoutes;
//# sourceMappingURL=index.js.map