import React, {memo} from "react";
import styled from "styled-components";
import {BiSkipPrevious} from "react-icons/bi";

const PreviousButtonWrapper = styled.a`

`;

type PreviousButtonProps = {
    handlePrev: () => void;
}

const PreviousButton = ({handlePrev}: PreviousButtonProps) => {

    return <PreviousButtonWrapper onClick={handlePrev}>
        <BiSkipPrevious size={30}/>
    </PreviousButtonWrapper>

}

export default memo(PreviousButton);
