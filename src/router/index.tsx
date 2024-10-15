import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";
import App from "../App";

import {
   Login,
   SignUp,
   Category
} from "../modeles/index"
import AdminLayout from '../modeles/layouts/admin-layout'

const Index = () => {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/" element={<App />}>
            <Route index element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="admin-layout" element={<AdminLayout />}>
               <Route path="category" element={<Category />} />
            </Route>
         </Route>
      )
   );

   return <RouterProvider router={router} />;
};

export default Index;
