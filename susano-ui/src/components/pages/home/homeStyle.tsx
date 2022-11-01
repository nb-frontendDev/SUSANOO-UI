import { css } from "@emotion/react";

export const mainTitleComtainer = css`
    padding: 200px 80px;

    h1{
        color: #fff;
        font-size: 2.5rem;
        font-weight: bold;
        
        span{
            color: rgb(250, 84, 28);
        }
    }
    
    p{
        margin-top: 10px;
        font-size: 1.125rem;
        color: rgb(145, 158, 171)
    }
`;
export const buttonContainer = css`
display: flex;
gap: 20px;
margin-top: 20px;


button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 169px;
    height: 38px;
    border-radius: 5px;
    font-weight: bold;
    box-sizing: border-sizing;

    &:nth-child(1){
        color: #fff;
        background-color:  rgb(250, 84, 28);

        &:hover{
            filter: brightness(80%);
            transition: all 0.3s;
        }
    }

    &:nth-child(2){
        color: rgb(250, 84, 28);
        background-color:  none;
        border: 1px solid rgb(250, 84, 28);

         &:hover{
            filter: brightness(80%);
            transition: all 0.3s;
        }
    }
}
`;

export const featureContainer = css`
    padding: 50px 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;

`;

export const featureItemStyle = css`
width: 200px;
h4{
    color: #fff;
    font-size: 1rem;
}
p{
     color: rgb(145, 158, 171)
}

`;