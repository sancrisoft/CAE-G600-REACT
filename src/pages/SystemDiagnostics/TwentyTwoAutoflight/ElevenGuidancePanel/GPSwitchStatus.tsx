import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const GPSwitchStatus = () => {
  const navigate = useNavigate();
  const data = [
    { parameter: 'SPEED', hasBorderBottom: false, rowTitlePadding: true },
    {
      parameter: 'CHG BUTTON PRESSED',
      status1: true,
      status2: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'MAN BUTTON PRESSED',
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
      parameter: 'LATERAL',
      hasBorderBottom: false,
      rowTitlePadding: true,
    },
    {
      parameter: 'SYNC BUTTON PRESSED',
      status1: false,
      status2: false,
      hasBorderBottom: false,
    },
    {
      parameter: 'hdg/trk button pressed',
      status1: false,
      status2: false,
      hasBorderBottom: false,
    },
    {
      parameter: 'lnav button pressed',
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
      parameter: 'hdg/trk set to trk',
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
      text: 'FWD',
      href: '/systemdiagnostics/twentytwoautoflight/elevenguidancepanel/gpswitchstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'221106'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'gp switch status'} right={'1/3'} />
      <Legend firstIsRed title="false" title2="true" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} hasDobleTitle title1="GP1" title2="GP2" />
    </DefaultLayout>
  )
}

export default GPSwitchStatus
