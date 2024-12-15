import SummaryApi from "../common";

const getCategoryWishProduct = async (category) => {
    const response = await fetch(SummaryApi.getCategoryWiseProduct.url, {
        method: SummaryApi.getCategoryWiseProduct.method,
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            category: category
        }),
    });
    const data = await response.json();

    return data;
};
export default getCategoryWishProduct;