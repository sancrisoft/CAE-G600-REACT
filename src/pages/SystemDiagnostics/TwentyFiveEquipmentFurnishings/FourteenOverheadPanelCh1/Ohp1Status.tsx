import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const Ohp1Status = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'OHPTS FAIL', status1: true, status2: true },
    { parameter: 'OHPTS TOUCH TEMP FAULT', status1: true, status2: true },
    { parameter: 'OHPTS APP CRC FAIL', status1: true, status2: true },
    { parameter: 'OHPTS RAM FAIL', status1: true, status2: true },
    { parameter: 'OHPTS NVM FAIL', status1: true, status2: true },
    { parameter: 'OHPTS CAN FAIL', status1: true, status2: true },
    { parameter: 'OHPTS HW WDT FAIL', status1: true, status2: true },
    { parameter: 'SPARE', status1: true, status2: true, noData: true },
    { parameter: 'SPARE', status1: true, status2: true, noData: true },
    { parameter: 'SPARE', status1: true, status2: true, noData: true },
    { parameter: 'SPARE', status1: true, status2: true, noData: true },
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
      href: '/systemdiagnostics/twentyfiveequipmentfurnishings/fourteenoverheadpanelch1/ohp1status1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'251407'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'Overhead Panel 1 Status'} right={'1/2'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default Ohp1Status
