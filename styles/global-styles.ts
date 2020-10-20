import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    *::-webkit-scrollbar {
        display: none;
    }
    *:focus {
        outline: 0;
    }   
`;

export default GlobalStyle;
