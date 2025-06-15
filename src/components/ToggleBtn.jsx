import { useEffect } from "react";
import useTheme from "../context/theme";


const ThemeBtn = () => {
    let { theme, setTheme } = useTheme();

    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark');
        document.querySelector('html').classList.add(theme);
    }, [theme])

    function toggle() {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return <>
        <button onClick={() => toggle()}>
            Toggle
        </button>
    </>
}

export default ThemeBtn;