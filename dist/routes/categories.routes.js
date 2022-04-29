"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = require("express");
const CategoryRoutes = (0, express_1.Router)();
exports.CategoryRoutes = CategoryRoutes;
const category = [];
CategoryRoutes.post("/", (req, resp) => {
    const { name, description } = req.body;
    category.push({
        name,
        description
    });
    resp.status(200).send();
});
