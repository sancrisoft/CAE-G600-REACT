import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const FdrStatus = () => {
  const navigate = useNavigate();

  const fdrHeader = [{ title: 'FDR PARAMETERS' }, { title: 'RIU51' }, { title: '' }]
  const data1 = [
    { parameter: 'FDR STATUS', status1: false },
    { parameter: 'FDR A717 SYNC', status1: true },
  ]

  const data2 = [{ parameter: 'FDR RECORDING', status1: false }]

  const rdcHeader = [{ title: 'RDC PARAMETERS' }, { title: 'RDC17' }, { title: '' }]
  const data3 = [{ parameter: 'STOP RECORDING EF', status1: false }]

  const powerHeader = [{ title: 'POWER PARAMETERS' }, { title: 'IOGM1' }, { title: 'IOGM2' }]
  const data4 = [{ parameter: 'DC MPT 12 STATUS', status1: true, status2: true }]

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
      footer={<DataFooter left={'313101'} right={['Select done to continue']} />}
    >
      <DataHeader left={'FDR Status'} right={'1/1'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data1} tableHeader={fdrHeader} hasDobleTitle title1="IOGM2" title2="" />
      <Legend title="True" title2="False" />
      <StatusTable data={data2} tableHeader={fdrHeader} hasDobleTitle title1="IOGM2" title2="" />
      <Legend title="Record" title2="No rec" />
      <StatusTable data={data3} tableHeader={rdcHeader} hasDobleTitle title1="IOGM2" title2="" />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data4} tableHeader={powerHeader} />
    </DefaultLayout>
  )
}

export default FdrStatus
