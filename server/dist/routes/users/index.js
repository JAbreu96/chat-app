"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth/auth"));
const register_1 = __importDefault(require("./register/register"));
let userRoutes = (0, express_1.Router)();
userRoutes.use('/auth', auth_1.default);
userRoutes.use('/register', register_1.default);
exports.default = userRoutes;
//# sourceMappingURL=index.js.map