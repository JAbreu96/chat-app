"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let authRoute = (0, express_1.Router)();
authRoute.get('/signin', (req, res) => {
    res.send("Auth");
});
exports.default = authRoute;
//# sourceMappingURL=authenticate.js.map