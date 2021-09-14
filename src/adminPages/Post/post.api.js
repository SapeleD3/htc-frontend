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