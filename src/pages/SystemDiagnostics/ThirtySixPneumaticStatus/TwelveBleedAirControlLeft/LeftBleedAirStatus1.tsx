import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const LeftBleedAirStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM1' }, { title: 'IOGM2' }]
  const data = [
    { parameter: 'BLEED HOT', status1: true, status2: true },
    { parameter: 'FAV CHANNEL FAULT', status1: true, status2: true },
    { parameter: 'FAV ARINC RX FAULT', status1: true, status2: true },
    { parameter: 'FAV GADCII FAULT', status1: true, status2: true },
    { parameter: 'WAIV TM FAULT', status1: true, status2: true },
    { parameter: 'WAI SENSOR FAULT', status1: true, status2: true },
    { parameter: 'WAIV CHANNEL FAULT', status1: true, status2: true },
    { parameter: 'BAS MAINTENANCE REOD', status1: true, status2: true },
    { parameter: 'WAIV RAMP DEFAULT MODE', status1: true, status2: true },
    { parameter: 'WAIV ARINC RX FAULT', status1: true, status2: true },
    { parameter: 'WAIV GADCII FAULT', status1: true, status2: true },
  ]

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate('/systemdiagnostics');
      },
    },
    {
      text: 'Prev',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/thirtysixpneumaticstatus/twelvebleedaircontrolleft/leftbleedairstatus2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'361202'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'LEFT BLEED AIR CONTROLLER STATUS'} right={'2/5'} isTitleLeft />
      <Legend />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default LeftBleedAirStatus1
