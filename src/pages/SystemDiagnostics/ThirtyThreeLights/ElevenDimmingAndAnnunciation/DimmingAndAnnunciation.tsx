import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const DimmingAndAnnunciation = () => {
  const navigate = useNavigate();
  const data = [
    {
      parameter: 'CHANNEL FAIL',
      status1: true,
      status2: true,
    },
    {
      parameter: 'APP CRC FAIL',
      status1: true,
      status2: true,
    },
    {
      parameter: 'RAM FAIL',
      status1: true,
      status2: true,
    },
    {
      parameter: 'NVM FAIL',
      status1: true,
      status2: true,
    },
    {
      parameter: 'CAN FAIL',
      status1: true,
      status2: true,
    },
    {
      parameter: 'HW WDT FAIL',
      status1: true,
      status2: true,
    },
    {
      parameter: 'TABLE CRC FAIL',
      status1: true,
      status2: true,
    },
  ]

  const tableHeader = [
    { title: 'PARAMETERS' },
    { title: 'IOGM1' },
    { title: 'IOGM4' },
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
      text: 'done',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'331101'} right={['Select done to continue']} />}
    >
      <DataHeader left={'dimming and annunciation status'} right={'1/1'} />
      <Legend title="no fail" title2="fail" />
      <StatusTable
        data={data}
        hasHeader
        tableHeader={tableHeader}
        hasDobleTitle
        title1="DAB1 STATUS"
        title2="DAB2 STATUS"
      />
    </DefaultLayout>
  )
}

export default DimmingAndAnnunciation
