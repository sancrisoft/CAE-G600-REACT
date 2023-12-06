import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";
import Text from "../../../../components/Text";

const Tsc1MiscStatus = () => {
  const navigate = useNavigate();

  const header = [
    { title: 'PARAMETER' },
    { title: 'TSC1' },
    { title: 'TSC2' },
    { title: 'TSC3' },
    { title: 'TSC4' },
    { title: 'TSC5' },
  ]
  const data = [
    { parameter: 'FAN ON COMMAND', statuses: ['2477', '2637', '2544', '2482', '2625'] },
    { parameter: 'FAN ON SECONDS', statuses: ['48943', '60079', '21127', '21', '43044'] },
    { parameter: 'TOUCH COUNT', statuses: ['26521', '20482', '19781', '25642', '1126'] },
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
      footer={<DataFooter left={'311703'} right={['Select done to continue']} />}
    >
      <DataHeader left={'TSC1 misc status'} right={'1/1'} />
      <Text indentSize="m" text={'INITIAL COUNT IS 0'} />
      <Text indentSize="m" text={'MAXIMUM COUNT IS 32768'} />
      <StatusTable data={data} tableHeader={header} />
    </DefaultLayout>
  )
}

export default Tsc1MiscStatus
