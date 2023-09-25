import getSymbolFromCurrency from 'currency-symbol-map';

export default function formatPrice(amount, currencyCode) {
    const price = parseFloat(amount);
    
  const symbol = getSymbolFromCurrency(currencyCode);
  return `${symbol}${price.toFixed(2)}`;
  }
