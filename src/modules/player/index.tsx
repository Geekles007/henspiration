import React, {memo, useContext} from "react";
import styled from "styled-components";
import AlbumCover from "../../components/album-cover";
import PlayerList from "../../components/player-list";
import Controls from "../../components/controls";
import {useAlbum} from "../../hooks/use-album";
import {AppContext} from "../../App";
import {useAudioPlayer} from "../../hooks/use-audio-player";
import PlayerProgress from "../../components/player-progress";
import HeaderUI from "../../components/header";

const PlayerUIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.2);
  backdrop-filter: blur(50px);
  
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
      width: 300px;
      height: 300px;
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
    margin-top: 2rem;
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

  ._integral {
    backdrop-filter: blur(50px);
    //background-color: ${({theme}) => theme.white};
    padding: .3rem .8rem;
    border-radius: 50px;
    font-size: .9rem;

    display: flex;
    align-items: center;
    gap: .5rem;
    
    position: absolute;
    bottom: 1rem;

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

    return <PlayerUIWrapper id={"player"} >
        {/*<AudioReader reference={audio} />*/}
        <HeaderUI />
        <strong>{album?.tracks?.items?.[currentIndex]?.name}</strong>
        <a href={album?.external_urls?.spotify ?? "#"} target={"_blank"}><span className="_name">{album?.artists?.[0]?.name}</span></a>
        <div className="_stacked">
            <AlbumCover url={album?.external_urls?.spotify ?? "#"} cover={album?.images?.[0]?.url ?? ""} />
            <PlayerList tracks={album?.tracks?.items ?? []} />
        </div>
        <div className="_controls">
            <PlayerProgress currentTime={curTime} duration={duration} onTimeUpdate={(time: any) => setClickedTime(time)} />
            <Controls handleNext={handleNext} handlePrev={handlePrev} setPlaying={setPlaying} playing={playing} />
        </div>
    </PlayerUIWrapper>

}

export default memo(PlayerUI);
