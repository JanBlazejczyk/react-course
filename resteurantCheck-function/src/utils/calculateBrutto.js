const calculateBrutto = (nettoValue, tipValue, vatRate = 23) => {
  const nettoPrice = Number(nettoValue);
  if (nettoPrice > 0) {
    const vatPercent = vatRate / 100;
    const tipPercent = tipValue / 100;
    const bruttoPrice = nettoPrice + nettoPrice * vatPercent;
    const bruttoPlusTip = bruttoPrice + bruttoPrice * tipPercent;
    return bruttoPlusTip.toFixed(2);
  } else {
    return "Please input a positive decimal";
  }
};

export default calculateBrutto;
