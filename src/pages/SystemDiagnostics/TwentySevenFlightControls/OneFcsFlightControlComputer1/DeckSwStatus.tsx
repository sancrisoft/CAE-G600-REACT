import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const DeckSwStatus = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'SWITCH NAME', alignLeft: true }, { title: 'IOGM2' }, { title: 'IOGM3' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]
  const thirdHeaders = [{ title: 'FCC1' }, { title: 'FCC2' }]

  const data = [
    {
      parameter: 'PILOT PITCH TRIM UP SW',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'PILOT PITCH TRIM DN SW',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'PILOT ROLL TRIM R WING DN',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'PILOT ROLL TRIM L WING DN',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'COPILOT PITCH TRIM UP SW',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'COPILOT PITCH TRIM DN SW',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'COPILOT ROLL TRIM R WING DN',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'COPILOT ROLL TRIM L WING DN',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'BACKUP PITCH TRIM UP SW1',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'BACKUP PITCH TRIM UP SW2',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'BACKUP PITCH TRIM DN SW1',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'BACKUP PITCH TRIM DN SW2',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
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
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/deckswstatus1',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270124'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'flight deck switch status '} right={'1/3'} />
      <Legend title="close" title2="open" />
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

export default DeckSwStatus
