import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const LeftBleedAirStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM1' }, { title: 'IOGM2' }]
  const data = [
    { parameter: 'HSV TM1 FAULT', status1: true, status2: true },
    { parameter: 'MANIFOLD PRESS SENS FALLT', status1: true, status2: true },
    { parameter: 'PRECOOLER INLET SEN FAULT', status1: true, status2: true },
    { parameter: 'CONTROLLER CALIBRATION FAULT', status1: true, status2: true },
    { parameter: 'MANIFOLD PRESSURE HIGH', status1: true, status2: true },
    { parameter: 'MANIFOLD PRESSURE LOW', status1: false, status2: false },
    { parameter: 'HSV CHANNEL FAULT', status1: true, status2: true },
    { parameter: 'DESCENT DETECTED', status1: false, status2: false },
    { parameter: 'PRECOOLER INLET TEMP HIGH', status1: true, status2: true },
    { parameter: 'HSV ARINC RX FAULT', status1: true, status2: true },
    { parameter: 'HSV GADCII FAULT', status1: true, status2: true },
    { parameter: 'FAV TM FAULT', status1: true, status2: true },
    { parameter: 'PRECOOLER OUTLET SEN FAULT', status1: true, status2: true },
    { parameter: 'PRECOOLER OUTLET OVERTEMP', status1: true, status2: true },
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
      text: 'FWD',
      href: '/systemdiagnostics/thirtysixpneumaticstatus/twelvebleedaircontrolleft/leftbleedairstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'361201'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'LEFT BLEED AIR CONTROLLER STATUS'} right={'1/5'} isTitleLeft />
      <Legend />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default LeftBleedAirStatus
