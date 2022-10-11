import React, {memo, useContext} from "react";
import styled from "styled-components";
import PlayAndPauseButton from "../play";
import NextButton from "../next";
import PreviousButton from "../previous";
import RepeatButton from "../repeat";
import ShuffleButton from "../shuffle";
import {AppContext} from "../../App";

const ControlsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 50px;
  border-radius: .5rem;
  align-items: center;
  justify-content: center;

  align-self: center;

  a {
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.white};
  }
`;

type ControlsProps = {
    playing: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    handleNext: () => void;
    handlePrev: () => void;
}

const Controls = ({playing , setPlaying, handleNext, handlePrev}: ControlsProps) => {

    return <ControlsWrapper>
        <ShuffleButton/>
        <PreviousButton handlePrev={handlePrev}/>
        <PlayAndPauseButton setPlaying={setPlaying} playing={playing}/>
        <NextButton handleNext={handleNext}/>
        <RepeatButton/>
    </ControlsWrapper>

}

export default memo(Controls);
