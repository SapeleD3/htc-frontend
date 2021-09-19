import { NotifyHandler } from "../constants";
import http, { USER_ROUTES} from '../../services/api'


export const getVideos = async ( setLoading, toast, setVideos ) => {
    try {
        const { data: { data } } = await http.get(USER_ROUTES.GET)
        setLoading(false)
        setVideos(data.video)
    }catch(err){
        setLoading(false)
        return NotifyHandler(toast, 'error', 'Error')
    }
}