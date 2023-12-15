import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const GPSwitchStatus1 = () => {
  const navigate = useNavigate();
  const data = [
    { parameter: 'VERTICAL', hasBorderBottom: false, rowTitlePadding: true },
    {
      parameter: 'CHG BUTTON PRESSED',
      status1: true,
      status2: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'vnav button pressed',
      status1: false,
      status2: false,
      hasBorderBottom: false,
    },
    {
      parameter: 'VS/FPA BUTTON PRESSED',
      status1: false,
      status2: false,
      hasBorderBottom: false,
    },
    {
      parameter: 'FLCH button pressed',
      status1: false,
      status2: false,
      hasBorderBottom: false,
    },
    {
      parameter: 'ROTARY KNOB ACTIVE',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },

    {
      parameter: 'Altitude',
      hasBorderBottom: false,
      rowTitlePadding: true,
    },
    {
      parameter: 'HOLD BUTTON PRESSED',
      status1: false,
      status2: false,
      hasBorderBottom: false,
    },
    {
      parameter: 'ROTARY KNOB ACTIVE',
      status1: false,
      status2: false,
      hasBorderBottom: false,
    },
    {
      parameter: '100ft/10m pulled out',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
    {
      parameter: 'FD BUTTON ARM DETECTED',
      status1: true,
      status2: true,
      hasBorderBottom: true,
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
        navigate('/systemdiagnostics');
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
      text: 'FWD',
      href: '/systemdiagnostics/twentytwoautoflight/elevenguidancepanel/gpswitchstatus2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'221107'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'gp switch status'} right={'2/3'} />
      <Legend firstIsRed title="false" title2="true" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} hasDobleTitle title1="GP1" title2="GP2" />
    </DefaultLayout>
  )
}

export default GPSwitchStatus1
