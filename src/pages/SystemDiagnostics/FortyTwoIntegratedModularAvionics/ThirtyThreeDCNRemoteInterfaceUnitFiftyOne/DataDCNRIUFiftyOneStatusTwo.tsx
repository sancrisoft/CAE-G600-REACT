import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const DataDCNRIUFiftyOneStatusTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'A429 RX B01', status1: true, status2: true },
    { parameter: 'A429 RX B01 BUFFER OVRFLW', status1: true, status2: true, noDataStatus1: true },
    { parameter: 'A429 RX B02', status1: true, status2: true },
    { parameter: 'A429 RX B02 BUFFER OVRFLW', status1: true, status2: true },
    { parameter: 'A429 TX B03', status1: true, status2: true },
    { parameter: 'A429 RX B03 BUFFER OVRFLW', status1: true, status2: true },
    { parameter: 'A429 RX B04', status1: true, status2: true },
    { parameter: 'A429 RX B04 BUFFER OVRFLW', status1: true, status2: true },
    { parameter: 'A429 TX B01', status1: true, status2: true },
    { parameter: 'A429 TX B01 BUFFER OVRFLW', status1: true, status2: true },
    { parameter: 'A429 TX B02', status1: true, status2: true },
    { parameter: 'A429 TX B02 BUFFER OVRFLW', status1: true, status2: true },
    { parameter: 'DISCRETE INPUT FAULT', status1: true, status2: true },
    { parameter: 'ANALOG INPUT FAULT', status1: true, status2: true },
  ]

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate('/systemdiagnostics')
      },
    },
    {
      text: 'PREV',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
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
      footer={<DataFooter left={'4233100'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RIU 51 STATUS'} right={'2/2'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRIUFiftyOneStatusTwo
