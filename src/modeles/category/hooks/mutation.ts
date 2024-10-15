import { useMutation } from "@tanstack/react-query";
import { createCategory } from "../service";
import { CategoryType } from "../types";

export function useCreateCategory () {
    return useMutation({
        mutationFn: (data: CategoryType) => createCategory(data),
        onSuccess: async (data)=> {
            console.log(data)
        },
        onError: async (error)=> {
            console.log(error)
        },
        onSettled: async () => {
             
        }
    })
}