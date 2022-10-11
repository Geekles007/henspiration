import React, {memo} from "react";
import {FaSpotify, FaTiktok, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import {theme} from "../../theme";

const HeaderUIWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ._actions {
    display: flex;
    align-items: center;
    gap: 1rem;
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
  
  ._integral {
    backdrop-filter: blur(50px);
    background-color: ${({theme}) => theme.black};
    padding: .3rem .8rem;
    border-radius: 50px;
    font-size: .9rem;
    
    display: flex;
    align-items: center;
    gap: .5rem;
    
    span {
      transition: all .5s 0s ease-in-out;
      color: ${({theme}) => theme.white};
      
      &:hover {
        color: ${({theme}) => theme.spotify};
      }
    }
    
    strong {
      font-size: .9rem;
    }
  }
`;

type HeaderUIProps = {
    url: string;
}

const HeaderUI = ({url}: HeaderUIProps) => {

    return <HeaderUIWrapper>
        <div className="_actions">
            <a href="https://twitter.com/hensBenga" target={"_blank"} className={"_twitter"}><FaTwitter color={theme.twitter} /></a>
            <a href="https://www.tiktok.com/@hens_jacob" className={"_tiktok"} target={"_blank"}><FaTiktok color={theme.primary} /></a>
        </div>
        <a href={url} target={"_blank"} className="_integral">
            <FaSpotify color={theme.spotify} />
            <span>Integral album on <strong>spotify</strong></span>
        </a>
    </HeaderUIWrapper>

}

export default memo(HeaderUI);
