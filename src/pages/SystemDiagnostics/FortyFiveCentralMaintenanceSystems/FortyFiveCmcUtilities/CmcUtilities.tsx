import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const CmcUtilities = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'PROC 2' }]
  const tableHeader2 = [{ title: 'PARAMETER' }, { title: 'PROC 2' }]

  const data1 = [{ parameter: 'APU INTERFACE FAULT', status1: true }]
  const data2 = [{ parameter: 'SYS STAT', status1: 'VERIFIED DATA, NORMAL OPERATION' }]

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
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'454501'} right={['Select done to continue']} />}
    >
      <DataHeader left={'CMC utilities'} right={'1/1'} />
      <Legend />
      <StatusTable data={data1} tableHeader={tableHeader} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default CmcUtilities
