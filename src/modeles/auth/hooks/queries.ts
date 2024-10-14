import { useMutation } from "@tanstack/react-query";
import { signIn } from "../service";
import { signUp } from "../service"; // API chaqiruvlarini saqlovchi fayldan keltirilgan funksiyani import qilish
import { SignUpType } from "../../../../types"; // Tiplarni import qilish

export function useSignInMutation() {
    return useMutation({
        mutationFn: (data: void) => signIn(data)
    })
}

export function useSignUpMutation() {
  return useMutation((data: SignUpType) => signUp(data)); // Mutationni aniqlash
}
