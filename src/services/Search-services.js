
import * as request from '~/utils/httpRequestF8'
const search = async (q, type = 'less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q: q,
                type: type
            }
        })
        return res.data

    } catch (error) {
        console.log(error.message)
    }
}

export { search }