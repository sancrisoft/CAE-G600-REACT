import './styles/global.scss'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import Active from './pages/MaintenanceMessages/Active/Active';
import CorrelatedFdes from './pages/MaintenanceMessages/Active/CorrelatedFdes';
import HistoricalByDate from './pages/MaintenanceMessages/HistoricalByAta/HistoricalByAta';
import MaintenanceMessagesPage from './pages/MaintenanceMessages/MaintenanceMessages';
import PresentLeg from './pages/MaintenanceMessages/PresentLeg/PresentLeg';
import TimeOrderedViews from './pages/MaintenanceMessages/TimeOrderedViews/TimeOrderedViews';
import TmoActive from './pages/MaintenanceMessages/TimeOrderedViews/Active';
import CurrentLeg from './pages/MaintenanceMessages/TimeOrderedViews/CurrentLeg';
import LastSevenDays from './pages/MaintenanceMessages/TimeOrderedViews/LastSevenDays';
import LastFourteenDays from './pages/MaintenanceMessages/TimeOrderedViews/LastFourteenDays';
import SelectDateRange from './pages/MaintenanceMessages/TimeOrderedViews/SelectDateRange';
import SystemDiagnostics from './pages/SystemDiagnostics/SystemDiagnostics';
import DuFanStatus from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/DuFanStatus';
import MauFanStatus from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/MauFanStatus';
import MauFanStatus1 from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/MauFanStatus1';
import MauFanStatus2 from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/MauFanStatus2';
import MauFanStatus3 from './pages/SystemDiagnostics/TwentyOneAC/TwentyFiveEquipmentCoolingFans/MauFanStatus3';
import ControlOneStatus from './pages/SystemDiagnostics/TwentyOneAC/ThirtyOneCabinPressureControlOne/ControlOneStatus';
import ControlOneStatus1 from './pages/SystemDiagnostics/TwentyOneAC/ThirtyOneCabinPressureControlOne/ControlOneStatus1';
import ControlOneStatus2 from './pages/SystemDiagnostics/TwentyOneAC/ThirtyOneCabinPressureControlOne/ControlOneStatus2';
import AccStatusLeft from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft';
import AccStatusLeft1 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft1';
import AccStatusLeft2 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft2';
import AccStatusLeft3 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft3';
import AccStatusLeft4 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft4';
import AccStatusLeft5 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft5';
import AccStatusLeft6 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft6';
import AccStatusLeft7 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACLeft/AccStatusLeft7';
import AccStatusRight from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight';
import AccStatusRight1 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight1';
import AccStatusRight2 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight2';
import AccStatusRight3 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight3';
import AccStatusRight4 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight4';
import AccStatusRight5 from './pages/SystemDiagnostics/TwentyOneAC/FiftyOneACRight/AccStatusRight5';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maintenancemessages" element={<MaintenanceMessagesPage />} />
        <Route path="/maintenancemessages/active" element={<Active />} />
        <Route path="/maintenancemessages/active/correlatedfdes" element={<CorrelatedFdes />} />
        <Route path="/maintenancemessages/presentleg" element={<PresentLeg />} />
        <Route path="/maintenancemessages/historicalbydate" element={<HistoricalByDate />} />
        <Route path="/maintenancemessages/timeorderedviews" element={<TimeOrderedViews />} />
        <Route path="/maintenancemessages/timeorderedviews/active" element={<TmoActive />} />
        <Route path="/maintenancemessages/timeorderedviews/currentleg" element={<CurrentLeg />} />
        <Route path="/maintenancemessages/timeorderedviews/lastsevendays" element={<LastSevenDays />} />
        <Route path="/maintenancemessages/timeorderedviews/lastfourteendays" element={<LastFourteenDays />} />
        <Route path="/maintenancemessages/timeorderedviews/selectdaterange" element={<SelectDateRange />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/dufanstatus" element={<DuFanStatus />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus" element={<MauFanStatus />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus1" element={<MauFanStatus1 />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus2" element={<MauFanStatus2 />} />
        <Route path="/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus3" element={<MauFanStatus3 />} />
        <Route path="/systemdiagnostics/twentyoneac/thirtyonecabinpressurecontrolone/controlonestatus" element={<ControlOneStatus />} />
        <Route path="/systemdiagnostics/twentyoneac/thirtyonecabinpressurecontrolone/controlonestatus1" element={<ControlOneStatus1 />} />
        <Route path="/systemdiagnostics/twentyoneac/thirtyonecabinpressurecontrolone/controlonestatus2" element={<ControlOneStatus2 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft" element={<AccStatusLeft />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft1" element={<AccStatusLeft1 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft2" element={<AccStatusLeft2 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft3" element={<AccStatusLeft3 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft4" element={<AccStatusLeft4 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft5" element={<AccStatusLeft5 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft6" element={<AccStatusLeft6 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft7" element={<AccStatusLeft7 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright" element={<AccStatusRight />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright1" element={<AccStatusRight1 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright2" element={<AccStatusRight2 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright3" element={<AccStatusRight3 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright4" element={<AccStatusRight4 />} />
        <Route path="/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright5" element={<AccStatusRight5 />} />
        <Route path="/systemdiagnostics" element={<SystemDiagnostics />} />
        <Route path="/systemdiagnostics" element={<SystemDiagnostics />} />
        <Route path="/systemdiagnostics" element={<SystemDiagnostics />} />
        <Route path="/systemdiagnostics" element={<SystemDiagnostics />} />
      </Routes>
    </Router>
  );
}

export default App;
