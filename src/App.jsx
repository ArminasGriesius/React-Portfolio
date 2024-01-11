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
import AboutMePage from "./pages/AboutMePage";
import SingleItemPage from "./pages/SingleItemPage";
import Cart from "./pages/Cart";
import Music from "./pages/PassionPages/Music";
import Acting from "./pages/PassionPages/Acting";
import Coding from "./pages/PassionPages/Coding";
import GitCourse from "./pages/coursesPages/GitCourse";
import HtmlAndCssCourse from "./pages/coursesPages/HtmlAndCssCourse";
import JavascriptCourse from "./pages/coursesPages/JavascriptCourse";
import ReactCourse from "./pages/coursesPages/ReactCourse";
import CheckoutPage from "./pages/CheckoutPage";

export default function App() {
  const ctx = useAuth();
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path={"/about"} element={<AboutMePage />}></Route>
        <Route path={"/"} element={<InitPage />}></Route>
        <Route path={"/store"} element={<ItemsPage />}></Route>
        <Route path={"/cart"} element={<Cart />}></Route>
        <Route path={"/checkout"} element={<CheckoutPage />}></Route>
        <Route path={"/passion-music"} element={<Music />}></Route>
        <Route path={"/passion-acting"} element={<Acting />}></Route>
        <Route path={"/passion-Coding"} element={<Coding />}></Route>
        <Route path={"/course-git"} element={<GitCourse />}></Route>
        <Route path={"/course-react"} element={<ReactCourse />}></Route>
        <Route
          path={"/course-javascript"}
          element={<JavascriptCourse />}
        ></Route>
        <Route
          path={"/course-htmlandcss"}
          element={<HtmlAndCssCourse />}
        ></Route>

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
