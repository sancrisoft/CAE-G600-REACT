import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const SidestickLPriFaultStatus5 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'fault name' }, { title: 'LEFT' }, { title: 'right' }]
  const secondaryHeaders = [{ title: 'a' }, { title: 'b' }, { title: 'a' }, { title: 'b' }]
  const data = [
    { parameter: 'fcc 2 cmd lane sdi', statuses: [true, true, true, true] },
    { parameter: 'fcc 2 cmd lane ssm', statuses: [true, true, true, true] },
    { parameter: 'fcc 2 cmd lane rate', statuses: [true, true, true, true] },
    { parameter: 'fcc 2 mon lane parity', statuses: [true, true, true, true] },
    { parameter: 'fcc 2 mon lane sdi', statuses: [true, true, true, true] },
    { parameter: 'fcc 2 mon lane ssm', statuses: [true, true, true, true] },
    { parameter: 'fcc 2 mon lane rate', statuses: [true, true, true, true] },
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
      footer={<DataFooter left={'270506'} right={['select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'acs fault status'} right={'6/6'} />
      <Legend title="no fault" title2="fault" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  )
}

export default SidestickLPriFaultStatus5
