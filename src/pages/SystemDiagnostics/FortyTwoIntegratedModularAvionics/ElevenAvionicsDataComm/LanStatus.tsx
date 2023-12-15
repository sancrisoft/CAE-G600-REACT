import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const LanStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'CMC' }]
  const data = [
    { parameter: 'NIC1', status1: true },
    { parameter: 'NIC2', status1: true },
    { parameter: 'NIC3', status1: true },
    { parameter: 'NIC4', status1: true },
    { parameter: 'CMC (MAU 1)', status1: true },
    { parameter: 'RNIC1 (MRC1)', status1: true },
    { parameter: 'RNIC2 (MRC2)', status1: true },
    { parameter: 'PRINTER (DISREGARD PRINTER LAN', status1: true, hasBorderBottom: false },
    { parameter: 'STATUS IF NOT INSTALLED)', status1: '' },
    { parameter: 'DLMU', status1: true },
    { parameter: 'AGM1', status1: true },
    { parameter: 'AGM2', status1: true },
    { parameter: 'AGM3', status1: true },
    { parameter: 'AGM4', status1: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/elevenavionicsdatacomm/lanstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'314103'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'Lan status'} right={'1/2'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default LanStatus
