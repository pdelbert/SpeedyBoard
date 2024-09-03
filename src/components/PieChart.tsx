import { PieChart } from '@mui/x-charts';

const PieChartCustom = () => {
    return (
        <>
            <PieChart
                sx={{
                    "& .MuiChartsLegend-series text": {
                        fill: 'white !important'
                    }
                }}
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'Series A' },
                            { id: 1, value: 15, label: 'Series B' },
                            { id: 2, value: 20, label: 'Series C' },
                        ],
                    },
                ]}
                height={200}
            />
        </>
    )
}

export default PieChartCustom;
