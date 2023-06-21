import { createContext, useState } from "react"
import ReactLogoDark from '../img/logo2.svg'
import ReactLogoLight from '../img/logo.svg'
import Sun from '../img/sun.png';
import Moon from '../img/moon.png';
import LogoLight from '../img/logo_light.png';
import LogoDark from '../img/logo_dark.png';


export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
   
    const [theme, setTheme] = useState('modo-claro');
    const [logoToggle,setLogoToggle] = useState(ReactLogoLight);
    const [icon, setIcon] = useState(Sun);
    const [logoAndre, setLogoAndre] = useState(LogoLight);



      const toggleTheme = () => {
        setTheme(theme === "modo-claro" ? "modo-escuro" : "modo-claro" );
      };



    const toggleLogo = () => {
        setLogoToggle(logoToggle === ReactLogoDark ? ReactLogoLight : ReactLogoDark );
    }

    const toggleIcon = () => {
      setIcon(icon === Sun ? Moon : Sun )

    } 

    const toggleLogoAndre = () => {
      setLogoAndre(logoAndre === LogoLight ? LogoDark : LogoLight )

    } 

    return(
        <ThemeContext.Provider value={{toggleIcon,theme,icon,toggleTheme,toggleLogo,logoToggle,setTheme,toggleLogoAndre,logoAndre}}>
            {children}
        </ThemeContext.Provider>

    )

}