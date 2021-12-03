"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let postMessageRoute = (0, express_1.Router)();
postMessageRoute.post('/', (req, res) => {
    res.send("post message");
});
exports.default = postMessageRoute;
//# sourceMappingURL=post.js.map