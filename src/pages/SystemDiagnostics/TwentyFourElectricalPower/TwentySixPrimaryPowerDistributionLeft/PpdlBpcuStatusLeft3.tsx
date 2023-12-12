import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlBpcuStatusLeft3 = () => {
  const navigate = useNavigate();

  const tableHeader = [
    { title: 'COIL DRIVE TRIP' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const data = [
    {
      parameter: 'LAXC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LEDC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'REDXC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LMDC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'RMDXC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LMFPC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
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
      text: 'prev',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft4',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'246005'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdl bpcu status'} right={'4/5'} />
      <Legend title="no fault" title2="trip" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlBpcuStatusLeft3
