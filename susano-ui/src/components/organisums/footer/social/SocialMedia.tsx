/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx} from "@emotion/react";
import React from 'react'
import GithubIcon from '../../../../images/brand-github.svg';
import TwitterIcon from '../../../../images/twitter.svg';
import InstagramIcon from '../../../../images/instagram.svg';

import * as Css from './socialMediaStyle';

const SocialMedia = () => {
  return (
      <div css={Css.SocialMediaContaioner}>
          <h4>Social</h4>
          <div css={Css.IconsContainer}>
              <button>
                  <img src={TwitterIcon} alt="github icon" />
              </button>
              <button>
                  <img src={InstagramIcon} alt="github icon" />
              </button>
              <button>
                  <img src={GithubIcon} alt="github icon" />
              </button>
          </div>
      </div>
  )
}

export default SocialMedia