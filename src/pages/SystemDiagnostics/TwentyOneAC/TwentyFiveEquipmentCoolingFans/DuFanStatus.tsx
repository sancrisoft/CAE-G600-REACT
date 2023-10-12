import { useNavigate } from "react-router-dom"
import DataFooter from "../../../../components/DataFooter"
import DataHeader from "../../../../components/DataHeader"
import DataTable from "../../../../components/DataTable"
import DefaultLayout from "../../../../components/Layout"
import { NavBarButtonType } from "../../../../components/NavBar"

const DuFanStatus = () => {
  const navigate = useNavigate();

  const data = [
    { parameter: 'DU1', status1: '2800 RPM', status2: '2800 RPM' },
    { parameter: 'DU3', status1: '2800 RPM', status2: '2800 RPM' },
  ]

  const data1 = [
    { parameter: 'DU2', status1: '2800 RPM', status2: '2800 RPM' },
    { parameter: 'DU4', status1: '2800 RPM', status2: '2800 RPM' },
  ]

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'Fan1' }, { title: 'Fan2' }]

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
      footer={<DataFooter left={'212501'} right={['Select done to continue']} />}
    >
      <DataHeader left={'Du Fan Status'} right={'1/1'} />
      <DataTable data={data} mainHeaders={tableHeader} mergedHeader={'IOGM3'} />
      <DataTable data={data1} mainHeaders={tableHeader} mergedHeader={'IOGM1'} marginTop />
    </DefaultLayout>
  )
}

export default DuFanStatus
