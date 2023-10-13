import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const PfcsRigVerification = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'SIDESTICK ROLL' }, { title: 'FCC1' }, { title: 'FCC2' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]

  const data = [
    {
      parameter: 'PILOT RVDT1',
      statuses: ['XXXXXX', '-0.02', '0.04', 'XXXXXX'],
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'PILOT RVDT2',
      statuses: ['XXXXXX', '0.04', '0.04', 'XXXXXX'],
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'COPILOT RVDT1',
      statuses: ['XXXXXX', '-0.01', '-0.04', 'XXXXXX'],
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'COPILOT RVDT2',
      statuses: ['XXXXXX', '-0.05', '-0.04', 'XXXXXX'],
      alignRight: true,
      hasBorderBottom: true,
    },

    {
      parameter: 'PILOT VOTED',
      statuses: ['0.01', '-0.01'],
      customSpan: 2,
      hasBorderBottom: false,
      alignCenter: true,
    },
    { parameter: 'COPILOT VOTED', statuses: ['-0.01', '0.02'], customSpan: 2, alignCenter: true },
  ]

  const mainHeaders2 = [{ title: 'CTRL SURFACE' }, { title: 'FCC1' }]

  const data2 = [
    { parameter: 'L AIL REU 1', statuses: ['0.04'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'L AIL REU 3', statuses: ['0.12'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R AIL REU 2', statuses: ['0.13'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R AIL REU 4', statuses: ['0.10'], hasBorderBottom: true, alignCenter: true },
    { parameter: 'L AIL VOTED', statuses: ['0.12'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R AIL VOTED', statuses: ['0.12'], hasBorderBottom: true, alignCenter: true },
    { parameter: '', statuses: ['-degrees-'], customSpan: 4, alignCenter: true },
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
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/pfcsrigverification1',
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

export default PfcsRigVerification
