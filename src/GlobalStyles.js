import styled, { createGlobalStyle } from "styled-components";
import { theme } from "./theme";    

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        justify-content: center;
        align-items: center;
        height: 100%;
        overflow-x: hidden;
        text-rendering: optimizeLegibility;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
         "Segoe UI Symbol", "Lato", "Poppins";
        
        @media screen and (max-wdth: ${theme.mobile}) {
            padding-right: 30px;
            padding-left: 30px; 
        }
    } 
    `;

    export const Container = styled.div`
        z-index: 1;
        width: 100%;
        max-width: 1300px;
        margin-right: auto;
        margin-left: auto;
        padding-right: 50px;
        padding-left: 50px;
        /* border: dashed 2px darkcyan; */

        @media screen and (max-wdth: ${theme.mobile}) {
            padding-right: 30px;
            padding-left: 30px; 
        }
    `;

    export const Button = styled.button`
        border-radius: 4px;
        background: ${({primary}) => (primary ? theme.purplePrimary : theme.bluePrimary) };
        white-space: nowrap;
        padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
        color: ${({primary}) => (primary ? theme.LightPrimary : theme.DarkPrimary )} ;
        font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
        outline: none;
        border: none;
        cursor: pointer;


        &:hover {
            transition: all 0.3s ease-out;
            background: #fff;
            background: ${({primary})=> (primary ? theme.bluePrimary : theme.purplePrimary)};    
        }

        @media screen and (max-width: ${theme.mobile}) {
            width: 100%;
        }
    `

    export default  GlobalStyles 

