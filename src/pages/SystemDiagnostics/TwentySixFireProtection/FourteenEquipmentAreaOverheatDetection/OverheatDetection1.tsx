import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const OverheatDetection1 = () => {
  const navigate = useNavigate();

  const data2 = [
    { parameter: 'OVERHEAT SYSTEM TEST', status1: false, status2: false },
    { parameter: 'LEER HOT', status1: false, status2: false },
    { parameter: 'LEER GROUND', status1: true, status2: true },
    { parameter: 'REER HOT', status1: false, status2: false },
    { parameter: 'REER GROUND', status1: true, status2: true },
    { parameter: 'FWD BEER HOT', status1: false, status2: false },
    { parameter: 'FWD BEER GROUND', status1: true, status2: true },
    { parameter: 'AFT BEER HOT', status1: false, status2: false },
    { parameter: 'AFT BEER GROUND', status1: true, status2: true },
    { parameter: 'AFT EQPT HOT', status1: false, status2: false },
    { parameter: 'AFT EQPT HOT GROUND', status1: true, status2: true },
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
      footer={<DataFooter left={'261002'} right={['Select done to continue', 'Select prev to go back']} />}
    >
      <DataHeader left={'OVERHEAT DETECTION'} right={'2/2'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data2} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default OverheatDetection1
