import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const ServiceDoors = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'SERVICE DOOR' }, { title: 'IOGM1' }, { title: 'IOGM2' }]
  const data = [
    { parameter: 'FWD EXT SW PNL (SECURITY)', status1: true, status2: true },
    { parameter: 'L COWL ACCESS DOOR', status1: true, status2: true },
    { parameter: 'ACOUSTIC DOOR', status1: false, status2: false },
    { parameter: 'OXYGEN SERVICE DOOR', status1: true, status2: true },
    { parameter: 'L ENGINE ACCESS (OIL)', status1: true, status2: true },
    { parameter: 'L ENGINE ACCESS (BLOWOUT)', status1: true, status2: true },
    { parameter: 'FUEL DRAIN VALVE', status1: true, status2: true },
    { parameter: 'L FUEL HOPPER DRAIN VALVE', status1: true, status2: true },
    { parameter: 'R FUEL DRAIN VALVE', status1: true, status2: true },
    { parameter: 'R FUEL HOPPER DRAIN VALVE', status1: true, status2: true },
    { parameter: 'RAT DOOR', status1: true, status2: true },
    { parameter: 'LDG GEAR MAINT PNL DOOR', status1: true, status2: true },
    { parameter: 'WASTE SERVICE DOOR', status1: true, status2: true },
    { parameter: 'INTERNAL BAGGAGE DOOR', status1: false, status2: false },
    { parameter: 'EXTERNAL BAGGAGE DOOR SW 2', status1: true, status2: true },
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
      href: '/systemdiagnostics/fiftytwodoors/fortyservicedoors/servicedoors1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'524001'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'service door status'} right={'1/2'} />
      <Legend title="closed" title2="open" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default ServiceDoors
