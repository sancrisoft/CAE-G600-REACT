import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import PriorityIndicator from "../../../../components/PriorityIndicator";

const ATOneATQAInterfaceStatus1 = () => {
  const navigate = useNavigate();
  const tableHeaderRx = [{ title: 'ENGINE CONTROLLER' }, { title: 'L LEVER' }, { title: 'R LEVER' }]
  const dataRx = [
    { parameter: 'L EEC CH A', status1: '-0.0  DEG', status2: 'N/A' },
    { parameter: 'L EEC CH B', status1: '-0.0  DEG', status2: 'N/A' },
    { parameter: 'R EEC CH A', status1: 'N/A', status2: '11.6  DEG' },
    { parameter: 'R EEC CH B', status1: 'N/A', status2: '11.6 DEG' },
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
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'DONE',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'223019'} right={['sellect prev to go back', 'Select done to exit']} />}
    >
      <DataHeader left={'ATA1 TQA Interface status'} right={'2/2'} />
      <DataTable data={dataRx} mainHeaders={tableHeaderRx} mergedHeader={'THROTTLE POSITION'} hasBorder />
      <PriorityIndicator />
    </DefaultLayout>
  )
}

export default ATOneATQAInterfaceStatus1
