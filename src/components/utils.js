export const calcTotalPrice = items => items.reduce((acc, phone) => acc += phone.price, 0);