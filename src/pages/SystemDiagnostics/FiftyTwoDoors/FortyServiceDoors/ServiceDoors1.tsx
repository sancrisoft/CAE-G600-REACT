import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const ServiceDoors1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'SERVICE DOOR' }, { title: 'IOGM3' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'RADOME', status1: true, status2: true },
    { parameter: 'EXTERNAL BAGGAGE DOOR SW1', status1: true, status2: true },
    { parameter: 'HYDRAULICS SERVICE DOOR', status1: true, status2: true },
    { parameter: 'EXTERNAL AC POWER DOOR', status1: false, status2: false },
    { parameter: 'EXTERNAL DC POWER DOOR', status1: true, status2: true },
    { parameter: 'R COWL ACCESS DOOR', status1: true, status2: true },
    { parameter: 'R ENGINE ACCESS (OIL)', status1: true, status2: true },
    { parameter: 'R ENGINE ACCESS (BLOWOUT)', status1: true, status2: true },
    { parameter: 'TAIL COMPARTMENT DOOR', status1: true, status2: true },
    { parameter: 'MID CABIN DOOR', status1: true, status2: true },
    { parameter: 'FUEL PANEL SERVICE DOOR', status1: true, status2: true },
    { parameter: 'REFUEL PORT SERVICE DOOR', status1: true, status2: true },
    { parameter: 'WATER SERVICE DOOR', status1: true, status2: true },
    { parameter: 'PNEUMATIC SERVICE DOOR', status1: true, status2: true },
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
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'DONE',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'524002'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'service door status'} right={'2/2'} />
      <Legend title="closed" title2="open" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default ServiceDoors1
