import { css } from '@emotion/react';

export const HeaderContainer = css`
    display: flex;
    display:-webkit-box;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
    background-color: #191e25;

`;

export const LinkContainer = css`
    display: flex;
    display:-webkit-box;
  

    gap: 40px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
`;

export const ButtonContainer = css`
display: flex;
gap:  10px;
`;


export const ButtonStyle = css`
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
