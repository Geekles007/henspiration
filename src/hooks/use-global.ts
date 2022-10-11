import {useState} from "react";
import {IAlbum, ITrack} from "../models/IAlbum";

export function useGlobal() {
    const [showList, setShowList] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [token, setToken] = useState<string>('');
    const [album, setAlbum] = useState<IAlbum | null>(null);

    return {
        showList,
        setShowList,
        currentIndex,
        setCurrentIndex,
        setAlbum,
        setToken,
        token,
        album
    }
}
