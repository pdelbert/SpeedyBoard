import './App.css';
import { SaveMoneyDollarIcon } from "hugeicons-react";
import PieChartCustom from './components/PieChart';

import ChartCards from './components/ChartCards';
import { TITLE_PIECHART } from './constants';
import { ActivelUsers, TotalUsers, UserGrowthBarChart } from './presentation/users/UsersView';
import { BarChart, TableCard, TotalStreams } from './presentation/songs/SongsView';

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

      { /* DISPLAY RECENT STREAMS CARD */}
      <TableCard />

    </div>
  );
}

export default App;
