import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const Tsc1TempStatus = () => {
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
    { parameter: 'BACKLIGHT', statuses: ['42', '42', '43', '42', '44'] },
    { parameter: 'BEZEL', statuses: ['38', '38', '38', '38', '39'] },
    { parameter: 'MAIN BOARD', statuses: ['54', '54', '54', '55', '56'] },
    { parameter: 'CPU', statuses: ['47', '46', '46', '47', '45'] },
    { parameter: 'GPU', statuses: ['55', '51', '51', '53', '54'] },
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
      footer={<DataFooter left={'311702'} right={['Select done to continue']} />}
    >
      <DataHeader left={'TSC1 temperature status in celsius'} right={'1/1'} />
      <StatusTable data={data} tableHeader={header} />
    </DefaultLayout>
  )
}

export default Tsc1TempStatus
