import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const Fcc2PfcsRigVerification2 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'RUD PEDALS' }, { title: 'FCC1' }, { title: 'FCC2' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]

  const data = [
    {
      parameter: 'PILOT RVDT1',
      statuses: ['XXXXXX', '-0.06', '-0.03', 'XXXXXX'],
      hasBorderBottom: false,
      alignRight: true,
    },
    { parameter: 'PILOT RVDT2', statuses: ['XXXXXX', '-0.07', '-0.05', 'XXXXXX'], alignRight: true },
    { parameter: 'RUD PED VOTED', statuses: ['-0.01', '-0.01'], customSpan: 2, alignCenter: true },
  ]

  const mainHeaders2 = [{ title: 'RUD SURFACE' }, { title: 'FCC2' }]

  const data2 = [
    { parameter: 'RUD REU 6', statuses: ['0.13'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'RUD REU 7', statuses: ['0.12'], alignCenter: true },

    { parameter: 'RUD VOTED', statuses: ['0.13'], alignCenter: true },

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
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2pfcsrigverification3',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270123'} right={['Select fwd to continue', 'select prev to go back']} />}
    >
      <DataHeader left={'pfcs rigging verification'} right={'3/4'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} isHalfWidth />
    </DefaultLayout>
  )
}

export default Fcc2PfcsRigVerification2
