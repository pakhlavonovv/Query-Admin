import loadable from "@loadable/component";
import Category from './category/pages/index'
import { MyComponent } from "../components";
const SignIn = loadable(()=> import("../modeles/auth/pages/login"), {
    fallback: <MyComponent/>
})
const SignUp = loadable(()=> import("../modeles/auth/pages/sign-up"), {
    fallback: <MyComponent/>
})
const AdminLayout = loadable(()=> import("./layouts/admin-layout"), {
    fallback: <MyComponent/>
})

export { SignIn, SignUp, Category, AdminLayout }