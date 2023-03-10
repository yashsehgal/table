import { ReactNode, CSSProperties } from "react";

type TablePropsType = {
    children?: ReactNode;
    hasPagination?: boolean;
    style?: CSSProperties;
};

type TableHeaderPropsType = {
    children?: ReactNode;
    style?: CSSProperties;
};

type TableHeadingPropsType = {
    children?: ReactNode | string;
    info?: string;
    style?: CSSProperties;
    isSortable?: boolean;
};

type TableBodyPropsType = {
    children?: ReactNode;
    style?: CSSProperties;
};

type TableRowPropsType = {
    children?: ReactNode | string;
    style?: CSSProperties;
};

type TableCellPropsType = {
    children?: ReactNode | string;
    style?: CSSProperties;
    disabled?: boolean;
};


type TableCaptionPropsType = {
    children?: ReactNode | string;
    style?: CSSProperties;
};

export type {
    TablePropsType,
    TableHeaderPropsType,
    TableHeadingPropsType,
    TableBodyPropsType,
    TableRowPropsType,
    TableCellPropsType,
    TableCaptionPropsType
};