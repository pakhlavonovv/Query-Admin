import https from "../../../api";

// ======= AUTH SIGN IN ======= 

export function signIn (data: any){
    return https.post("auth/sign-in", data)
}
export function signUp (data:any){
    return https.post("auth/sign-up", data)
}
