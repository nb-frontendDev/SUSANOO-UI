/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import * as Css from './headerStyle';
import GithubIcon from '../../../images/brand-github.svg';
import SettingIcon from '../../../images/settings.svg';

const Header = () => {
    
  return (
      <div css={Css.headerContainer}>
          <div css={Css.linkContainer}>
              <p>Home</p>
              <p>Components</p>
              <p>Pages</p>
              <p>About us</p>
              <p>Blog</p>
          </div>
          <div css={Css.buttonContainer}>
              <button css={Css.buttonStyle}>
                  <img src={GithubIcon} alt="github icon" />
              </button>
              <button css={Css.buttonStyle}>
                  <img src={SettingIcon} alt="setting icon" />
              </button>
          </div>
    </div>
  )
}

export default Header;
