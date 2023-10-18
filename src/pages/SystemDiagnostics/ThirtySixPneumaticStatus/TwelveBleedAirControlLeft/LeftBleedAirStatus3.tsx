import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const LeftBleedAirStatus3 = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'OHP PARAMETER - DCN' }, { title: 'IOGM1' }, { title: 'IOGM2' }]
  const data1 = [
    { parameter: 'L ENG BLEED AIR SW', status1: false, status2: false },
    { parameter: 'R ENG BLEED AIR SW', status1: 'N/A', status2: 'N/A' },
    { parameter: 'APU BLEED AIR SW', status1: false, status2: false },
    { parameter: 'ISOLATION VALVE', status1: true, status2: true },
  ]

  const tableHeader2 = [{ title: 'PARAMETER - DISCRETE' }, { title: 'IOGM1' }, { title: 'IOGM2' }]
  const data2 = [{ parameter: 'L BLEED CONTROLLER FAILED', status1: true, status2: true }]

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
      href: '/systemdiagnostics/thirtysixpneumaticstatus/twelvebleedaircontrolleft/leftbleedairstatus4',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'361204'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'LEFT BLEED AIR CONTROLLER STATUS'} right={'4/5'} isTitleLeft />
      <Legend />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default LeftBleedAirStatus3
