import Swal from 'sweetalert2'

export const handleShowAlert = (statusCode, message) => {
    if(statusCode === 200) {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 2000
        });
    } else if (statusCode === 422) {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: message,
            showConfirmButton: false,
            timer: 2000
        });
    }else {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: message,
            showConfirmButton: false,
            timer: 2000
        });
    }
}