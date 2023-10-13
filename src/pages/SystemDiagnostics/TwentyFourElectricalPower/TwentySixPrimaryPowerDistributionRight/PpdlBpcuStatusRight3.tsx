import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlBpcuStatusRight3 = () => {
  const navigate = useNavigate();

  const tableHeader = [
    { title: 'COIL DRIVE TRIP' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const data = [
    {
      parameter: 'RAXC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'REDC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LMDXC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LEDXC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'RMDC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'RMFPC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'EDC/ADC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'EAC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'ATAC COIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'ADBC COIL',
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
        navigate(-1)
      },
    },
    {
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright4',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'246015'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdr bpcu status'} right={'4/5'} />
      <Legend title="no fault" title2="trip" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlBpcuStatusRight3
