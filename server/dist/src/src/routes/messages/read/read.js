"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let retrieveMessageRoute = (0, express_1.Router)();
retrieveMessageRoute.get('/', (req, res) => {
    res.send("retrieve message");
});
exports.default = retrieveMessageRoute;
//# sourceMappingURL=read.js.map