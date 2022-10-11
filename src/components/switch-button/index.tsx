import React, {memo, useContext} from "react";
import styled from "styled-components";
import {AppContext} from "../../App";
import {RiPlayListLine, RiCloseFill} from "react-icons/ri";

const SwitchButtonWrapper = styled.button`
  border: none;
  cursor: pointer;
  
  font-size: 1.3rem;
  background-color: transparent;
  border-radius: .5rem;
  
  color: #fff;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  
  span {
    font-size: .8rem;
  }
`;

type SwitchButtonProps = {
    className?: string;
}

const SwitchButton = ({className}: SwitchButtonProps) => {

    const {showList, setShowList} = useContext(AppContext);

    return <SwitchButtonWrapper className={`${className}`} onClick={() => setShowList((old: boolean) => !old)}>
        {
            showList ? <RiCloseFill /> : <RiPlayListLine />
        }
        {
            showList ? null : <span>Show Playlist</span>
        }
    </SwitchButtonWrapper>

}

export default memo(SwitchButton);
