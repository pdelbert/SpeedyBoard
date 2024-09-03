import { CardProps } from '../types';

const CardCustom = ({ value, label, icon }: CardProps) => {
    return (
        <div className='card px-8 py-4 h-auto min-h-10 p-4 bg-base-300 flex flex-row place-content-between mb-2 shadow-lime-700 shadow-sm'>
            <div className='flex-1 flex flex-col items-start justify-center'>
                <p className='text-6xl font-bold text-center'>{value}</p>
                <p className='text-2xl font-light text-center text-gray-500'>{label}</p>
            </div>
            <div className='flex items-center justify-center '>
                <div className='bg-cyan-700/20 rounded-full p-4'>
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default CardCustom
