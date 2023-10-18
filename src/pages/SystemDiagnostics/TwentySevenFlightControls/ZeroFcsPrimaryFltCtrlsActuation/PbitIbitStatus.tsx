import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const PbitIbitStatus = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'parameter' }, { title: 'code 1 ' }, { title: 'code 2' }]

  const data1 = [
    { parameter: 'reu 1 ', status1: '0', status2: '0' },
    { parameter: 'reu 2', status1: '0', status2: '0' },
    { parameter: 'reu 3', status1: '0', status2: '0' },
    { parameter: 'reu 4', status1: '0', status2: '0' },
    { parameter: 'reu 5', status1: '0', status2: '0' },
    { parameter: 'reu 6', status1: '0', status2: '0' },
    { parameter: 'reu 7', status1: '0', status2: '0' },
    { parameter: 'reu 8', status1: '0', status2: '0' },
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
      footer={<DataFooter left={'270010'} right={['Select done to continue']} />}
    >
      <DataHeader left={'reu pbit/ibit fault codes '} right={'1/1'} />
      <DataTable data={data1} mainHeaders={tableHeader1} mergedHeader="iogm2/iogm3" hasBorder />
    </DefaultLayout>
  )
}

export default PbitIbitStatus
