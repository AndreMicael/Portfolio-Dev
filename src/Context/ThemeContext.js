import { createContext, useState } from "react"
import ReactLogoDark from '../img/logo2.svg'
import ReactLogoLight from '../img/logo.svg'
import Sun from '../img/sun.png';
import Moon from '../img/moon.png';
import LogoLight from '../img/logo_light.png';
import LogoDark from '../img/logo_dark.png';

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
   
    const [theme, setTheme] = useState('modo-escuro');
    const [logoToggle,setLogoToggle] = useState(ReactLogoDark);
    const [icon, setIcon] = useState(Moon);
    const [logoAndre, setLogoAndre] = useState(LogoDark);
 
  
   
 

      const toggleTheme = () => {
        setTheme(theme === "modo-escuro" ? "modo-claro" : "modo-escuro" );
      };
   

    const toggleLogo = () => {
        setLogoToggle(logoToggle === ReactLogoLight ? ReactLogoDark : ReactLogoLight );
    }

    const toggleIcon = () => {
      setIcon(icon === Moon ? Sun : Moon )

    } 
    const toggleLogoAndre = () => {
      setLogoAndre(logoAndre === LogoDark ? LogoLight : LogoDark )

    } 

 

    return(
        <ThemeContext.Provider value={{toggleIcon,theme,icon,toggleTheme,toggleLogo,logoToggle,setTheme,toggleLogoAndre,logoAndre}}>
            {children}
        </ThemeContext.Provider>

    )

}