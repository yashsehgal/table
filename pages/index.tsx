import { Table, TableBody, TableCaption, TableCell, TableHeader, TableHeading, TableRow } from "@/components/Table";
import { Progress } from "@/components/ui/Progress";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";

const AppView: React.FunctionComponent = () => {
  const { TableHeadingData, TableCellsData } = getTransactionData();
  return (
    <main className="m-12">
      <h1 className="leading-snug text-lg font-medium capitalize">
        {"functional and accessible table component"}
      </h1>
      <div className="table-wrapper my-12">
        <Table hasPagination>
          <TableHeader>
            {TableHeadingData?.map((heading, headingIndex) => (
              <TableHeading key={headingIndex}>
                {heading?.heading}
              </TableHeading>
            ))}
          </TableHeader>
          <TableBody>
            {TableCellsData?.map((transaction, transactionIndex) => (
              <TableRow key={transactionIndex}>
                {transaction?.map((slot, slotIndex) => {
                  switch (slot?.name) {
                    case "transaction-hash":
                      return (
                        <TableCell key={slotIndex}>
                          {slot?.content}
                        </TableCell>
                      )
                    case "composition":
                      return (
                        <TableCell key={slotIndex} style={{
                          paddingRight: '32px'
                        }}>
                          {slot?.content?.map((token: { tokenName: string; tokenPercentage: number }, tokenIndex: number) => {
                            return (
                              <div className="token-composition-stats-wrapper flex flex-row items-center justify-start gap-2"
                                key={tokenIndex}
                              >
                                <span className="token-name font-medium">
                                  {token?.tokenName}
                                </span>
                                <Progress value={token?.tokenPercentage} />
                                <span className="token-composition-percentage font-medium">
                                  {token?.tokenPercentage + "%"}
                                </span>
                              </div>
                            )
                          })}
                        </TableCell>
                      )
                    case "purchase-price":
                      return (
                        <TableCell key={slotIndex}>
                          <p className="purchase-price-wrapper font-medium">
                            {slot?.content?.currencySymbol + slot?.content?.amount}
                          </p>
                        </TableCell>
                      )
                    case "current-price":
                      return (
                        <TableCell key={slotIndex}>
                          <span className="current-price-wrapper font-medium flex flex-row items-center justify-start gap-1">
                            <span className="current-price__amount">
                              {slot?.content?.currencySymbol + slot?.content?.amount}
                            </span>
                            <span className={`current-price__change ${slot?.content?.change?.status === "up" ? "text-green-500" : "text-red-500"}`}>
                              {`(${slot?.content?.change === "up" ? "+" : "-"}${slot?.content?.change?.amount}%)`}
                            </span>
                          </span>
                        </TableCell>
                      )
                    case "profit-loss":
                      return (
                        <TableCell key={slotIndex}>
                          <span className={`profit-loss-status-wrapper flex flex-row items-center justify-start gap-1 ${slot?.content?.status === "up" ? "text-green-500": "text-red-500"}`}>
                            <ArrowDownRight className={`w-5 ${slot?.content?.status === "up" && "-rotate-90"}`} />
                            <span className="font-medium">{slot?.content?.amount + "%"}</span>
                          </span>
                        </TableCell>
                      )
                    default:
                      return (
                        <TableCell key={slotIndex}>
                          {slot?.content}
                        </TableCell>
                      )
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
          <TableCaption>{"This is a caption on Table"}</TableCaption>
        </Table>
      </div>
    </main>
  )
};

export function getTransactionData() {
  const TableHeadingData: Array<{
    name: string;
    heading: string | ReactNode;
    info?: string | ReactNode;
  }> = [
      {
        name: "transaction-hash",
        heading: "Transaction Hash"
      },
      {
        name: "composition",
        heading: "Composition",
        info: "The compositions defines how many units of a token has been bought"
      },
      {
        name: "purchase-price",
        heading: "Purchase Price"
      },
      {
        name: "current-price",
        heading: "Current Price",
        info: "The current price of this purchase defines the changes in price from the price it has been bought"
      },
      {
        name: "profit-loss",
        heading: "Profit/Loss"
      }
    ];
  const TableCellsData: Array<Array<{
    name: string;
    content: ReactNode | string | number | any;
    info?: string;
  }>> = [
      [
        {
          name: "transaction-hash",
          content: <Link href={"https://etherscan.io/"} target={"_blank"}>
            {"2092384935"}
          </Link>
        },
        {
          name: "composition",
          content: [
            {
              tokenName: "WETH",
              tokenPercentage: 44
            },
            {
              tokenName: "UNI",
              tokenPercentage: 56
            }
          ]
        },
        {
          name: "purchase-price",
          content: {
            currency: "Dollar",
            currencyCode: "DLR",
            currencySymbol: "$",
            amount: 600
          }
        },
        {
          name: "current-price",
          content: {
            currency: "Dollar",
            currencyCode: "DLR",
            currencySymbol: "$",
            amount: 2189.10,
            change: {
              status: "down",
              amount: 0.66
            }
          }
        },
        {
          name: "profit-loss",
          content: {
            status: "down",
            amount: 3.6
          }
        }
      ],
      [
        {
          name: "transaction-hash",
          content: <Link href={"https://etherscan.io/"} target={"_blank"}>
            {"2092384967"}
          </Link>
        },
        {
          name: "composition",
          content: [
            {
              tokenName: "WETH",
              tokenPercentage: 10
            },
            {
              tokenName: "UNI",
              tokenPercentage: 77
            },
            ,
            {
              tokenName: "WBTC",
              tokenPercentage: 23
            }
          ]
        },
        {
          name: "purchase-price",
          content: {
            currency: "Dollar",
            currencyCode: "DLR",
            currencySymbol: "$",
            amount: 1200
          }
        },
        {
          name: "current-price",
          content: {
            currency: "Dollar",
            currencyCode: "DLR",
            currencySymbol: "$",
            amount: 2189.10,
            change: {
              status: "up",
              amount: 1.44
            }
          }
        },
        {
          name: "profit-loss",
          content: {
            status: "up",
            amount: 7.6
          }
        }
      ]
    ];

  return {
    TableHeadingData,
    TableCellsData
  }
}

export default AppView;