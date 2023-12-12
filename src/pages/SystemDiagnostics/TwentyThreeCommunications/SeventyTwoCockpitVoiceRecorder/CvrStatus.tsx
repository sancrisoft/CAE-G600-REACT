import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const CvrStatus = () => {
  const navigate = useNavigate();
  const data = [
    {
      parameter: 'CVR AUDIO STATUS',
      status1: false,
      hasBorderBottom: true,
    },
    {
      parameter: 'RIPS FAULT STATUS',
      status1: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'DATALINK REC STATUS',
      status1: false,
      hasBorderBottom: true,
    },
    {
      parameter: 'DATALINK INTERFACE',
      status1: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'RIPS MAINTENANCE STATUS',
      status1: true,
      hasBorderBottom: true,
    },
  ]

  const data2 = [
    {
      parameter: 'DC MPT 6 STATUS',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]
  const data3 = [
    {
      parameter: 'STOP RECORDING EF ACTIVE',
      status1: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'CVR STOP REC ACTIVE',
      status1: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'CVR RECORDING',
      status1: false,
      hasBorderBottom: true,
    },
  ]
  const tableHeader = [{ title: 'CVR PARAMETERS' }, { title: 'IOGM3' }]

  const tableHeader2 = [{ title: 'POWER PARAMETER' }, { title: 'IOGM3' }, { title: 'IOGM4' }]

  const tableHeader3 = [{ title: 'PARAMETERS' }, { title: 'IOGM3' }, { title: '' }]

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
      footer={<DataFooter left={'237201'} right={['Select done to continue']} />}
    >
      <DataHeader left={'cvr status'} right={'1/1'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
      <Legend title="true" title2="false" />
      <StatusTable data={data3} hasHeader tableHeader={tableHeader3} hasDobleTitle title1="RDC18" title2="" />
    </DefaultLayout>
  )
}

export default CvrStatus
