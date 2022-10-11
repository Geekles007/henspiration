export interface ITrack {
    id: string;
    name: string;
    duration_ms: number;
    href: string;
    preview_url: string;
}

export interface IAlbum {
    id: string;
    name: string;
    external_urls: {
        spotify: string;
    }
    artists: Array<{
        name: string;
    }>;
    tracks: {
        items: Array<ITrack>
    };
    images: Array<{
        url: string;
        height: number;
        width: number;
    }>;
}
