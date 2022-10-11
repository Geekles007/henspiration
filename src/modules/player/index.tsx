import React, {memo, useContext, useEffect, useRef} from "react";
import styled from "styled-components";
import AlbumCover from "../../components/album-cover";
import PlayerList from "../../components/player-list";
import Controls from "../../components/controls";
import {useAlbum} from "../../hooks/use-album";
import {AppContext} from "../../App";
import usePlayer from "../../hooks/use-player";
import AudioReader from "../../components/audio-reader";
import {useAudioPlayer} from "../../hooks/use-audio-player";
import PlayerProgress from "../../components/player-progress";

const PlayerUIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  position: relative;
  
  strong {
    font-weight: bold;
    font-size: 2rem;
  }
  
  span._name {
    font-size: .9rem;
    color: ${({theme}) => theme.secondary};
  }
  
  ._stacked {
    position: relative;
    width: 370px;
    height: 370px;

    @media(max-width: 400px) {
      width: 270px;
      height: 270px;
    }
  }
  
  a:hover {
    span {
      color: ${({theme}) => theme.primary};
    }
  }
  
  ._active {
    opacity: 1;
    left: 0;
    top: 0;
    bottom: 20px;
    right: 20px;
    z-index: 20;
  }
  
  ._inactive {
    opacity: .4;
    right: 0;
    bottom: 0;
    left: 20px;
    top: 20px;
    z-index: -1;
  }

  ._controls {
    position: absolute;
    bottom: -130px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    z-index: 99;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;

    border-radius: .5rem;
    width: 250px;
    
    backdrop-filter: blur(50px);
  }

  ._switch {
    position: sticky;
    top: 1rem;
    left: 1rem;
  }
`;

type PlayerUIProps = {}

const PlayerUI = ({}: PlayerUIProps) => {

    const {album, token} = useAlbum();
    const {currentIndex} = useContext(AppContext);

    const {
        playing,
        setPlaying,
        handleNext,
        handlePrev,
        curTime,
        duration,
        setClickedTime
    } = useAudioPlayer(album?.tracks?.items ?? []);

    return <PlayerUIWrapper>
        {/*<AudioReader reference={audio} />*/}
        <strong>{album?.tracks?.items?.[currentIndex]?.name}</strong>
        <a href={album?.external_urls?.spotify ?? "#"} target={"_blank"}><span className="_name">{album?.artists?.[0]?.name}</span></a>
        <div className="_stacked">
            <AlbumCover cover={album?.images?.[0]?.url ?? ""} />
            <PlayerList tracks={album?.tracks?.items ?? []} />
        </div>
        <div className="_controls">
            <PlayerProgress currentTime={curTime} duration={duration} onTimeUpdate={(time: any) => setClickedTime(time)} />
            <Controls handleNext={handleNext} handlePrev={handlePrev} setPlaying={setPlaying} playing={playing} />
        </div>
    </PlayerUIWrapper>

}

export default memo(PlayerUI);
