import CardCustom from '../../components/Cards';
import { getMostStreamedSong, getRecentStreams, getTotalStreams } from './SongsContainer';
import { TITLE_BARCHART, TOTAL_STREAMS } from '../../constants';
import { ChampionIcon, Vynil02Icon } from 'hugeicons-react';
import ChartCards from '../../components/ChartCards';
import BarChartCustom from '../../components/BarChart';
import TableCustom from '../../components/Table';
import { Songs } from '../../domain/songs';


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

export const TableCard = () => {
    const data: Songs[] = getRecentStreams();
    return <TableCustom dataset={data} />
}