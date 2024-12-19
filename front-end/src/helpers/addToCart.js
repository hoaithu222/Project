import { toast } from "react-toastify";
import SummaryApi from "../common";

const addToCard = async (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    const response = await fetch(SummaryApi.addToCardProduct.url, {
        method: SummaryApi.addToCardProduct.method,
        credentials: 'include',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            productId: id,
        })
    });
    const data = await response.json();
    if (data.success) {
        toast.success(`${data?.message}`)
    }
    if (data.error) {
        toast.error(`${data?.message}`)
    }

}
export default addToCard;