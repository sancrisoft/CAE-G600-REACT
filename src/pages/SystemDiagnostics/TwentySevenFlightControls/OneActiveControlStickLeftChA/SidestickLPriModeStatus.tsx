import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const SidestickLPriModeStatus = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'mode name' }, { title: 'LEFT' }, { title: 'right' }]
  const secondaryHeaders = [{ title: 'a' }, { title: 'b' }, { title: 'a' }, { title: 'b' }]
  const data = [
    { parameter: 'plt/cplt linked', statuses: [false, false, false, false] },
    { parameter: 'roll force-fight', statuses: [false, false, false, false] },
    { parameter: 'pitch force-fighte', statuses: [false, false, false, false] },
    { parameter: 'roll motor limit', statuses: [false, false, false, false] },
    { parameter: 'pitch motor limit', statuses: [false, false, false, false] },
    { parameter: 'roll motor temp warning', statuses: [false, false, false, false] },
    { parameter: 'pitch motor temp warning', statuses: [false, false, false, false] },
    { parameter: 'other seat stick active', statuses: [false, false, false, false] },
    { parameter: 'rigging needed', statuses: [false, false, false, false] },
    { parameter: 'degraded active mode', statuses: [false, false, false, false] },
    { parameter: 'channel in control', statuses: [false, false, false, false] },
    { parameter: 'autopilot cmd engaged roll', statuses: [false, false, false, false] },
    { parameter: 'autopilot cmd engaged pitch', statuses: [false, false, false, false] },
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
      href: '/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprimodestatus1',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270507'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'acs mode status'} right={'1/2'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  )
}

export default SidestickLPriModeStatus
