import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const SidestickLPriFaultStatus4 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'fault name' }, { title: 'LEFT' }, { title: 'right' }]
  const secondaryHeaders = [{ title: 'a' }, { title: 'b' }, { title: 'a' }, { title: 'b' }]
  const data = [
    { parameter: 'cbit - claw monitor', statuses: [true, false, true, true] },
    { parameter: 'cbit - motor temperature', statuses: [true, true, true, true] },
    { parameter: 'cbit - force sensor', statuses: [false, true, false, false] },
    { parameter: 'fcc 1 cmd lane parity', statuses: [true, true, true, true] },
    { parameter: 'fcc 1 cmd lane sdi', statuses: [true, true, true, true] },
    { parameter: 'fcc 1 cmd lane ssm', statuses: [true, true, true, true] },
    { parameter: 'fcc 1 cmd lane rate', statuses: [true, true, true, true] },
    { parameter: 'fcc 1 mon lane parity', statuses: [true, true, true, true] },
    { parameter: 'fcc 1 mon lane sdi', statuses: [true, true, true, true] },
    { parameter: 'fcc 1 mon lane ssm', statuses: [true, true, true, true] },
    { parameter: 'fcc 1 mon lane rate', statuses: [true, true, true, true] },
    { parameter: 'fcc 2 com lane parity', statuses: [true, true, true, true] },
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
      href: '/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprifaultstatus5',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270505'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'acs fault status'} right={'5/6'} />
      <Legend title="no fault" title2="fault" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  )
}

export default SidestickLPriFaultStatus4
