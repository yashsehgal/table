import { Table, TableBody, TableCaption, TableCell, TableHeader, TableHeading, TableRow } from "@/components/Table";

const AppView: React.FunctionComponent = () => {
  return (
    <main className="m-12">
      <h1 className="leading-snug text-lg font-medium capitalize">
        {"functional and accessible table component"}
      </h1>
      <div className="table-wrapper my-12">
        <Table hasPagination>
          <TableHeader>
            <TableHeading>{"Transaction Hash"}</TableHeading>
            <TableHeading info={"The compositions defines how many units of a token has been bought"}>{"Composition"}</TableHeading>
            <TableHeading>{"Purchase Price"}</TableHeading>
            <TableHeading info={"The current price of this purchase defines the changes in price from the price it has been bought"}>{"Current Price"}</TableHeading>
            <TableHeading>{"Profit/Loss"}</TableHeading>
          </TableHeader>
          <TableBody>
              <TableRow>
                <TableCell>A1</TableCell>
                <TableCell>B1</TableCell>
                <TableCell>C1</TableCell>
                <TableCell>D2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>A2</TableCell>
                <TableCell>B2</TableCell>
                <TableCell>C2</TableCell>
                <TableCell>D2</TableCell>
                <TableCell>E2</TableCell>
              </TableRow>
            </TableBody>
            <TableCaption>{"This is a caption on Table"}</TableCaption>
        </Table>
      </div>
    </main>
  )
};

export default AppView;