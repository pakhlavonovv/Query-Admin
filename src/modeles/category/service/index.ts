import https from "../../../api";
import { ParamsType } from "../../../types";
import { CategoryType } from "../types";

// ========= GET CATEGORY =========
export async function getCategory(params:ParamsType) {
    return await https.get("category/search", {params})
}

// ========= CREATE CATEGORY =========

export async function createCategory (data:CategoryType) {
    return await https.post("category/create", data)
}