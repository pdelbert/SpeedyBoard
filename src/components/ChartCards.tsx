import { ChartCardsProps } from '../types'

const ChartCards = ({ label, icon, chart }: ChartCardsProps) => {
    return (
        <div className='card px-4 py-10 h-auto min-h-14 p-4 bg-base-300 flex flex-col mb-2 shadow-lime-700 shadow-sm'>
            <div className='flex px-4 items-center justify-start mb-5'>
                <div className='bg-cyan-700/20 rounded-full p-4 mr-4'>{icon}</div>
                <p className='text-2xl font-light text-center'>{label}</p>
            </div>
            <div className='flex-1 flex flex-col justify-center h-96'>{chart}</div>
        </div>
    )
}

export default ChartCards
