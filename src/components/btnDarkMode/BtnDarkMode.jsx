import { useEffect, useRef} from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";

import sun from "./../../img/icons/sun.svg";
import moon from './../../img/icons/moon.svg';

const BtnDarkMode = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    const btnRef = useRef(null);

    useEffect(() => {
        if (theme === 'dark'){
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active')
        } else {
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [theme])

    const handleToggleTheme = () => {
        setTheme((value) => {
            return value === 'light' ? 'dark' : 'light';
        })
    }

    return (
        <button ref={btnRef} onClick={handleToggleTheme} className="dark-mode-btn">
            <img
                src={sun}
                alt="Light mode"
                className="dark-mode-btn__icon"
            />
            <img
                src={moon}
                alt="Dark mode"
                className="dark-mode-btn__icon"
            />
        </button>
    );
}
export default BtnDarkMode;