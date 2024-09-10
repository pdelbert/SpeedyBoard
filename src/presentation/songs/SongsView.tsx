
import { ChampionIcon, Vynil02Icon } from 'hugeicons-react';
import { Songs } from '../../domain/songs';
import { TITLE_BARCHART, TOTAL_STREAMS } from '../../constants';
import { getMostStreamedSong, getRecentStreams, getTotalStreams } from './SongsContainer';
import { CardCustom, ChartCards, BarChartCustom, TableCustom } from '../../components/';

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