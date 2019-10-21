import * as contracts from '../_contracts';

export class VideoPlayerData implements contracts.IVideoPlayerData {
    
    name: string;    
    poster: string;
    trailer: string;
    year: string;

    constructor(data?: contracts.IVideoPlayerData) {
        this.name = data ? data.name : null;
        this.poster = data ? data.poster : null;
        this.trailer = data ? data.trailer : null;
        this.year = data ? data.year : null;
    }
}