/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import * as Css from './headerStyle';
import GithubIcon from '../../../images/brand-github.svg';

const Header = () => {
    
  return (
      <div css={Css.HeaderContainer}>
          <div css={Css.LinkContainer}>
              <p>Home</p>
              <p>Components</p>
              <p>Pages</p>
              <p>About us</p>
              <p>Blog</p>
          </div>
          <div css={Css.ButtonContainer}>
              <button css={Css.ButtonStyle}>
                  <img src={GithubIcon} alt="github icon" />
              </button>
              <button css={Css.ButtonStyle}>
                  G
              </button>
           
          </div>
    </div>
  )
}

export default Header;
