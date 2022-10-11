import {useContext, useEffect, useRef, useState} from "react";
import {AppContext} from "../App";
import {ITrack} from "../models/IAlbum";

function getRandom(max: number) {
    return Math.floor(Math.random() * max);
}

export function useAudioPlayer (tracks: ITrack[]) {

    const {currentIndex, setCurrentIndex, random} = useContext(AppContext);

    const [playing, setPlaying] = useState(false);
    const [clickedTime, setClickedTime] = useState<any>();
    const [curTime, setCurTime] = useState<number>();
    var audioSrc = tracks[currentIndex]?.preview_url;

    const audioRef = useRef(new Audio(tracks[0]?.preview_url));

    const intervalRef = useRef<any>();

    const isReady = useRef(false);

    const { duration } = audioRef.current;

    const setAudioTime = () => setCurTime(audioRef.current?.currentTime);

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                handleNext();
            } else {
                setCurTime(audioRef.current.currentTime);
            }
        }, 1000);
    };

    useEffect(() => {
        audioRef.current?.addEventListener("timeupdate", setAudioTime);
        if (clickedTime && clickedTime !== curTime) {
            if(audioRef.current) {
                audioRef.current.currentTime = clickedTime;
            }
            setClickedTime(null);
        }
    })

    useEffect(() => {
        if (audioRef.current.src) {
            if (playing) {
                audioRef.current.play();
                startTimer();
            } else {
                clearInterval(intervalRef.current);
                audioRef.current.pause();
            }
        } else {
            if (playing) {
                audioRef.current = new Audio(audioSrc);
                audioRef.current.play();
                startTimer();
            } else {
                clearInterval(intervalRef.current);
                audioRef.current.pause();
            }
        }
    }, [playing]);

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);

        setCurTime(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setPlaying(true);
            startTimer();
        } else {
            isReady.current = true;
        }
    }, [currentIndex]);

    useEffect(() => {
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
            audioRef.current?.removeEventListener("timeupdate", setAudioTime);
        };
    }, []);

    const handleNext = () => {
        if(random) {
            const current = getRandom(tracks?.length ?? 0);
            if (current < tracks.length - 1) {
                setCurrentIndex(current);
            } else setCurrentIndex(0);
        } else {
            if (currentIndex < tracks.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else setCurrentIndex(0);
        }
    };

    const handlePrev = () => {
        if (currentIndex - 1 < 0) setCurrentIndex(tracks.length - 1);
        else setCurrentIndex(currentIndex - 1);
    };

    const addZero = (n: number) => {
        return n > 9 ? "" + n : "0" + n;
    };
    
    return {
        playing,
        setPlaying,
        addZero,
        handlePrev,
        handleNext,
        curTime,
        duration,
        setClickedTime
    }
}
