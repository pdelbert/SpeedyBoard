import { LineChart } from '@mui/x-charts'
import { LinearProps } from '../types';


const LineChartCustom = ({ dataset, series }: LinearProps) => {
    return (
        <>
            <LineChart
                dataset={dataset}
                xAxis={[{ scaleType: 'point', dataKey: 'month' }]}
                series={series}
                grid={{ horizontal: false }}
                sx={{
                    "& .MuiChartsLegend-series text": { fill: 'white !important' },
                    "& .MuiChartsAxis-tickLabel, & .MuiChartsLegend-series text": { fill: 'white !important' },
                    "& .MuiChartsAxis-line": { stroke: 'white !important' }
                }}

            />
        </>
    )
}

export default LineChartCustom;
