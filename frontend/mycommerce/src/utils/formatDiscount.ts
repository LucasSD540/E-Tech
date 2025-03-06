export const discountFormated = (old_price: number, price: number) => {
  return Number(((old_price - price) / old_price) * 100).toFixed(0);
};
