import { css } from '@emotion/react';

export const PageContainer = css`
    padding: 20px;
`;
export const DocumentContainer = css`
    h3{
        margin: 20px 0 0 0;
        padding: 0;
        font-weight: 700;
        font-size: 1.5rem;
        color: #fff;
    }

     p{
        padding: 24px;
        background-color: rgba(145, 158, 171, 0.12);
        margin-top: 20px;
        font-size: 1.0rem;
        font-weight: 400;
        color: #f8f8f8;
        border: 1px dashed rgba(145, 158, 171, 0.24);
        border-radius: 12px;
        line-height: 45px;
    }
    span{
        color: rgb(250, 84, 28);
    }
`;



export const PageTitleContainer = css`
    h3{
        margin: 50px 0 0 0;
        padding: 0;
        font-weight: 700;
        font-size: 1.5rem;
        color: #fff;
    }
    
    p{
        margin-top: 20px;
        font-size: 1.0rem;
        font-weight: 400;
        color: rgb(145, 158, 171);
    }

`;

export const ConponentsContaoner = css`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px; 



    @media(max-width:501px){
        display: flex;
        gap: 10px;
        flex-direction: column;
    }
`;

export const FooterContainer = css`
    margin-top: 100px;
    padding: 100px 20px;
    border-top: 1px solid rgb(145, 158, 171, 0.24);
`;