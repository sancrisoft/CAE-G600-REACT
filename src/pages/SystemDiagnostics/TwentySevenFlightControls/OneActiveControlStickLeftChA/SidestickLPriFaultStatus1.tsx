import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const SidestickLPriFaultStatus1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'fault name' }, { title: 'LEFT' }, { title: 'right' }]
  const secondaryHeaders = [{ title: 'a' }, { title: 'b' }, { title: 'a' }, { title: 'b' }]
  const data = [
    { parameter: 'pilot cbit fault', statuses: [false, true, false, false] },
    { parameter: 'copilot cbit fault ', statuses: [true, true, true, true] },
    { parameter: 'pilot ch a cbit fault ', statuses: [true, true, true, true] },
    { parameter: 'pilot ch b cbit faul ', statuses: [false, false, false, false] },
    { parameter: 'copilot ch a cbit fault', statuses: [true, true, true, true] },
    { parameter: 'copilot ch b cbit fault ', statuses: [true, true, true, true] },
    { parameter: 'fcc1 update fault', statuses: [false, true, false, false] },
    { parameter: 'fcc2 update fault', statuses: [false, true, false, false] },
    { parameter: 'fcc1 data validity fault', statuses: [true, true, true, true] },
    { parameter: 'fcc2 data validity fault', statuses: [true, true, true, true] },
    { parameter: 'plt software incompatible', statuses: [true, true, true, true] },
    { parameter: 'cplt software incompatible', statuses: [true, true, true, true] },
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
      href: '/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprifaultstatus2',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270502'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'acs fault status'} right={'2/6'} />
      <Legend title="no fault" title2="fault" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  )
}

export default SidestickLPriFaultStatus1
