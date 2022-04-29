"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_routes_1 = require("./routes/categories.routes");
const port = 3051;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/categories", categories_routes_1.CategoryRoutes);
app.listen(port, () => console.log(`server running on port ${port}`));