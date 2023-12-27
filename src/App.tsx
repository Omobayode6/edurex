import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/reusable/ScrollToTop";
import AuthScreen from "./pages/auth/AuthScreen";
import SplashHome from "./pages/splash/SplashHome";
import FirstSplash from "./pages/splash/FirstSplash";
import SecondSplash from "./pages/splash/SecondSplash";
import ThirdSplah from "./pages/splash/ThirdSplah";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Plash Screen */}
        <Route path="/" element={<SplashHome/>} />
        <Route path="/first" element={<FirstSplash/>} />
        <Route path="/second" element={<SecondSplash/>} />
        <Route path="/third" element={<ThirdSplah/>} />
        {/* Auth Screen */}
        <Route path="/auth" element={<AuthScreen/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
