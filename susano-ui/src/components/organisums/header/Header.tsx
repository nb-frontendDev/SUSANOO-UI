/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/react";
import React from 'react'
import * as Css from './headerStyle';
import GithubIcon from '../../../images/brand-github.svg';
import SettingIcon from '../../../images/settings.svg';
import { Link } from "react-router-dom";

const Header = () => {
    const onClickGithub = () => { 
        window.location.href = 'https://github.com/shotawatanabe-coding';
    }
    
  return (
      <div css={Css.headerContainer}>
          <div css={Css.linkContainer}>
              <div>
                  <Link to='/'>Home</Link>
              </div>
              <div>
                  <Link to='/components'>Components</Link>
              </div>
              <div>
                  <Link to='/pages'>Pages</Link>
              </div>
          </div>
          <div css={Css.buttonContainer}>
              <button css={Css.buttonStyle} onClick={() => onClickGithub()}>
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
