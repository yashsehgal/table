import React, { createContext } from "react";
import {
    TableBodyPropsType,
    TableCaptionPropsType,
    TableCellPropsType,
    TableHeaderPropsType,
    TableHeadingPropsType,
    TablePropsType,
    TableRowPropsType
} from "./types/TableType";
// import { InfoIcon } from "lucide-react";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/Tooltip";

const TableContext = createContext({
    rowsPerPage: 10,
    hasPagination: false,
    rows: []
});

// const TablePagination: React.FunctionComponent = () => {
//     let PaginationActions: any = [];
//     return (
//         <TableContext.Consumer>
//             {({ rowsPerPage, rows }) => {
//                 for (let rowCount = 1; rowCount < rows.length / rowsPerPage; rowCount++) {
//                     PaginationActions.push(
//                         <button className="px-3 py-1.5 rounded border border-gray-300 text-sm bg-gray-50 hover:bg-gray-100">
//                             {rowCount}
//                         </button>
//                     )
//                 }
//                 PaginationActions?.map((action, actionIndex) => (
//                     <React.Fragment key={actionIndex}>
//                         {action}
//                     </React.Fragment>
//                 ))
//             }}
//         </TableContext.Consumer>
//     )
// };

const Table: React.FunctionComponent<TablePropsType> = ({
    children,
    hasPagination = false,
    rowsPerPage,
    rows,
    style,
}, props: any | HTMLAllCollection) => {
    TableContext.displayName = "TableContext";
    return (
        <TableContext.Provider value={{ rowsPerPage, hasPagination, rows }}>
            <div className="table-container w-fit grid grid-cols-1 gap-3">  
                <table
                    style={style}
                    className={` ${props?.className}`}
                    {...props}
                >
                    {children}
                </table>
            </div>
        </TableContext.Provider>
    )
};
Table.displayName = "Table";

const TableHeader: React.FunctionComponent<TableHeaderPropsType> = ({
    children,
    style
}, props: any | HTMLAllCollection) => {
    return (
        <thead
            style={style}
            className={`border border-gray-300 ${props?.className}`}
            {...props}
        >
            <tr>
                {children}
            </tr>
        </thead>
    )
};
TableHeader.displayName = "TableHeader";

const TableHeading: React.FunctionComponent<TableHeadingPropsType> = ({
    children,
    isSortable = false,
    style
}, props: any | HTMLAllCollection) => {
    return (
        <th
            scope="col"
            style={style}
            className={`text-left text-sm py-2 px-4 bg-gray-100 text-gray-500 
                        min-w-[220px] w-fit max-w-[240px] font-medium cursor-default
                        ${props?.className}`}
            {...props}
        >
            {children}
        </th>
    )
};
TableHeading.displayName = "TableHeading";

const TableBody: React.FunctionComponent<TableBodyPropsType> = ({
    children,
    style
}, props: any | HTMLAllCollection) => {
    return (
        <tbody
            style={style}
            className={` ${props?.className}`}
            {...props}
        >
            {children}
        </tbody>
    )
};
TableBody.displayName = "TableBody";

const TableRow: React.FunctionComponent<TableRowPropsType> = ({
    children,
    style
}, props: any | HTMLAllCollection) => {
    return (
        <tr
            style={style}
            className={`border border-gray-300 bg-white hover:bg-gray-50 ${props?.className || ""}`}
            {...props}
        >
            {children}
        </tr>
    )
};
TableRow.displayName = "TableRow";

const TableCell: React.FunctionComponent<TableCellPropsType> = ({
    children,
    style,
    disabled = false
}, props: any | HTMLAllCollection) => {
    return (
        <td
            className={(disabled && "cursor-not-allowed bg-gray-200") + `text-left text-sm py-2 px-4 
                        min-w-[200px] w-fit max-w-[320px]
                        ${props?.className || ""}`}
            style={style}
            {...props}
        >
            {children}
        </td>
    )
};
TableCell.displayName = "TableCell";

const TableCaption: React.FunctionComponent<TableCaptionPropsType> = ({
    children,
    style
}, props: any | HTMLAllCollection) => {
    return (
        <caption
            style={style}
            className={`font-medium text-sm text-gray-500 bg-gray-100 border-t border-r border-l border-gray-300 p-2 cursor-default
                        ${props?.className || ""}`}
            {...props}
        >
            {children}
        </caption>
    )
};
TableCaption.displayName = "TableCaption";

export {
    Table,
    TableHeader,
    TableHeading,
    TableBody,
    TableRow,
    TableCell,
    TableCaption
};