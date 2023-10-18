import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const FlapsSystemStatus = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'aircraft parameter', alignLeft: true }, { title: 'IOGM2' }, { title: 'IOGM3' }]
  const thirdHeaders = [{ title: 'FECU CMD' }, { title: 'FECU MON' }]

  const data = [
    {
      parameter: 'weight on wheels',
      statuses: [true, true],
      customSpan: 2,
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'ON GROUND STATIONARY',
      statuses: [true, true],
      customSpan: 2,
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'FCS MAINTENANCE SW ON',
      statuses: [false, false],
      customSpan: 2,
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'MAIN HYDRAULICS ON',
      statuses: [true, true],
      customSpan: 2,
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'AUX HYDRAULICS ON',
      statuses: [false, false],
      customSpan: 2,
      alignRight: true,
    },
    {
      parameter: 'AIRCRAFT ID 0',
      statuses: [true, true],
      customSpan: 2,
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'AIRCRAFT ID 1',
      statuses: [true, true],
      customSpan: 2,
      alignRight: true,
      hasBorderBottom: false,
    },
    {
      parameter: 'AIRCRAFT ID 2',
      statuses: [false, false],
      customSpan: 2,
      alignRight: true,
    },
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
      footer={<DataFooter left={'275502'} right={['Select done to continue']} />}
    >
      <DataHeader left={'flap system status'} right={'1/1'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data} mainHeaders={mainHeaders} hasBorder thirdHeaders={thirdHeaders} />
    </DefaultLayout>
  )
}

export default FlapsSystemStatus
