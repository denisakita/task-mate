import Logo from "../assets/logo.png";
import {useEffect, useState} from "react";

export const Header = () => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "dark");

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
    }, [theme])
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="TaskMate"/>
                <span>Task Mate</span>
            </div>
            <div className="themeSelector">
                <span onClick={() => setTheme("light")}
                      className={theme === "light" ? "light activeTheme" : "dark"}></span>
                <span onClick={() => setTheme("medium")}
                      className={theme === "medium" ? "medium activeTheme" : "dark"}></span>
                <span onClick={() => setTheme("dark")}
                      className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
            </div>
        </header>
    )
}
