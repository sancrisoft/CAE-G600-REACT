import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const GcuGenStatus = () => {
  const navigate = useNavigate();
  const tableHeaderRx = [{ title: 'PARAMETERS' }, { title: 'IOGM1' }, { title: 'IOGM4' }]

  const dataTx = [
    { parameter: 'apu gen volts', status1: '0 VAC', status2: '0 VAC' },
    { parameter: 'apu gen freq', status1: '0 HZ', status2: '0 HZ' },
    { parameter: 'apu gen load', status1: '0 %', status2: '0 %' },
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
      text: 'FWD',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/twentyfourelectricalpower/twentytwogeneratorcontrolunitapu/gcugenstatus1',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'242201'} right={['Select FWD to continue']} />}
    >
      <DataHeader left={'APU GCU & GEN'} right={'1/3'} />
      <DataTable data={dataTx} mainHeaders={tableHeaderRx} />
    </DefaultLayout>
  )
}

export default GcuGenStatus
