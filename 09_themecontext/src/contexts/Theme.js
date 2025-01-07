// import React from "react";
// const Theme = React.createContext(
// )
// export default Theme;

import { createContext,useContext } from "react";

export const Theme = createContext({
themeMode : 'light',
darkTheme : () => {},
lightTheme : () => {},
}
)

export  const ThemecontextProvider = Theme.Provider
export default function useTheme(){
    return useContext(Theme)
}