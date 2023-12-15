import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const Fcc2PfcsRigVerification1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'SIDESTICK PITCH' }, { title: 'FCC1' }, { title: 'FCC2' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]

  const data = [
    {
      parameter: 'PILOT RVDT1',
      statuses: ['XXXXXX', '-0.11', '-0.09', 'XXXXXX'],
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'PILOT RVDT2',
      statuses: ['XXXXXX', '-0.12', '-0.07', 'XXXXXX'],
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'COPILOT RVDT1',
      statuses: ['XXXXXX', '0.00', '0.01', 'XXXXXX'],
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'COPILOT RVDT2',
      statuses: ['XXXXXX', '-0.03', '-0.02', 'XXXXXX'],
      alignRight: true,
    },
    {
      parameter: 'PILOT VOTED',
      statuses: ['-0.04', '-0.04'],
      alignCenter: true,
      customSpan: 2,
      hasBorderBottom: false,
    },
    { parameter: 'COPILOT VOTED', statuses: ['0.00', '-0.01'], alignCenter: true, customSpan: 2 },
  ]

  const mainHeaders2 = [{ title: 'CTRL SURFACE' }, { title: 'FCC2' }]

  const data2 = [
    { parameter: 'L ELEV REU 6', statuses: ['16.40'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'L ELEV REU 7', statuses: ['16.44'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'L ELEV REU 8', statuses: ['16.51'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R ELEV REU 6', statuses: ['17.26'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R ELEV REU 7', statuses: ['16.91'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R ELEV REU 8', statuses: ['17.12'], hasBorderBottom: true, alignCenter: true },
    { parameter: 'L ELEV VOTED', statuses: ['16.44'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R ELEV VOTED', statuses: ['17.12'], hasBorderBottom: true, alignCenter: true },
    { parameter: '', statuses: ['-degrees-'], customSpan: 4, alignCenter: true },
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
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2pfcsrigverification2',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270122'} right={['Select fwd to continue', 'select prev to go back']} />}
    >
      <DataHeader left={'pfcs rigging verification'} right={'2/4'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} isHalfWidth />
    </DefaultLayout>
  )
}

export default Fcc2PfcsRigVerification1
