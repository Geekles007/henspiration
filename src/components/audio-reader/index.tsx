import React, {memo, useContext} from "react";
import {AppContext} from "../../App";

type AudioReaderProps = {
    reference:  React.MutableRefObject<any>;
}

const AudioReader = ({reference}: AudioReaderProps) => {
    const {currentTrack} = useContext(AppContext);

    return <>
        <audio ref={reference} id="audio">
            <source src={currentTrack?.preview_url}/>
            Your browser does not support the <code>audio</code> element.
        </audio>
    </>

}

export default memo(AudioReader);
