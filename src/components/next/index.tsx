import React, {memo} from "react";
import styled from "styled-components";
import {BiSkipNext} from "react-icons/bi";

const NextButtonWrapper = styled.a`
    
`;

type NextButtonProps = {
    handleNext: () => void;
}

const NextButton = ({handleNext}: NextButtonProps) => {

    return <NextButtonWrapper onClick={handleNext}>
        <BiSkipNext size={30}/>
    </NextButtonWrapper>

}

export default memo(NextButton);
