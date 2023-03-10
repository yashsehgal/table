import { createContext } from "react";
import {
    TableBodyPropsType,
    TableCaptionPropsType,
    TableCellPropsType,
    TableHeaderPropsType,
    TableHeadingPropsType,
    TablePropsType,
    TableRowPropsType
} from "./types/TableType";
import { InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/Tooltip";

const Table: React.FunctionComponent<TablePropsType> = ({
    children,
    hasPagination = false,
    style,
}, props: any | HTMLAllCollection) => {
    const TableContext = createContext({});
    TableContext.displayName = "TableContext";
    return (
        <table
            style={style}
            className={` ${props?.className}`}
            {...props}
        >
            <TableContext.Provider value={hasPagination}>
                {children}
            </TableContext.Provider>
        </table>
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
    info,
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
            {info ? <span className="flex flex-row items-center justify-start gap-1 w-fit">
                {children}
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <InfoIcon className="w-3 cursor-pointer hover:brightness-50" />
                        </TooltipTrigger>
                        <TooltipContent className="w-fit max-w-[320px]">
                            {info}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </span> : children}
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