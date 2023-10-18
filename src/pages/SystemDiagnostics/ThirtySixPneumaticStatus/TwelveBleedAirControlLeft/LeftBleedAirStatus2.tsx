import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const LeftBleedAirStatus2 = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'PARAMETER-CONFIGURATION' }, { title: 'IOGM1' }, { title: 'IOGM2' }]
  const data1 = [
    { parameter: 'BAS ON INDICATION', status1: false, status2: false },
    { parameter: 'WAI ON INDICATION', status1: false, status2: false },
    { parameter: 'BAS ON 28V DISCRETE', status1: false, status2: false },
    { parameter: 'WAI ON 28V DISCRETE', status1: false, status2: false },
    { parameter: 'WOW 28V DISCRETE', status1: true, status2: true },
  ]

  const data2 = [
    { parameter: 'CONTROLLER ID PIN 1A', status1: false, status2: false },
    { parameter: 'CONTROLLER ID PIN 2A', status1: false, status2: false },
    { parameter: 'CONTROLLER ID PIN 3A', status1: false, status2: false },
    { parameter: 'CONTROLLER ID PIN 4A', status1: true, status2: true },
    { parameter: 'CONTROLLER ID PIN 1B', status1: false, status2: false },
    { parameter: 'CONTROLLER ID PIN 2B', status1: false, status2: false },
    { parameter: 'CONTROLLER ID PIN 3B', status1: false, status2: false },
    { parameter: 'CONTROLLER ID PIN 4B', status1: true, status2: true },
  ]

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate(-1)
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
      href: '/systemdiagnostics/thirtysixpneumaticstatus/twelvebleedaircontrolleft/leftbleedairstatus3',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'361203'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'LEFT BLEED AIR CONTROLLER STATUS'} right={'3/5'} isTitleLeft />
      <Legend title="active" title2="inactive" />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <Legend title="ground" title2="open" />
      <StatusTable data={data2} />
    </DefaultLayout>
  )
}

export default LeftBleedAirStatus2
