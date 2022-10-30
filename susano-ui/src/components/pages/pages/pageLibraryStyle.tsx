import { css } from "@emotion/react";

export const pageLibraryContainer = css`
margin-top: 50px;
text-align: center;
`;

export const mainTitleStyle = css`
h2{
    font-size: 2rem;
    color: #fff;
    font-weight: 700;
}

p{
    margin-top: 20px;
    color: rgb(145, 158, 171);
    font-size: 1rem;
}
`

export const pageTemplateContainer = css`
    margin-top: 50px;
    padding: 0 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`;

export const pagePartsStyle = css`

div{
    height: 230px;
    width: 400px;
    border: 1px solid rgb(145, 158, 171);
    border-radius: 10px;
    position: relative;

    &:hover{
        opacity: 0.7;
        transition: all 0.5s;
    }

    &::before{
        content: 'Coming Soon';
        position: absolute;
        top: 45%;
        left: 38%;
        color:#fff;

    }
}

h4{
    margin-top: 10px;
    text-align: left;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
}
p{
    margin-top: 5px;
    text-align: left;
    color: rgb(145, 158, 171);
    font-size: 0.875rem;
    font-weight: 600;
}

`;