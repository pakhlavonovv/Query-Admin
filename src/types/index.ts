export interface SignInType {
    phone_number: string,
    password: string
}
export interface SignUpType {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    password: string;
  }
  
export interface ParamsType {
    limit: number,
    page: number,
    search: string
}