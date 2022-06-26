import { toast } from "react-toastify";

export function successToast(message: string) {
   toast(message, {
      type: toast.TYPE.SUCCESS
   })
}

export function errorToast(message: string) {
   toast(message, {
      type: toast.TYPE.ERROR
   })
}

export function warningToast(message: string) {
   toast(message, {
      type: toast.TYPE.WARNING
   })
}