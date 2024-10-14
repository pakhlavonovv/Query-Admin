import axios from "axios";
import { SignUpType } from "../../../types";

export const signUp = (data: SignUpType) => {
  return axios.post("/api/sign-up", data);
};
