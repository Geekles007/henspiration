import React, {memo, useContext} from "react";
import { MdFlipToFront, MdFlipToBack } from "react-icons/md";
import styled from "styled-components";
import {AppContext} from "../../App";

const SwitchButtonWrapper = styled.button`
  border: none;
  cursor: pointer;
  
  font-size: 1.4rem;
  background-color: transparent;
  border-radius: .5rem;
  
  color: #fff;
`;

type SwitchButtonProps = {
    className?: string;
}

const SwitchButton = ({className}: SwitchButtonProps) => {

    const {showList, setShowList} = useContext(AppContext);

    return <SwitchButtonWrapper className={`${className}`} onClick={() => setShowList((old: boolean) => !old)}>
        {
            showList ? <MdFlipToBack /> : <MdFlipToFront />
        }
    </SwitchButtonWrapper>

}

export default memo(SwitchButton);
