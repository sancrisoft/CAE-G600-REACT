import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const ServiceDoors = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'SERVICE DOOR', alignLeft: true }, { title: 'IOGM1' }, { title: 'IOGM2' }]
  const data = [
    { parameter: 'FWD EXT SW PNL (SECURITY)', statuses: [true, true], customSpan: 2},
    { parameter: 'L COWL ACCESS DOOR', statuses: [true, true], customSpan: 2 },
    { parameter: 'ACOUSTIC DOOR', statuses: [false, false], customSpan: 2},
    { parameter: 'OXYGEN SERVICE DOOR', statuses: [true, true], customSpan: 2  },
    { parameter: 'L ENGINE ACCESS (OIL)', statuses: [true, true], customSpan: 2  },
    { parameter: 'L ENGINE ACCESS (BLOWOUT)', statuses: [true, true], customSpan: 2  },
    { parameter: 'L FUEL DRAIN VALVE', statuses: [true, true], customSpan: 2  },
    { parameter: 'L FUEL HOPPER DRAIN VALVE', statuses: [true, true], customSpan: 2  },
    { parameter: 'R FUEL DRAIN VALVE', statuses: [true, true], customSpan: 2  },
    { parameter: 'R FUEL HOPPER DRAIN VALVE', statuses: [true, true], customSpan: 2  },
    { parameter: 'RAT DOOR', statuses: [true, true], customSpan: 2  },
    { parameter: 'LDG GEAR MAINT PNL DOOR', statuses: [true, true], customSpan: 2 },
    { parameter: 'WASTE SERVICE DOOR', statuses: [true, true], customSpan: 2 },
    { parameter: 'INTERNAL BAGGAGE DOOR', statuses: [false, false], customSpan: 2 },
    { parameter: 'EXTERNAL BAGGAGE DOOR SW 2', statuses: [true, true], customSpan: 2},
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
      <DataHeader left={'service doors status'} right={'1/2'} />
      <Legend title="closed" title2="open" />
      <DynamicTable data={data} mainHeaders={tableHeader} />

    </DefaultLayout>
  )
}

export default ServiceDoors
