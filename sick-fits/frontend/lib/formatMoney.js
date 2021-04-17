export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDidgits: 2,
  };

  // check if it is a clean dollar amount
  if (amount % 100 === 0) {
    options.minimumFractionDidgits = 0;
  }

  const formatter = Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
}
