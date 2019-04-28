import { css } from 'styled-components';

/**
* Variables for sizing and media queries to make the page responsive
*/
export const MediaQueries = css`

    @media screen
        and (min-width: 2000px) {
        :root {
            --max-width: 50vw;
        }
    }

    @media screen 
    and (min-width: 1200px)
    and (max-width: 2000px) { 
        :root {
            --max-width: 70vw;
        }
    }

    @media screen 
    and (max-width: 1200px) { 
        :root {
            --max-width: 90vw;
        }
    }
    
`;