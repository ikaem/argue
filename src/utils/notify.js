import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

const notify = (message, type) => {
    toast[type](message,{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        newestOnTop: true,
        closeOnClick: true,
        pauseOnHover: true,
        className: "toast-notify",
        });
}

export default notify;
