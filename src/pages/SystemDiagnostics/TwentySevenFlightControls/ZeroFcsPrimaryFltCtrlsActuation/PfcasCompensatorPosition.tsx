import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const PfcasCompensatorPosition = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'surface / actuator' }, { title: 'REU' }, { title: 'IOGM2' }]
  const tableHeader2 = [{ title: 'SURFACE / ACTUATOR' }, { title: 'REU' }, { title: 'IOGM3' }]
  const secondaryHeaders = ['', 'FCC1']
  const secondaryHeaders2 = ['', 'FCC2']

  const data1 = [
    { parameter: 'L AILERON OUTBOARD ', status1: '3', status2: '1.4903' },
    { parameter: 'L AILERON INBOARD', status1: '1', status2: '1.2473' },
    { parameter: 'R AILERON OUTBOARD', status1: '4', status2: '1.4483' },
    { parameter: 'R AILERON INBOARD', status1: '2', status2: '1.2302' },
    { parameter: 'LEFT OUTBOARD SPOILER', status1: '1', status2: '1.1446' },
    { parameter: 'RIGHT OUTBOARD SPOILER', status1: '2', status2: '1.2215' },
  ]

  const data2 = [
    { parameter: 'L ELEVATOR OUTBOARD', status1: '8', status2: '1.2473' },
    { parameter: 'L ELEVATOR INBOARD', status1: '7', status2: '1.2351' },
    { parameter: 'R ELEVATOR OUTBOARD', status1: '6', status2: '1.1519' },
    { parameter: 'R ELEVATOR INBOARD', status1: '8', status2: '1.2444' },
    { parameter: 'RUDDER UPPER', status1: '7', status2: '1.2429' },
    { parameter: 'RUDDER LOWER', status1: '6', status2: '1.2405' },
    { parameter: '', status1: '', status2: '-INCH-' },
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
      footer={<DataFooter left={'270011'} right={['Select done to continue']} />}
    >
      <DataHeader left={'pcfs compensator piston position 1/1'} right={'1/1'} />
      <DataTable data={data1} mainHeaders={tableHeader1} secondaryHeaders={secondaryHeaders} />
      <DataTable data={data2} mainHeaders={tableHeader2} secondaryHeaders={secondaryHeaders2} marginTop />
    </DefaultLayout>
  )
}

export default PfcasCompensatorPosition
