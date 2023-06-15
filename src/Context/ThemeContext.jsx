import { createContext, useState } from "react"
import ReactLogoDark from '../img/logo2.svg'
import ReactLogoLight from '../img/logo.svg'

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
   
    const [theme, setTheme] = useState('modo-claro');

    const [logoToggle,setLogoToggle] = useState(ReactLogoLight);



      const toggleTheme = () => {
        setTheme(theme === "modo-claro" ? "modo-escuro" : "modo-claro" );
      };



    const toggleLogo = () => {
        setLogoToggle(logoToggle === ReactLogoDark ? ReactLogoLight : ReactLogoDark );
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme,toggleLogo,logoToggle,setTheme}}>
            {children}
        </ThemeContext.Provider>

    )

}