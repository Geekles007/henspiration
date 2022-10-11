import React, {memo} from "react";
import {FaSpotify, FaTiktok, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import {theme} from "../../theme";

const HeaderUIWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ._actions {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1rem;
    
    a {
      filter: drop-shadow(0 0 0em ${({theme}) => theme.primary});
      transition: all .5s 0s ease-in-out;
    }
    
    ._twitter:hover {
      filter: drop-shadow(0 0 10px ${({theme}) => theme.twitter});
    }
    
    ._tiktok:hover {
      filter: drop-shadow(0 0 10px ${({theme}) => theme.primary});
    }
  }
`;

type HeaderUIProps = {
}

const HeaderUI = ({}: HeaderUIProps) => {

    return <HeaderUIWrapper>
        <div className="_actions">
            <a href="https://twitter.com/hensBenga" target={"_blank"} className={"_twitter"}><FaTwitter color={theme.twitter} /></a>
            <a href="https://www.tiktok.com/@hens_jacob" className={"_tiktok"} target={"_blank"}><FaTiktok color={theme.primary} /></a>
        </div>

    </HeaderUIWrapper>

}

export default memo(HeaderUI);
