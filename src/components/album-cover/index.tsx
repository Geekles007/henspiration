import React, {memo, useContext} from "react";
import styled from "styled-components";
import Controls from "../controls";
import SwitchButton from "../switch-button";
import {AppContext} from "../../App";

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
  
  ._switch {
    position: absolute;
  }

  @media(max-width: 400px) {
    width: 250px;
    height: 250px;
  }
  
  z-index: 9;
  
  transition: all .5s 0s ease-in-out;
`;

type AlbumCoverProps = {
    cover?: string;
}

const AlbumCover = ({cover}: AlbumCoverProps) => {

    const {showList} = useContext(AppContext);

    return <AlbumCoverWrapper image={cover} className={showList ? "_inactive" : "_active"}>
        <SwitchButton className={"_switch"} />
    </AlbumCoverWrapper>

}

export default memo(AlbumCover);
