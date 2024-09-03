import CardCustom from '../../components/Cards';
import { getMostStreamedSong, getTotalStreams } from './SongsContainer';
import { TITLE_BARCHART, TOTAL_STREAMS } from '../../constants';
import { ChampionIcon, Vynil02Icon } from 'hugeicons-react';
import ChartCards from '../../components/ChartCards';
import BarChartCustom from '../../components/BarChart';


export const TotalStreams = () => {
    const data = getTotalStreams();

    return <>
        <CardCustom
            value={data}
            label={TOTAL_STREAMS}
            icon={<Vynil02Icon size={50} color='green' />} />
    </>
}

export const BarChart = () => {
    const { dataSet, series } = getMostStreamedSong();

    return <>
        <ChartCards
            label={TITLE_BARCHART}
            icon={<ChampionIcon size={25} color='green' />}
            chart={<BarChartCustom dataSet={dataSet} series={series} />}
        />
    </>
}