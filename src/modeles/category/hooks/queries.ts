import { useQuery } from "@tanstack/react-query";
import { ParamsType } from "../../../types";
import { getCategory } from "../service";
export function useGetCategory(params: ParamsType){
    return useQuery({
        queryKey: ["category", params], 
        queryFn: () => getCategory(params)
    })
}