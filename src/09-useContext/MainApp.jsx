import { Link, Navigate, Route, Routes } from "react-router-dom"
import { HomePage, AboutPage, LoginPage } from "./"
import { UserProvider } from "./context/UserProvider"
import { NavBar } from "./NavBar"

export const MainApp = () => {
    return (
        <UserProvider>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to="login" />} />
            </Routes>
        </UserProvider>
    )
}
