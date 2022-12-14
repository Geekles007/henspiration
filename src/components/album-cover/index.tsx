import React, {memo, useContext} from "react";
import styled from "styled-components";
import Controls from "../controls";
import SwitchButton from "../switch-button";
import {AppContext} from "../../App";
import {FaSpotify} from "react-icons/fa";
import {theme} from "../../theme";

const AlbumCoverWrapper = styled.div<{image?: string;}>`
  width: 350px;
  height: 350px;
  background-color: ${({theme}) => theme.black};
  background: url(${({image}) => image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: .5rem;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ._switch {
    position: absolute;
    margin-top: 1rem;
    backdrop-filter: blur(50px);
    padding: 5px 15px;
  }

  @media(max-width: 400px) {
    width: 280px;
    height: 280px;
  }
  
  z-index: 9;
  
  transition: all .5s 0s ease-in-out;
`;

type AlbumCoverProps = {
    cover?: string;
    url: string;
}

const AlbumCover = ({cover, url}: AlbumCoverProps) => {

    const {showList} = useContext(AppContext);

    return <AlbumCoverWrapper image={cover} className={showList ? "_inactive" : "_active"}>
        <SwitchButton className={"_switch"} />
        <a href={url} target={"_blank"} className="_integral">
            <FaSpotify color={theme.spotify} />
            <span>Integral album on <strong>spotify</strong></span>
        </a>
    </AlbumCoverWrapper>

}

export default memo(AlbumCover);
