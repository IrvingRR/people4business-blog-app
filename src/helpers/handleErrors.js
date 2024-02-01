import toast from "react-hot-toast";

export const handleErrorsHelper = (error) => {
    if(error.errors && error.errors.length > 0) {
        error.errors.forEach(error => toast.error(error))
    } else {
        toast.error(error.message);
    }
};