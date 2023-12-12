import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const GcuGenStatusLeft1 = () => {
  const navigate = useNavigate();
  const data = [
    {
      parameter: 'AC RESET',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]
  const data2 = [
    {
      parameter: 'L GEN OVERCURRENT WARN',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'L GEN NO SYNC',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'L GCU FREQ REF FAILED',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LAXC AUX STATUS MISCOMPARE',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LAXC LOCKED OUT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'L FIRE SW FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'L FUEL CUTOFF SWITCH FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]
  const tableHeader = [
    { title: 'STATUS' },
    { title: 'IOGM 1' },
    { title: 'IOGM 4' },
  ]

  const tableHeader2 = [
    { title: 'FAULT / WARN STATUS' },
    { title: 'iogm 1' },
    { title: 'iogm 4' },
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
      href: '/systemdiagnostics/twentyfourelectricalpower/twentyfivegeneratorcontrolunitleft/gcugenstatusleft2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'242502'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'left gcu & gen'} right={'2/4'} />
      <Legend title="normal" title2="reset" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="inactive" title2="active" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default GcuGenStatusLeft1
