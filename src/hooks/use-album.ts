import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {apiUrl, authEndpoint, clientId, clientSecret, henspirationAlbumId, responseType} from "../constants";
import {IAlbum} from "../models/IAlbum";
import {AppContext} from "../App";

export function useAlbum() {

    const {setToken, setAlbum, album, token} = useContext(AppContext);

    useEffect(() => {
        axios(`${authEndpoint}/api/${responseType}`, {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(`${clientId}:${clientSecret}`)
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        }).then((res) => {
            const tk = res.data.access_token;
            setToken(tk);

            axios<IAlbum>(`${apiUrl}/v1/albums/${henspirationAlbumId}`, {
                method: 'GET',
                headers: { 'Authorization' : `Bearer ${tk}`}
            })
                .then (res => {
                    setAlbum(res?.data);
                });
        });
    }, [])

    return {album, token};
}
