import { toast } from "react-toastify"; 

const showSuccess = (msg) =>{
toast.success(msg)
} 
const showError = (msg) =>{
    toast.error(msg)

}
const showInfo = (msg) =>{
    toast.info(msg)

}
const showWarning = (msg) => {
    toast.warn(msg)

}

export const notify = {
    showError,
    showInfo,
    showWarning,
    showSuccess
}