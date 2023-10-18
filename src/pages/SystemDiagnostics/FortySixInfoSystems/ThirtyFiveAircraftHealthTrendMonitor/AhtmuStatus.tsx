import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AhtmuStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM3' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'RECORDING ENABLED', status1: true, status2: true },
    { parameter: 'WIRELESS XMIT ENABLED', status1: true, status2: true },
    { parameter: 'WI-FI CONNECTED', status1: true, status2: true },
    { parameter: 'GSM/CELLULAR CONNECTED', status1: false, status2: false },
    { parameter: 'ARINC 664 1A CONNECTED', status1: true, status2: true },
    { parameter: 'ARINC 664 1B CONNECTED', status1: true, status2: true },
    { parameter: 'DLMU ETH 2 CONNECTED', status1: true, status2: true },
    { parameter: 'CABIN SERVER ETH 3 CONN.', status1: true, status2: true },
    { parameter: 'WDNU ETH 5 CONNECTED', status1: true, status2: true },
    { parameter: 'PRI POWER AVAILABLE', status1: true, status2: true },
    { parameter: 'SEC POWER AVAILABLE', status1: true, status2: true },
    { parameter: 'SEC POWER AVALABLE', status1: true, status2: true },
    { parameter: 'SDHC CARD INSTALLED', status1: true, status2: true },
    { parameter: 'USB DRIVE INSERTED', status1: false, status2: false },
    { parameter: 'DATA TRANSFER IN PROGRESS', status1: false, status2: false },
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
      href: '/systemdiagnostics/fortysixinfosystems/thirtyfiveaircrafthealthtrendmonitor/ahtmustatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'463501'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'AHTMU status'} right={'1/2'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default AhtmuStatus
