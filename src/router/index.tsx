import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
 } from "react-router-dom";
 import App from "../App";
 
import {
    Login,
    SignUp
} from "../modeles/index"

 const Index = () => {
    const router = createBrowserRouter(
       createRoutesFromElements(
          <Route path="/" element={<App />}>
             <Route index element={<Login/>}/>
             <Route path="sign-up" element={<SignUp/>}/>
          </Route> 
       )
    );
 
    return <RouterProvider router={router} />;
 };
 
 export default Index;
 