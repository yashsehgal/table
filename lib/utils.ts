import { ClassValue, clsx } from "clsx"
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTransactionData() {
  const TableHeaderData: Array<{ heading: string | ReactNode; info?: string | ReactNode; }> = [
    {
      heading: "Transaction Hash"
    },
    {
      heading: "Composition",
      info: "The compositions defines how many units of a token has been bought"
    },
    {
      heading: "Purchase Price"
    },
    {
      heading: "Current Price",
      info: "The current price of this purchase defines the changes in price from the price it has been bought"
    },
    {
      heading: "Profit/Loss"
    }
  ];
  const TableCellsData = [];
}