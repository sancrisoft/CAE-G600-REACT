import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const GcuGenStatus1 = () => {
  const navigate = useNavigate();
  const data = [
    {
      parameter: 'AAC CONTACTOR STATUS',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
  ]
  const data2 = [
    {
      parameter: 'apu gen switch',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]
  const data3 = [
    {
      parameter: 'apu gen overcurrent warn',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]
  const tableHeader = [
    { title: 'contactor status' },
    { title: 'IOGM 1' },
    { title: 'IOGM 4' },
  ]

  const tableHeader2 = [
    { title: 'switch' },
    { title: 'IOGM 1' },
    { title: 'IOGM 4' },
  ]

  const tableHeader3 = [
    { title: 'parameter' },
    { title: 'IOGM 1' },
    { title: 'IOGM 4' },
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
      text: 'fwd',
      href: '/systemdiagnostics/twentyfourelectricalpower/twentytwogeneratorcontrolunitapu/gcugenstatus2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'242202'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'apu gcu & gen'} right={'2/3'} />
      <Legend title="closed" title2="open" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="on" title2="off" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
      <Legend title="fault" title2="no fault" />
      <StatusTable data={data3} hasHeader tableHeader={tableHeader3} />
    </DefaultLayout>
  )
}

export default GcuGenStatus1
