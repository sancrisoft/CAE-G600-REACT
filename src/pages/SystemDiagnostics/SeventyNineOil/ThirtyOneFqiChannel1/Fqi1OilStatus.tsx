import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const Fqi1OilStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM3' }, { title: 'IOGM2' }]
  const data = [
    { parameter: 'L ENG OIL QTY LOW', status1: true, status2: true },
    { parameter: 'L ENG OIL SENSOR FAULT', status1: true, status2: true },
    { parameter: 'R ENG OIL QTY LOW', status1: true, status2: true },
    { parameter: 'R ENG OIL SENSOR FAULT', status1: true, status2: true },
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
      href: '/systemdiagnostics/seventynineoil/thirtyonefqichannel1/fqi1oilstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'793101'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'fqi eng oil status'} right={'1/4'} />
      <Legend />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} hasDobleTitle title1="TX1" title2="TX2" />
    </DefaultLayout>
  )
}

export default Fqi1OilStatus
