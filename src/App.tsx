import './App.css';
import { SaveMoneyDollarIcon, Timer02Icon } from "hugeicons-react";
import PieChartCustom from './components/PieChart';
import TableCustom from './components/Table';

import ChartCards from './components/ChartCards';
import { TITLE_PIECHART } from './constants';
import { ActivelUsers, TotalUsers, UserGrowthBarChart } from './presentation/users/UsersView';
import { BarChart, TotalStreams } from './presentation/songs/SongsView';

function App() {
  return (
    <div className="App p-8">

      <div className="grid grid-cols-3 gap-4 mb-4 md:grid-cols-3 sm:grid-cols-1 xsm:grid-col">

        { /* DISPLAY TOTAL USERS CARD  */}
        <TotalUsers />


        { /* DISPLAY ACTIVE USERS CARD  */}
        <ActivelUsers />


        { /* DISPLAY TOTLA STREAMS CARD  */}
        <TotalStreams />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4 h-[400px]">

        { /* DISPLAY LINE CHART CARD */}
        <UserGrowthBarChart />


        { /* DISPLAY PIE CHART  CARD */}
        <ChartCards
          label={TITLE_PIECHART}
          icon={<SaveMoneyDollarIcon size={25} color='green' />}
          chart={<PieChartCustom />}
        />

        { /* DISPLAY BAR CHART CARD */}
        <BarChart />

      </div>

      <div className="grid grid-cols-1 gap-4 shadow-lime-700 shadow-sm">
        <div className='card h-auto min-h-72 p-4 bg-base-300 mb-2'>
          <div className='flex px-4 items-center justify-start'>
            <div className='bg-cyan-700/20 rounded-full p-4 mr-4'>
              <Timer02Icon size={30} color='green' />
            </div>
            <p className='text-2xl font-light text-center'>Recent Streams</p>
          </div>

          <div className="w-full place-items-center">
            <div className="overflow-x-auto">
              <TableCustom />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
