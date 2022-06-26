import { DefaultUi, Player, Youtube } from "@vime/react";

interface IYoutubePlayerProps{
    videoId: string;
}

import '@vime/core/themes/default.css';

export function YoutubePlayer({
    videoId
}: IYoutubePlayerProps){
    return (
        <Player>
            <Youtube 
                videoId={videoId}
            />
            <DefaultUi />
        </Player>
    )
}