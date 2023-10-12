import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const ControlOneStatus2 = () => {
  const navigate = useNavigate();

  const data = [
    { parameter: 'AIRCRAFT ALT', status1: '184 FT', status2: '184 FT' },
    { parameter: 'CABIN RATE ACTUAL  FPM', status1: '0 FPM', status2: '0 FPM' },
    { parameter: 'DIFF PRESSURE', status1: '0.039 PSID', status2: '0.039 PSID' },
    { parameter: 'SEL LANDING ALT', status1: '-1 FT', status2: '-1 FT' },
    { parameter: 'CABIN ALT ACTUAL', status1: '100 FT', status2: '100 FT' },
    { parameter: 'BARO-CORRECTION', status1: '29.92 N.HG', status2: '29.92 N.HG' },
    { parameter: 'CABIN PRESSURE CONTROLLER MODE', status1: 'AUTO', status2: 'AUTO' },
  ]

  const secondaryHeaders = ['IOGM1', 'IOGM2']
  const mainHeaders = [{ title: 'CPCU1 PARAMETERS' }, { title: 'DIRECT' }, { title: 'RDC12' }]

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
      text: 'Prev',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
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
      footer={<DataFooter left={'213103'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'Cabin Pressure Control 1 Status'} right={'3/3'} />
      <DataTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} />
    </DefaultLayout>
  )
}

export default ControlOneStatus2
