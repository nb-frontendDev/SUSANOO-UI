import { css } from '@emotion/react'

export const PageSectionContainer = css`
padding:  50px 100px;
`;


export const titleAreaContainer = css`
    h2{
        color: #fff;
        font-size: 2.5rem;
        font-weight: bold;
    }
    p{
        margin-top: 10px;
        font-size: 1rem;
        color: rgb(145, 158, 171);
}
    }
`;

export const componentsAreaStyle = css`
    margin-top: 50px;
    

    h3{
         color: #fff;
         font-size: 1.5rem;
         font-weight: bold;
    }
`;


export const componentsContainer = css`
    margin-top: 10px;
padding: 20px;
border: 1px solid rgb(145, 158, 171, 0.24);
border-radius: 10px;
`;

export const switchButtonContainer = css`
position: relative;

div{
    width: 40px;
    height: 15px;
    border-radius: 25px;
    background-color: rgb(145, 158, 171, 0.2) ;
}

button{
    position: absolute;
    top: -1px;
    left: 1px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background-color: rgb(250, 84, 28);
}
`;

