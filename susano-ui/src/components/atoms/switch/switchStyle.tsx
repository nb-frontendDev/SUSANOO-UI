import { css } from '@emotion/react'


export const switchButtonContainer = css`
position: relative;
width: 40px;
transition: all 0.5s;

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

    &:clicked{
      transition: all 0.5s;
    }
    
}
`;

export const clickedSwitchButtonContainer = css`
position: relative;
width: 40px;
transition: all 0.5s;

div{
    width: 40px;
    height: 15px;
    border-radius: 25px;
    background-color: rgb(145, 158, 171, 0.2) ;
}

button{
    position: absolute;
    top: -1px;
    right: 1px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background-color: rgb(250, 84, 28);

      &:clicked{
      transition: all 0.5s;
    }
}
`;