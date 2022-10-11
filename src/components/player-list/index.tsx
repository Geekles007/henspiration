import React, {memo, useContext} from "react";
import styled from "styled-components";
import Controls from "../controls";
import SwitchButton from "../switch-button";
import {AppContext} from "../../App";
import {ITrack} from "../../models/IAlbum";
import TrackItem from "../track-item";

const PlayerListWrapper = styled.div`
  width: 350px;
  height: 350px;
  border-radius: .5rem;
  overflow: hidden;
  position: absolute;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  
  z-index: 1;
  transition: all .5s 0s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media(max-width: 400px) {
    width: 280px;
    height: 280px;
  }
  
  &._active {
    backdrop-filter: blur(50px);
  }

  &._inactive {
    background-color: ${({theme}) => theme.black};
  }
  
  
  ._list {
    display: flex;
    flex-direction: column;
    padding: 30px 1rem;
    gap: 1rem;

    height: 100%;
  }
`;

type PlayerListProps = {
    tracks: ITrack[];
}

const PlayerList = ({tracks}: PlayerListProps) => {
    const {showList} = useContext(AppContext);

    return <PlayerListWrapper className={showList ? "_active" : "_inactive"}>
        <SwitchButton className={"_switch"} />
        <div className="_list">
            {
                tracks?.map((item, index) => {
                    return <TrackItem index={index} track={item} key={index} />
                })
            }
        </div>
    </PlayerListWrapper>

}

export default memo(PlayerList);
