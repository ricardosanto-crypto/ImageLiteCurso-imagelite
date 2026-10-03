import { toast } from "react-toastify";

export const useNotification = () => {
    const notify = (message: string, level: "success" | "error" | "info" | "warning") => {
        toast(message, { type: level });
    };
    return { notify };
};