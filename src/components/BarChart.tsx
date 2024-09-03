import { BarChart } from '@mui/x-charts'
import { BarChartProps } from '../domain/songs';


const BarChartCustom = ({ dataSet, series }: BarChartProps) => {
    return (
        <>
            <BarChart
                sx={{
                    "& .MuiChartsAxis-tickLabel": { fill: 'white !important' },
                    "& .MuiChartsAxis-line": { stroke: 'white !important' }
                }}
                xAxis={[{ scaleType: 'band', data: dataSet }]}
                series={[{ data: series }]}
            />
        </>
    )
}

export default BarChartCustom;
