import React, {memo, useContext, useEffect} from "react";
import styled, {keyframes} from "styled-components";
import {ITrack} from "../../models/IAlbum";
import {DateTime, Duration} from "luxon";
import {useGlobal} from "../../hooks/use-global";
import {AppContext} from "../../App";

const pulse = keyframes`
  0% {
  @include transform(scale(.9));
  }
  70% {
  @include transform(scale(1));
    box-shadow: 0 0 0 50px rgba(#5a99d4, 0);
  }
  100% {
  @include transform(scale(.9));
    box-shadow: 0 0 0 0 rgba(#5a99d4, 0);
  }
`

const TrackItemWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: .5rem;
  background-color: rgba(0, 0, 0, .4);
  padding: 1rem 1rem;
  border: none;

  box-shadow: 4px 3px 5px 0px rgba(0,0,0,0.22);
  -webkit-box-shadow: 4px 3px 5px 0px rgba(0,0,0,0.22);
  -moz-box-shadow: 4px 3px 5px 0px rgba(0,0,0,0.22);
  
  width: 100%;
  color: #fff;

  ._left {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: .9rem;
    }
    
    &:before {
      -webkit-animation: ${pulse} 1.5s infinite;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: ${({theme}) => theme.primary};
      box-shadow: 0 0 0 0 rgba(${({theme}) => theme.primary}, .5);
    }
  }

  ._right {
    display: flex;
    align-items: center;

    span {
      font-size: .7rem;
    }
  }
  
  &._playing {
    ._left {
      color: ${({theme}) => theme.primary};
      
      &:before {
        display: block;
        content: "";
      }
    }
  }
`;

type TrackItemProps = {
    track: ITrack;
    index: number;
}

const TrackItem = ({track, index}: TrackItemProps) => {

    const time = Duration.fromMillis(track.duration_ms).shiftTo("hours", "minutes", "seconds").toObject();
    const {album, currentIndex, setCurrentIndex} = useContext(AppContext);

    return <TrackItemWrapper onClick={() => setCurrentIndex(index)} className={album?.tracks?.items?.[currentIndex]?.id === track?.id ? "_playing" : ""}>
        <div className="_left">
            <span>{track?.name}</span>
        </div>
        <div className="_right">
            <span
                className={"_time"}>{(time?.minutes ?? 0) < 10 ? `0${time?.minutes}` : time?.minutes}:{(time?.seconds?.toFixed() ?? 0) < 10 ? `0${time?.seconds?.toFixed()}` : time?.seconds?.toFixed()}</span>
        </div>
    </TrackItemWrapper>

}

export default memo(TrackItem);
