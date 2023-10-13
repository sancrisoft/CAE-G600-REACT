import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const RatContactorStatus = () => {
  const navigate = useNavigate();
  const data = [
    {
      parameter: 'left ess tru emergency',
      status1: true,
      status2: 'n/a',
      hasBorderBottom: true,
    },
    {
      parameter: 'right ess tru emergency',
      status1: 'n/a',
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'emergency ac',
      status1: true,
      status2: 'n/a',
      hasBorderBottom: true,
    },
  ]
  const data2 = [
    {
      parameter: 'wshld ht l side',
      status1: true,
      status2: 'n/a',
      hasBorderBottom: true,
    },
    {
      parameter: 'wshld ht r side',
      status1: 'n/a',
      status2: true,
      hasBorderBottom: true,
    },
  ]
  const data3 = [
    {
      parameter: 'rat switch',
      status1: true,
      hasBorderBottom: true,
    },
  ]
  const data4 = [
    {
      parameter: 'rat door status',
      status1: true,
      hasBorderBottom: true,
    },
  ]
  const tableHeader = [
    { title: 'contactor' },
    { title: 'IOGM 1' },
    { title: 'IOGM 3' },
  ]

  const tableHeader2 = [
    { title: 'relay' },
    { title: 'iogm 1' },
    { title: 'iogm 3' },
  ]

  const tableHeader3 = [
    { title: 'switch' },
    { title: 'iogm 1' },
  ]

  const tableHeader4 = [
    { title: 'door status' },
    { title: 'iogm 1' },
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
      footer={<DataFooter left={'242301'} right={['Select done to continue']} />}
    >
      <DataHeader left={'rat contactor status'} right={'1/1'} />
      <Legend title="open" title2="closed" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="norm pwr" title2="rat pwr" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
      <Legend title="on" title2="off" />
      <StatusTable data={data3} hasHeader tableHeader={tableHeader3} />
      <Legend title="closed" title2="open" />
      <StatusTable data={data4} hasHeader tableHeader={tableHeader4} />
    </DefaultLayout>
  )
}

export default RatContactorStatus
