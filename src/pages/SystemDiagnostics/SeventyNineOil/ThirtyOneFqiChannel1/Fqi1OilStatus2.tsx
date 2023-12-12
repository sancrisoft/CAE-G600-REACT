import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const Fqi1OilStatus2 = () => {
  const navigate = useNavigate();
  const tableHeader = [{ title: 'PARAMETERS', alignLeft: true }, { title: 'TX1', hasBorderBottom: false }, { title: 'TX2', hasBorderBottom: false }]
  const secondaryHeaders = [{ title: 'IOGM3',  customSpan:2} , { title: 'IOGM2' }]
  
  const data = [
    { parameter: 'L ENG OIL COMPENSATOR', statuses: ['125.15 PF','125.15 PF' ], customSpan: 2},
    { parameter: 'L ENG OIL SENSOR', statuses: ['93.80 PF', '93.80 PF' ], customSpan: 2  },
    { parameter: 'R ENG OIL COMPENSATOR', statuses: ['123.80 PF', '123.80 PF' ], customSpan: 2},
    { parameter: 'R ENG OIL SENSOR', statuses: ['96.95 PF', '96.95 PF' ], customSpan: 2  },
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
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/seventynineoil/thirtyonefqichannel1/fqi1oilstatus3',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'793103'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'fqi eng oil status'} right={'3/4'} />
      <DynamicTable data={data} mainHeaders={tableHeader} secondaryHeaders={secondaryHeaders} />
    </DefaultLayout>
  )
}

export default Fqi1OilStatus2
