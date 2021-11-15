import { Todos } from "./pages/Todos";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import { Users } from "./pages/Users";
import { DefaultPages } from "./templates/DefaultPages";
const PublicRoutes = () => {
  return (
    <>
      <DefaultPages>
        <ReactRoutes>
          <Route path="/" element={<Todos />} />
          <Route path="/users" element={<Users />} />
        </ReactRoutes>
      </DefaultPages>
    </>
  );
};

export const Routes = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};
