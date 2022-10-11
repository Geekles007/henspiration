import React, {memo, useContext} from "react";
import styled from "styled-components";
import {BiShuffle} from "react-icons/all";
import {AppContext} from "../../App";
import {theme} from "../../theme";

const ShuffleButtonWrapper = styled.a`
    
`;

type ShuffleButtonProps = {}

const ShuffleButton = ({}: ShuffleButtonProps) => {

    const {random, setRandom} = useContext(AppContext);

    return <ShuffleButtonWrapper onClick={() => setRandom((old: boolean) => !old)}>
        <BiShuffle size={22} color={random ? theme.primary : theme.white} />
    </ShuffleButtonWrapper>

}

export default memo(ShuffleButton);
