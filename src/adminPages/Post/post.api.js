import { NotifyHandler } from '../constants';
import http, { VIDEO_ROUTES } from '../../services/api'


export const adminCreate = async (setLoading, adminDetails, toast) => {
    try {
        const {
            data: { data },
        } = await http.post(VIDEO_ROUTES.POST, adminDetails)
      console.log('CREATE', data)
        setLoading(false)
        // return(window.location.href='/admin/create')
        return NotifyHandler(toast, 'success', 'Content Created')
    } catch(error){
        setLoading(false)
        return NotifyHandler(toast, 'error', 'Content Not Created')
    }
}

export const adminGet = async ( setLoading, toast, setVideos) => {
    try {
        const { data: { data } } = await http.get(VIDEO_ROUTES.GET)
        setLoading(false)
        setVideos(data.video)
    } catch(err){
        setLoading(false)
        return NotifyHandler(toast, 'error', 'Error')
    }
}

export const videoDelete = async ( setLoading, id) => {
    try {
        await http.delete(VIDEO_ROUTES.DELETE(id))
        setLoading(false)
    } catch(err){
        setLoading(false)
    }
}