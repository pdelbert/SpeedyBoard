import { DatasetElementType } from "@mui/x-charts/internals";

export interface ChartCardsProps {
    label: string
    icon: React.ReactNode,
    chart: React.ReactNode
}

export interface CardProps {
    value: number;
    label: string;
    icon: React.ReactNode;
}

export type LinearProps = {
    dataset: DatasetElementType<string | number | Date | null | undefined>[]
    series: {
        dataKey: string;
        label: string;
    }[]
}
