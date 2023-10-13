import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const GcuGenStatusLeft = () => {
  const navigate = useNavigate();
  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM 1' }, { title: 'IOGM 4' }]
  const tableHeader2 = [{ title: 'PARAMETERS' }, { title: 'IOGM 3' }, { title: 'IOGM 4' }]

  const data = [
    { parameter: 'L GEN VOLTS', status1: '0 VAC', status2: '0 vac' },
    { parameter: 'L GEN FREQ', status1: '0 Hz', status2: '0 hz' },
    { parameter: 'L GEN LOAD', status1: '0 %', status2: '0 %' },
    { parameter: 'A GEN FREQ', status1: '0 hz', status2: '0 hz' },
  ]

  const data2 = [{ parameter: 'EXT PWR FREQ', status1: '399 HZ', status2: '399 HZ' }]
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
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/twentyfourelectricalpower/twentyfivegeneratorcontrolunitleft/gcugenstatusleft1',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'242501'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'left gcu & gen'} right={'1/4'} />
      <DataTable data={data} mainHeaders={tableHeader} />
      <DataTable data={data2} mainHeaders={tableHeader2} marginTop />
    </DefaultLayout>
  )
}

export default GcuGenStatusLeft
