import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/reusable/ScrollToTop";
import AuthScreen from "./pages/auth/AuthScreen";
import SplashHome from "./pages/splash/SplashHome";
import FirstSplash from "./pages/splash/FirstSplash";
import SecondSplash from "./pages/splash/SecondSplash";
import ThirdSplah from "./pages/splash/ThirdSplah";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Home from "./pages/dashboard/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Plash Screen */}
        <Route path="/edurex/" element={<SplashHome/>} />
        <Route path="/edurex/first" element={<FirstSplash/>} />
        <Route path="/edurex/second" element={<SecondSplash/>} />
        <Route path="/edurex/third" element={<ThirdSplah/>} />
        {/* Auth Screen */}
        <Route path="/edurex/auth" element={<AuthScreen/>} />
        <Route path="/edurex/login" element={<Login/>} />
        <Route path="/edurex/register" element={<Register/>} />
        <Route path="/edurex/forgot-password" element={<ForgotPassword/>} />
        {/* Dashboard Screen */}
        <Route path="/edurex/dashboard" element={<Home/>} />
        <Route path="/edurex/*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
