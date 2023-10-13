import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const GcuGenStatusLeft2 = () => {
  const navigate = useNavigate();
  const data = [
    {
      parameter: 'LAC CONTACTOR',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
  ]
  const data2 = [
    {
      parameter: 'L GEN SWITCH',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]
  const data3 = [
    {
      parameter: 'L FIRE SWITCH',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

  const data4 = [
    {
      parameter: 'L FUEL CUTOFF SWITCH',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
  ]
  const tableHeader = [
    { title: 'CONTACTOR STATUS' },
    { title: 'IOGM 1' },
    { title: 'IOGM 4' },
  ]

  const tableHeader2 = [
    { title: 'SWITCH' },
    { title: 'iogm 1' },
    { title: 'iogm 4' },
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
      text: 'prev',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics/twentyfourelectricalpower/twentyfivegeneratorcontrolunitleft/gcugenstatusleft3',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'242503'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'left gcu & gen'} right={'3/4'} />
      <Legend title="closed" title2="open" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="on" title2="off" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
      <Legend title="not pulled" title2="pulled" />
      <StatusTable data={data3} hasHeader tableHeader={tableHeader2} />
      <Legend title="run" title2="cut" />
      <StatusTable data={data4} hasHeader tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default GcuGenStatusLeft2
