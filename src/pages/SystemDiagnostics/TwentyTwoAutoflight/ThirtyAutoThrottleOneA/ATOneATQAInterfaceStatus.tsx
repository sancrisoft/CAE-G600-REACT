import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import PriorityIndicator from "../../../../components/PriorityIndicator";

const ATOneATQAInterfaceStatus = () => {
  const navigate = useNavigate();
  const tableHeaderRx = [{ title: 'RX PARAMETERS' }, { title: 'L LEVER' }, { title: 'R LEVER' }]
  const dataRx = [
    { parameter: 'TACH', status1: '-0.0 DEG/S', status2: '-0.0 DEG/S' },
    { parameter: 'BUS SELECTED', status1: 'NOT SEL', status2: 'NOT SEL' },
    { parameter: 'ENGAGE WRAP', status1: 'INACTIVE', status2: 'INACTIVE' },
    { parameter: 'ENG/DIS SW WRAP', status1: 'INACTIVE', status2: 'INACTIVE' },
    { parameter: 'ZEROING CMD', status1: 'ACTIVE', status2: 'ACTIVE' },
    { parameter: 'BUS 1 TIMEOUT', status1: 'INACTIVE', status2: 'INACTIVE' },
    { parameter: 'BUS 2 TIMEOUT', status1: 'INACTIVE', status2: 'INACTIVE' },
    { parameter: 'TQA SERVO FAIL', status1: 'INACTIVE', status2: 'INACTIVE' },
  ]

  const tableHeaderTx = [{ title: 'TX PARAMETERS' }, { title: 'L LEVER' }, { title: 'R LEVER' }]
  const dataTx = [
    { parameter: 'RATE CMD', status1: '-0.0 DEG/S', status2: '-0.0 DEG/S' },
    { parameter: 'RATE CMD STATUS', status1: 'NOT ENGAGED', status2: 'NOT ENGAGED' },
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
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/twentytwoautoflight/thirtyautothrottleonea/atoneatqainterfacestatus1',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'223018'} right={['Select FWD to continue']} screen />}
    >
      <DataHeader left={'ATA1 TQA Interface status'} right={'1/2'} />
      <DataTable data={dataRx} mainHeaders={tableHeaderRx} />
      <DataTable data={dataTx} mainHeaders={tableHeaderTx} marginTop />
      <PriorityIndicator noInfo />
    </DefaultLayout>
  )
}

export default ATOneATQAInterfaceStatus
