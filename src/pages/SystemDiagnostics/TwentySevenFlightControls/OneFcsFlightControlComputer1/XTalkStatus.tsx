import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const XTalkStatus = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'FCC1 XTALK PARAMETER ', alignLeft: true },
    { title: 'IOGM2', customSpan: 4 },
  ]
  const secondaryHeaders = [{ title: 'CA' }, { title: 'MA' }, { title: 'CB' }, { title: 'MB' }]
  const thirdHeaders = [{ title: 'FCC1', customSpan: 4 }]

  const data = [
    {
      parameter: 'FCC1 OPL1 BUS VALID',
      statuses: [false, false, true, true],
      type: ['noData', 'noData', 'square', 'square'],
    },
    {
      parameter: 'FCC1 OPL2 BUS VALID',
      statuses: [false, false, true, true],
      type: ['noData', 'noData', 'square', 'square'],
    },
    {
      parameter: 'FCC1 OPL3 BUS VALID',
      statuses: ['N/A', false, 'N/A', true],
      type: ['square', 'square', 'square', 'square'],
      alignCenter: true,
    },
    {
      parameter: 'FCC1 COM OPP1 BUS VALID',
      statuses: [false, false, false, false],
      type: ['noData', 'noData', 'square', 'square'],
    },
    {
      parameter: 'FCC1 COM OPP2 BUS VALID',
      statuses: [false, false, false, false],
      type: ['noData', 'noData', 'square', 'square'],
    },
    {
      parameter: 'FCC2 COM OWN1 BUS VALID',
      statuses: [false, false, false, false],
      type: ['noData', 'noData', 'square', 'square'],
    },
    {
      parameter: 'FCC2 COM OWN1 BUS VALID',
      statuses: [false, false, false, false],
      type: ['noData', 'noData', 'square', 'square'],
    },
    {
      parameter: 'FCC2 COM OWN2 BUS VALID',
      statuses: [false, false, false, false],
      type: ['noData', 'noData', 'square', 'square'],
    },
    {
      parameter: 'FCC1 COM OWN3 BUS VALID',
      statuses: [false, false, false, false],
      type: ['noData', 'noData', 'square', 'square'],
    },
    {
      parameter: 'FCC2 COM OPP1 BUS VALID',
      statuses: [false, false, true, true],
      type: ['noData', 'noData', 'square', 'square'],
    },
    {
      parameter: 'FCC2 COM OPP2 BUS VALID',
      statuses: [false, false, true, true],
      type: ['noData', 'noData', 'square', 'square'],
    },
    {
      parameter: 'FCC2 COM OPP3 BUS VALID',
      statuses: [false, false, true, true],
      type: ['noData', 'noData', 'square', 'square'],
    },
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
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/xtalkstatus1',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270130'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'fcc xtalk status '} right={'1/2'} />
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

export default XTalkStatus
