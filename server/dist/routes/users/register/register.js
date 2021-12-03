"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let registerRoute = (0, express_1.Router)();
registerRoute.post('/', (req, res) => {
    console.log("registered");
    res.send("registered");
});
exports.default = registerRoute;
//# sourceMappingURL=register.js.map