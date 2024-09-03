import React from 'react'
import CardCustom from '../../components/Cards'
import { ACTIVE_USERS, TITLE_LINECHART, TOTAL_USERS } from '../../constants'
import { Activity02Icon, ChartBarLineIcon, UserAccountIcon } from 'hugeicons-react'
import { getActivelUsers, getTotalUsers, getUserGrowth } from './UsersContainer'
import ChartCards from '../../components/ChartCards'
import LineChartCustom from '../../components/LineChart'

export const TotalUsers = () => {
    const data = getTotalUsers();
    return <>
        <CardCustom
            value={data}
            label={TOTAL_USERS}
            icon={<UserAccountIcon size={50} color='green' />} />
    </>
}


export const ActivelUsers = () => {
    const data = getActivelUsers();

    return <>
        <CardCustom
            value={data}
            label={ACTIVE_USERS}
            icon={<Activity02Icon size={50} color='green' />} />
    </>
}

export const UserGrowthBarChart = () => {
    const { dataset, series } = getUserGrowth();

    return <>
        <ChartCards
            label={TITLE_LINECHART}
            icon={<ChartBarLineIcon size={25} color='green' />}
            chart={<LineChartCustom series={series} dataset={dataset} />} />
    </>
}
