import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const Fqi1OilStatus1 = () => {
  const navigate = useNavigate();
  const tableHeader = [{ title: 'PARAMETERS', alignLeft: true }, { title: 'TX1', hasBorderBottom: false }, { title: 'TX2', hasBorderBottom: false }]
  const secondaryHeaders = [{ title: 'IOGM3',  customSpan:2} , { title: 'IOGM2' }]
  
  const data = [
    { parameter: 'OIL FILL IN PROGRESS',  statuses: [true, true], customSpan: 2},
    { parameter: 'OIL SVC SW INPUT FAULT',  statuses: [true, true], customSpan: 2},
    { parameter: 'FQI CRITICAL FAULT',  statuses: [true, true], customSpan: 2},
    { parameter: 'FQI MEASUREMENT FAULT',  statuses: [true, true], customSpan: 2},
    { parameter: 'FQI USER INTERFACE FAULT',  statuses: [true, true], customSpan: 2},
    { parameter: 'FQI MAINTENANCE FAULT',  statuses: [true, true], customSpan: 2},
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
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/seventynineoil/thirtyonefqichannel1/fqi1oilstatus2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'793102'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'fqi eng oil status'} right={'2/4'} />
      <Legend />
      <DynamicTable data={data} mainHeaders={tableHeader} secondaryHeaders={secondaryHeaders}/>
    </DefaultLayout>
  )
}

export default Fqi1OilStatus1
