import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const PfcsRigVerification2 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'RUD PEDALS' }, { title: 'FCC1' }, { title: 'FCC2' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]

  const data = [
    {
      parameter: 'RUD RVDT1',
      statuses: ['XXXXXX', '-0.05', '-0.01', 'XXXXXX'],
      hasBorderBottom: false,
      alignRight: true,
    },
    { parameter: 'RUD RVDT2', statuses: ['XXXXXX', '-0.08', '-0.08', 'XXXXXX'], alignRight: true },
    { parameter: 'RUD PED VOTED', statuses: ['XXXXXXX', 'XXXXXXX'], customSpan: 2, alignCenter: true },
  ]

  const mainHeaders2 = [{ title: 'RUD SURFACE' }, { title: 'FCC2' }]

  const data2 = [
    { parameter: 'RUD REU 6', statuses: ['XXXXXX'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'RUD REU 7', statuses: ['XXXXXX'], alignCenter: true },

    { parameter: 'RUD VOTED', statuses: ['XXXXXX'], alignCenter: true },

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
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/pfcsrigverification3',
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

export default PfcsRigVerification2
