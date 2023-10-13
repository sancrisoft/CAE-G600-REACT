import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const Right1 = () => {
  const navigate = useNavigate();

  const data1 = [
    { parameter: 'FIRE DETECTION TEST', status1: false, status2: false },
    { parameter: 'RESISTANCE (OHMS)', status1: '31751', status2: '32013' },
    { parameter: 'VOLTAGE (MILLIVOLTS)', status1: '11983.0', status2: '11983.0' },
  ]

  const data2 = [
    { parameter: 'FIRE DETECTED', status1: false, status2: false },
    { parameter: 'OVERHEAT DETECTED', status1: false, status2: false },
    { parameter: 'FAULT DETECTED', status1: false, status2: false },
    { parameter: 'SHORT CIRCUIT FAULT', status1: false, status2: false },
    { parameter: 'SIGNAL OPEN FAULT', status1: false, status2: false },
    { parameter: 'INTERMITTENT FAULT', status1: false, status2: false },
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
      text: 'DONE',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'261004'} right={['Select prev to go back', 'Select DONE to EXIT']} />}
    >
      <DataHeader left={'RIGHT ZONE 2 ENGINE FIRE DETECTION'} right={'4/4'} isTitleLeft />
      <Legend title="true" title2="false" />
      <StatusTable data={data1} tableHeader={tableHeader} />
      <StatusTable data={data2} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default Right1
