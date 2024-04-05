const rupiahFormat = (value: number) => {
  let formattedNumber = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `Rp ${formattedNumber}`;
}

export default rupiahFormat;
