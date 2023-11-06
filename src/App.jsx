import { Navigate, Route, Routes } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";
import Header from "./components/layout/Header";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AddItemPage from "./pages/AddItemPage";
import { Toaster } from "react-hot-toast";
import Footer from "./components/layout/Footer";
import { useAuth } from "./store/AuthProvider";
import InitPage from "./pages/InitPage";
import AboutUsPage from "./pages/AboutUsPage";
import SingleItem from "./pages/SingleItem";
import SingleItemPage from "./pages/SingleItemPage";

export default function App() {
  const ctx = useAuth();
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path={"/about"} element={<AboutUsPage />}></Route>
        <Route path={"/"} element={<InitPage />}></Route>
        <Route path={"/store"} element={<ItemsPage />}></Route>

        <Route
          path={"/add-item-page"}
          element={
            ctx.isUserLoggedIn ? (
              <AddItemPage />
            ) : (
              <Navigate to={"/login-page"} />
            )
          }
        ></Route>
        <Route
          path={"/register-page"}
          element={
            !ctx.isUserLoggedIn ? <RegisterPage /> : <Navigate to={"/store"} />
          }
        ></Route>
        <Route path={"/login-page"} element={<LoginPage />}></Route>
        <Route path="/singleItem/:itemId" element={<SingleItemPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
