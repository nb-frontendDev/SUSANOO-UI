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
        color: rgb(250, 84, 28);;
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

export const ComponentsParts = css`
    background-color: rgb(33, 43, 54);
    color: rgb(255, 255, 255);
    border: 1px solid rgba(145, 158, 171, 0.24);
    padding: 32px 24px 32px 50px;
    border-radius: 12px;
    min-width: 400px;
    cursor: pointer;


    p{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.125rem;
        font-weight: 600;
    }

    &:hover{
        background-color: rgb(33, 43, 54 0.8);
        opacity: 0.5;
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