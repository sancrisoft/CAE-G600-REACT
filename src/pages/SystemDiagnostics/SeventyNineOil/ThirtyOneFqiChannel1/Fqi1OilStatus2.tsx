import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const Fqi1OilStatus2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM3' }, { title: 'IOGM2' }]
  const data = [
    { parameter: 'L ENG OIL COMPENSATOR', status1: '125.15 PF', status2: '125.15 PF' },
    { parameter: 'L ENG OIL SENSOR', status1: '98.80 PF', status2: '98.80 PF' },
    { parameter: 'R ENG OIL COMPENSATOR', status1: '123.80 PF', status2: '123.80 PF' },
    { parameter: 'R ENG OIL SENSOR', status1: '96.95 PF', status2: '96.95 PF' },
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
      <StatusTable data={data} hasHeader tableHeader={tableHeader} hasDobleTitle title1="TX1" title2="TX2" />
    </DefaultLayout>
  )
}

export default Fqi1OilStatus2
