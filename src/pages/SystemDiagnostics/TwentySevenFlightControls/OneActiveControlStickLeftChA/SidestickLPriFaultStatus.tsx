import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const SidestickLPriFaultStatus = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'FAULT NAME' }, { title: 'LEFT' }, { title: 'right' }]
  const secondaryHeaders = [{ title: 'a' }, { title: 'b' }, { title: 'a' }, { title: 'b' }]
  const data = [
    { parameter: 'PILOT CH A 28V FAULT', statuses: [true, true, true, true] },
    { parameter: 'PILOT CH B 28V FAULT', statuses: [true, true, true, true] },
    { parameter: 'COPILOT CH A 28V FAULT', statuses: [true, true, true, true] },
    { parameter: 'COPILOT CH B 28V FAULT', statuses: [true, true, true, true] },
    { parameter: 'PILOT SIDESTICK JAM FAULT', statuses: [true, true, true, true] },
    { parameter: 'COPILOT SIDESTICK JAM FAULT', statuses: [true, true, true, true] },
    { parameter: 'PILOT IBIT FAULT', statuses: [true, true, true, true] },
    { parameter: 'COPILOT IBIT FAULT', statuses: [true, true, true, true] },
    { parameter: 'PILOT CH A IBIT FAULT', statuses: [true, true, true, true] },
    { parameter: 'PILOT CH B IBIT FAULT', statuses: [true, true, true, true] },
    { parameter: 'COPILOT CH A IBIT FAULT', statuses: [true, true, true, true] },
    { parameter: 'COPILOT CH B IBIT FAULT', statuses: [true, true, true, true] },
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
      text: 'FWD',
      href: '/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprifaultstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270501'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'acs fault status'} right={'1/6'} />
      <Legend title="no fault" title2="fault" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  )
}

export default SidestickLPriFaultStatus
