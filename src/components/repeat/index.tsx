import React, {memo, useContext} from "react";
import styled from "styled-components";
import {BiRepeat} from "react-icons/bi";
import {AppContext} from "../../App";
import {theme} from "../../theme";

const RepeatButtonWrapper = styled.a`

`;

type RepeatButtonProps = {

}

const RepeatButton = ({}: RepeatButtonProps) => {

    const {setRepeat, repeat} = useContext(AppContext);

    return <RepeatButtonWrapper onClick={() => setRepeat((old: boolean) => !old)}>
        <BiRepeat size={22} color={repeat ? theme.primary : theme.white} />
    </RepeatButtonWrapper>

}

export default memo(RepeatButton);
