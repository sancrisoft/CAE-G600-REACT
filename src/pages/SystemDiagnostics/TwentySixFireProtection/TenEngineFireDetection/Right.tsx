import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const Right = () => {
  const navigate = useNavigate();

  const data1 = [
    { parameter: 'FIRE DETECTION TEST', status1: false, status2: false, noData: true },
    { parameter: 'RESISTANCE (OHMS)', status1: 'XXXX', status2: 'XXXX' },
    { parameter: 'VOLTAGE (MILLIVOLTS)', status1: 'XXXXX', status2: 'XXXXX' },
  ]

  const data2 = [
    { parameter: 'FIRE DETECTED', status1: false, status2: false, noData: true },
    { parameter: 'OVERHEAT DETECTED', status1: false, status2: false, noData: true },
    { parameter: 'FAULT DETECTED', status1: false, status2: false },
    { parameter: 'SHORT CIRCUIT FAULT', status1: false, status2: false, noData: true },
    { parameter: 'SIGNAL OPEN FAULT', status1: false, status2: false, noData: true },
    { parameter: 'INTERMITTENT FAULT', status1: false, status2: false, noData: true },
  ]

  const tableHeader = [
    { title: 'PARAMETERS' },
    { title: 'CH A' },
    { title: 'CH B' },
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
      href: '/systemdiagnostics/twentysixfireprotection/tenenginefiredetection/right1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'261003'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'RIGHT ZONE 1 ENGINE FIRE DETECTION'} right={'3/4'} isTitleLeft />
      <Legend title="true" title2="false" />
      <StatusTable data={data1} tableHeader={tableHeader} />
      <StatusTable data={data2} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default Right
