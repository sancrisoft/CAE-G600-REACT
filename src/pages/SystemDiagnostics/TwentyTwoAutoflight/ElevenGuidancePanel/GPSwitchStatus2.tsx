import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const GPSwitchStatus2 = () => {
  const navigate = useNavigate();
  const data = [
    { parameter: 'AUTOFLIGHT', hasBorderBottom: false, rowTitlePadding: true },
    {
      parameter: 'AUTO BUTTON PRESSED',
      status1: true,
      status2: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'L/R BUTTON PRESSED',
      status1: false,
      status2: false,
      hasBorderBottom: false,
    },
    {
      parameter: 'APR BUTTON PRESSED',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
    {
      parameter: 'AUTO BUTTON ARM DETECTED',
      status1: true,
      status2: true,
      hasBorderBottom: false,
      rowTitlePadding: true,
    },
    {
      parameter: 'FD BUTTON ARM DETECTED',
      status1: false,
      status2: false,
      hasBorderBottom: true,
      rowTitlePadding: true,
    },
    {
      parameter: 'IOGM TO GP A429 VALID',
      status1: true,
      status2: true,
      hasBorderBottom: false,
      rowTitlePadding: true,
    },
    {
      parameter: 'GP ANNUN VALID',
      status1: true,
      status2: true,
      hasBorderBottom: false,
      rowTitlePadding: true,
    },
  ]

  const tableHeader = [
    { title: 'FUNCTION' },
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
      text: 'Prev',
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
      footer={<DataFooter left={'221108'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'gp switch status'} right={'3/3'} />
      <Legend firstIsRed title="false" title2="true" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} hasDobleTitle title1="GP1" title2="GP2" />
    </DefaultLayout>
  )
}

export default GPSwitchStatus2
