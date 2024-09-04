import { Timer02Icon } from "hugeicons-react";
import { RECENT_STREAS, TABLE_HEADER } from "../constants";
import { TableProps } from "../domain/songs";


const TableCustom = ({ dataset }: TableProps) => {
    return (
        <div className="grid grid-cols-1 gap-4 shadow-lime-700 shadow-sm">
            <div className='card h-auto min-h-72 p-4 bg-base-300 mb-2'>
                <div className='flex px-4 items-center justify-start'>
                    <div className='bg-cyan-700/20 rounded-full p-4 mr-4'>
                        <Timer02Icon size={30} color='green' />
                    </div>
                    <p className='text-2xl font-light text-center'>{RECENT_STREAS}</p>
                </div>

                <div className="w-full place-items-center mt-5">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>{TABLE_HEADER.SONG_NAME}</th>
                                    <th>{TABLE_HEADER.ARTIST}</th>
                                    <th>{TABLE_HEADER.DATE_STREAMED}</th>
                                    <th>{TABLE_HEADER.STREAM_COUNT}</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    dataset.map((item, index) => (
                                        <tr key={index}>
                                            <th>{item.title}</th>
                                            <td>{item.artist}</td>
                                            <td>{item.last_stream}</td>
                                            <td>{item.stream_count}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableCustom;
