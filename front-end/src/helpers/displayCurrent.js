const displayVNDCurrency = (num) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: "currency",
        currency: 'VND',
        minimumFractionDigits: 0, // Tiền Việt Nam thường không có phần thập phân
    });

    return formatter.format(num);
};

export default displayVNDCurrency;
