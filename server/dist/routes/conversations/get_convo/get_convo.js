"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let getConvoRoute = (0, express_1.Router)();
getConvoRoute.get('/', (req, res) => {
    res.send("get conversation");
});
exports.default = getConvoRoute;
//# sourceMappingURL=get_convo.js.map