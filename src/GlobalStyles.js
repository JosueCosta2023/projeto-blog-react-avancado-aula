import { createGlobalStyle } from "styled-components";


const GlobalStyleReset = createGlobalStyle`
    *{
        margin:0px;
        padding: 0px;
        box-sizing: border-box; 
    }

    body{
        font-family: 'font-do-site', sans-serif; 
    }

`

export default GlobalStyleReset
