const formatDollar = (amount: number | string): string => {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;

  if (isNaN(num)) return "$0";

  const absFormatted = Math.abs(num).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return num < 0 ? `-$${absFormatted}` : `$${absFormatted}`;
};

export const helper = { formatDollar };
