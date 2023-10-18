import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const XTalkStatus1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'FCC2 XTALK PARAMETER ', alignLeft: true },
    { title: 'IOGM3', customSpan: 4 },
  ]
  const secondaryHeaders = [{ title: 'CA' }, { title: 'MA' }, { title: 'CB' }, { title: 'MB' }]
  const thirdHeaders = [{ title: 'FCC2', customSpan: 4 }]

  const data = [
    {
      parameter: 'FCC2 OPL1 BUS VALID',
      statuses: [true, true, false, false],
      type: ['square', 'square', 'noData', 'noData'],
    },
    {
      parameter: 'FCC2 OPL2 BUS VALID',
      statuses: [true, true, false, false],
      type: ['square', 'square', 'noData', 'noData'],
    },
    {
      parameter: 'FCC2 OPL3 BUS VALID',
      statuses: ['N/A', true, 'N/A', false],
      type: ['square', 'square', 'square', 'noData'],
      alignCenter: true,
    },
    {
      parameter: 'FCC2 COM OPP1 BUS VALID',
      statuses: [false, false, false, false],
      type: ['square', 'square', 'noData', 'noData'],
    },
    {
      parameter: 'FCC2 COM OPP2 BUS VALID',
      statuses: [false, false, false, false],
      type: ['square', 'square', 'noData', 'noData'],
    },
    {
      parameter: 'FCC1 COM OPP1 BUS VALID',
      statuses: [false, false, false, false],
      type: ['square', 'square', 'noData', 'noData'],
    },
    {
      parameter: 'FCC1 COM OWN1 BUS VALID',
      statuses: [false, false, false, false],
      type: ['square', 'square', 'noData', 'noData'],
    },
    {
      parameter: 'FCC1 COM OWN2 BUS VALID',
      statuses: [false, false, false, false],
      type: ['square', 'square', 'noData', 'noData'],
    },
    {
      parameter: 'FCC1 COM OWN3 BUS VALID',
      statuses: [false, false, false, false],
      type: ['square', 'square', 'noData', 'noData'],
    },
    {
      parameter: 'FCC1 COM OPP1 BUS VALID',
      statuses: [true, true, false, false],
      type: ['square', 'square', 'noData', 'noData'],
    },
    {
      parameter: 'FCC1 COM OPP2 BUS VALID',
      statuses: [true, true, false, false],
      type: ['square', 'square', 'noData', 'noData'],
    },
    {
      parameter: 'FCC1 COM OPP3 BUS VALID',
      statuses: [true, true, false, false],
      type: ['square', 'square', 'noData', 'noData'],
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
      footer={<DataFooter left={'270131'} right={['Select done to continue', 'select prev to go back']} />}
    >
      <DataHeader left={'fcc xtalk status '} right={'2/2'} />
      <Legend title="valid" title2="not valid" />
      <DynamicTable
        data={data}
        mainHeaders={mainHeaders}
        secondaryHeaders={secondaryHeaders}
        hasBorder
        thirdHeaders={thirdHeaders}
      />
    </DefaultLayout>
  )
}

export default XTalkStatus1
