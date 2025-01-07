import { get } from "~/utils/httpRequestLast";

const getMusic = async ()=> {
    try {
        const res = await get({
            params :{
                method : 'chart.gettoptracks',
                api_key : '1d5f591613eb930d78742e9af7e4ca23',
                format: 'json'
            }
        })

        return res
    } catch (error) {
       console.log(error) 
    }
}

export {getMusic}