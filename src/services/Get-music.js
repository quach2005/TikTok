import { get } from "~/utils/httpRequestLast";

const API_KEY = '1d5f591613eb930d78742e9af7e4ca23'
export const getPopularMusic = async (page, limit) => {
    try {
        const res = await get({
            params: {
                method: 'chart.gettoptracks',
                api_key: API_KEY,
                page,
                limit,
                format: 'json'
            }
        })

        return res
    } catch (error) {
        console.log(error)
    }
}

export const getSingerInformation = async (singer) => {
}

export const getStyleMusic = async (singer_name, song_name) => {
    try {
        const res = await get({
            params: {
                method: 'track.getTopTags',
                artist: singer_name,
                track: song_name,
                api_key: API_KEY,
                format: 'json'
            }
        })
        return res;
    }
    catch (err) {
        console.log(err)
    }
}

export const getInforAlbum = async (album) => {
}