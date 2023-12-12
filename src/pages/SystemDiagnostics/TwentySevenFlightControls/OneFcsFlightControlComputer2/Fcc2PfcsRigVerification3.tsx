import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const Fcc2PfcsRigVerification3 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'SIDESTICK ROLL' }, { title: 'FCC1' }, { title: 'FCC2' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]

  const data = [
    {
      parameter: 'PILOT VOTED',
      statuses: ['0.02', 'XXXXXXX'],
      customSpan: 2,
      alignCenter: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'COPPILOT VOTED',
      statuses: ['-0.01', 'XXXXXXX'],
      customSpan: 2,
      alignCenter: true,
    },
    { parameter: 'SBH POSITION', statuses: ['XXXXXXX', 'XXXXXXX'], customSpan: 2, alignCenter: true },
  ]

  const mainHeaders2 = [{ title: 'RUD SURFACE' }, { title: 'FCC2' }]

  const data2 = [
    { parameter: 'L INBD', statuses: ['XXXXXX'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'L MID', statuses: ['XXXXXX'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'L OUTBD', statuses: ['XXXXXX'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R INBD', statuses: ['XXXXXX'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R MID', statuses: ['XXXXXX'], hasBorderBottom: false, alignCenter: true },
    { parameter: 'R OUTBD', statuses: ['XXXXXX'], hasBorderBottom: true, alignCenter: true },
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
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270122'} right={['Select done to continue', 'select prev to go back']} />}
    >
      <DataHeader left={'pfcs rigging verification'} right={'4/4'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} isHalfWidth />
    </DefaultLayout>
  )
}

export default Fcc2PfcsRigVerification3
