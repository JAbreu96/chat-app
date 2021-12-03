"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let newConvoRoute = (0, express_1.Router)();
newConvoRoute.post('/', (req, res) => {
    res.send("post conversation");
});
exports.default = newConvoRoute;
//# sourceMappingURL=new_convo.js.map