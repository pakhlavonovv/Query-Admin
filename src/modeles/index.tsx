import loadable from "@loadable/component";
import { MyComponent } from "../components";
const SignIn = loadable(()=> import("../modeles/auth/pages/login"), {
    fallback: <MyComponent/>
})
const SignUp = loadable(()=> import("../modeles/auth/pages/sign-up"), {
    fallback: <MyComponent/>
})
const Category = loadable(()=> import("../modeles/category/pages/index"), {
    fallback: <MyComponent/>
})

export { SignIn, SignUp, Category }