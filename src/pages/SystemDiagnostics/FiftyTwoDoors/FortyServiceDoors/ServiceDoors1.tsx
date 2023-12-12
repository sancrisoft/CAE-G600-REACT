import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const ServiceDoors1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'SERVICE DOOR', alignLeft: true }, { title: 'IOGM3' }, { title: 'IOGM4' }]

  const data = [
    { parameter: 'RADOME', statuses: [true, true], customSpan: 2},
    { parameter: 'EXTERNAL BAGGAGE DOOR SW1', statuses: [true, true], customSpan: 2},
    { parameter: 'HYDRAULICS SERVICE DOOR', statuses: [true, true], customSpan: 2},
    { parameter: 'EXTERNAL AC POWER DOOR', statuses: [false, false], customSpan: 2 },
    { parameter: 'EXTERNAL DC POWER DOOR', statuses: [true, true], customSpan: 2},
    { parameter: 'R COWL ACCESS DOOR', statuses: [true, true], customSpan: 2},
    { parameter: 'R ENGINE ACCESS (OIL)', statuses: [true, true], customSpan: 2},
    { parameter: 'R ENGINE ACCESS (BLOWOUT)', statuses: [true, true], customSpan: 2},
    { parameter: 'TAIL COMPARTMENT DOOR', statuses: [true, true], customSpan: 2},
    { parameter: 'MID CABIN DOOR', statuses: [true, true], customSpan: 2},
    { parameter: 'FUEL PANEL SERVICE DOOR', statuses: [true, true], customSpan: 2},
    { parameter: 'REFUEL PORT SERVICE DOOR', statuses: [true, true], customSpan: 2},
    { parameter: 'WATER SERVICE DOOR', statuses: [true, true], customSpan: 2},
    { parameter: 'PNEUMATIC SERVICE DOOR', statuses: [true, true], customSpan: 2},
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
      <DynamicTable data={data} mainHeaders={tableHeader}/>
    </DefaultLayout>
  )
}

export default ServiceDoors1
