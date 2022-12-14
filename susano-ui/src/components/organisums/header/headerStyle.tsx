import { css } from '@emotion/react';

export const headerContainer = css`
    display: flex;
    display:-webkit-box;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
    background-color: #191e25;

`;

export const linkContainer = css`
    display: flex;
    display:-webkit-box;
    gap: 40px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;

    div{

      &:hover{
        transition: all 0.2s;
        color:rgb(250, 84, 28);
      }
      
    }
`;

export const buttonContainer = css`
display: flex;
gap:  10px;
`;


export const buttonStyle = css`
  background-color: transparent;
  border: 1px solid #707070;
  border-radius: 5px;
  padding: 5px;
  width: 27px;
  height: 27px;
  position: relative;

  img{
    position: absolute;
    top: 4px;
    left: 4px;

    width: 18px;
    height: 18px;
  }

  &:hover{
    opacity: 0.7;
    transition: all 0.5s;
  }




`
