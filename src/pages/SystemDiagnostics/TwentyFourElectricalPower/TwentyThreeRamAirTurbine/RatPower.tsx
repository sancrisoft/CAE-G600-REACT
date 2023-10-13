import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const RatPower = () => {
  const navigate = useNavigate();
  const tableHeaderRx = [{ title: 'PARAMETERS' }, { title: 'IOGM4' }]

  const dataTx = [
    { parameter: 'RAT AC VOLTS', status1: '0 VAC' },
    { parameter: 'RAT FREQUENCY', status1: '0 HZ' },
    { parameter: 'RAT LOAD PHASE A', status1: '0 %' },
    { parameter: 'RAT LOAD PHASE B', status1: '0 %' },
    { parameter: 'RAT LOAD PHASE C', status1: '0 %' },
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
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'242302'} right={['Select done to continue']} />}
    >
      <DataHeader left={'rat power'} right={'1/1'} />
      <DataTable data={dataTx} mainHeaders={tableHeaderRx} />
    </DefaultLayout>
  )
}

export default RatPower
