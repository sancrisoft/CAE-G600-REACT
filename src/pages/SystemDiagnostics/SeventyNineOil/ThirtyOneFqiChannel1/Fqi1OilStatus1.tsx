import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const Fqi1OilStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM3' }, { title: 'IOGM2' }]
  const data = [
    { parameter: 'OIL FILL IN PROGRESS', status1: true, status2: true },
    { parameter: 'OIL SVC SW INPUT FAULT', status1: true, status2: true },
    { parameter: 'FQI CRITICAL FAULT', status1: true, status2: true },
    { parameter: 'FQI MEASUREMENT FAULT', status1: true, status2: true },
    { parameter: 'FQI USER INTERFACE FAULT', status1: true, status2: true },
    { parameter: 'FQI MAINTENANCE FAULT', status1: true, status2: true },
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
      <StatusTable data={data} hasHeader tableHeader={tableHeader} hasDobleTitle title1="TX1" title2="TX2" />
    </DefaultLayout>
  )
}

export default Fqi1OilStatus1
