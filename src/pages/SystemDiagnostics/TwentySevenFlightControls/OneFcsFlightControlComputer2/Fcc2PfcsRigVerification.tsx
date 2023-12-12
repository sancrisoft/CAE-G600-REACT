import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const Fcc2PfcsRigVerification = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'SIDESTICK ROLL' }, { title: 'FCC1' }, { title: 'FCC2' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]

  const data = [
    {
      parameter: 'PILOT RVDT1',
      statuses: ['XXXXXX', '0.05', '0.04', 'XXXXXX'],
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'PILOT RVDT2',
      statuses: ['XXXXXX', '0.09', '0.06', 'XXXXXX'],
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'COPILOT RVDT1',
      statuses: ['XXX', '0.00', '-0.07', 'XXXXXX'],
      alignRight: true,
      hasBorderBottom: false,
    },
    { parameter: 'COPILOT RVDT2', statuses: ['XXX', '-0.05', '-0.04', 'XXX'], alignRight: true },

    {
      parameter: 'PILOT VOTED',
      statuses: ['0.03', '0.02'],
      customSpan: 2,
      hasBorderBottom: false,
      alignCenter: true,
    },
    { parameter: 'COPILOT VOTED', statuses: ['-0.02', '-0.02'], customSpan: 2, alignCenter: true },
  ]

  const mainHeaders2 = [{ title: 'CTRL SURFACE' }, { title: 'FCC1' }]

  const data2 = [
    { parameter: 'L AL REU 1', statuses: ['0.06'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'L AL REU 1', statuses: ['0.10'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R AL REU 1', statuses: ['0.13'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R AL REU 1', statuses: ['0.12'], hasBorderBottom: true, alignCenter: true },
    { parameter: 'L AL REU 1', statuses: ['0.12'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R AL REU 1', statuses: ['0.10'], hasBorderBottom: true, alignCenter: true },
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
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2pfcsrigverification1',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270121'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'pfcs rigging verification'} right={'1/4'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} isHalfWidth />
    </DefaultLayout>
  )
}

export default Fcc2PfcsRigVerification
