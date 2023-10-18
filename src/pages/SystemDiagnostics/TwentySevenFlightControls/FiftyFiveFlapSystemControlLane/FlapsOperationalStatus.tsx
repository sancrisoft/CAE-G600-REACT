import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const FlapsOperationalStatus = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'FLAP HANDLE POS', alignLeft: true }, { title: 'IOGM2' }, { title: 'IOGM3' }]
  const thirdHeaders = [{ title: 'FECU CMD' }, { title: 'FECU MON' }]

  const mainHeaders2 = [{ title: 'FLAP POSITION', alignLeft: true }, { title: 'IOGM2' }, { title: 'IOGM3' }]

  const data = [
    {
      parameter: 'SELECTED DETENT',
      statuses: ['0.00', '0.00'],
      customSpan: 2,
      alignRight: true,
    },
  ]

  const data2 = [
    {
      parameter: 'LEFT FLAP',
      statuses: ['0.00', '0.00'],
      customSpan: 2,
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'RIGHT FLAP',
      statuses: ['0.00', '0.00'],
      customSpan: 2,
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'COMBINED FLAP',
      statuses: ['0.00', '0.00'],
      customSpan: 2,
      alignRight: true,
    },
    { parameter: '', statuses: ['-deg-'], customSpan: 4, alignCenter: true },
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
      footer={<DataFooter left={'275501'} right={['Select done to continue']} />}
    >
      <DataHeader left={'flaps operational status'} right={'1/1'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} hasBorder thirdHeaders={thirdHeaders} />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} hasBorder thirdHeaders={thirdHeaders} />
    </DefaultLayout>
  )
}

export default FlapsOperationalStatus
