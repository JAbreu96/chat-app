"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_js_1 = __importDefault(require("./routes/routes.js"));
const everyRoute = routes_js_1.default;
const app = (0, express_1.default)();
const port = 3030;
app.use('/', everyRoute);
app.listen(port, () => {
    console.log(`Server listening to Port ${port}`);
});
//# sourceMappingURL=index.js.map