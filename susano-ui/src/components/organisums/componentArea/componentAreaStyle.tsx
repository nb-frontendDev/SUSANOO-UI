import { css } from '@emotion/react';

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