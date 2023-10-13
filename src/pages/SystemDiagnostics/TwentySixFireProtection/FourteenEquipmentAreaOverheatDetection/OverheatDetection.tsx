import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const OverheatDetection = () => {
  const navigate = useNavigate();

  const data2 = [
    { parameter: 'OVERHEAT SYSTEM TEST', status1: false, status2: false },
    { parameter: 'L PYLON HOT', status1: false, status2: false },
    { parameter: 'L PYLON GROUND', status1: true, status2: true },
    { parameter: 'R PYLON HOT', status1: false, status2: false },
    { parameter: 'R PYLON GROUND', status1: true, status2: true },
    { parameter: 'L AFT FLR HOT', status1: false, status2: false },
    { parameter: 'L AFT FLR GROUND', status1: true, status2: true },
    { parameter: 'R AFT FLR HOT', status1: false, status2: false },
    { parameter: 'R AFT FLR GROUND', status1: true, status2: true },
    { parameter: 'FWD FLR AREA HOT', status1: false, status2: false },
    { parameter: 'FWD FLR AREA HOT GROUND', status1: true, status2: true },
  ]

  const tableHeader = [
    { title: 'PARAMETERS' },
    { title: 'IOGM1' },
    { title: 'IOGM4' },
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
      href: '/systemdiagnostics/twentysixfireprotection/fourteenequipmentareaoverheatdetection/overheatdetection1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'261001'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'OVERHEAT DETECTION'} right={'1/2'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data2} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default OverheatDetection
