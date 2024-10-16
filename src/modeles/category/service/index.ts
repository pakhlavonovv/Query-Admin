import https from "../../../api";
import { ParamsType } from "../../../types";
import { CategoryType } from "../types";

// ========= GET CATEGORY =========
export async function getCategory(params: ParamsType) {
  return await https.get("category/search", { params });
}

// ========= CREATE CATEGORY =========
export async function createCategory(data: CategoryType) {
  return await https.post("category/create", data);
}

// ========= UPDATE CATEGORY =========
export async function updateCategory(id: string, data: CategoryType) {
  return await https.put(`category/${id}`, data);
}

// ========= DELETE CATEGORY =========
export async function deleteCategory(id: string) {
  return await https.delete(`category/${id}`);
}
