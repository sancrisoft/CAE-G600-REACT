import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const Fcc2EngagementStatus2 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'PARAMETER', alignLeft: true }, { title: 'IOGM2' }, { title: 'IOGM3' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]
  const thirdHeaders = [{ title: 'FCC1' }, { title: 'FCC2' }]

  const data = [
    { parameter: 'PITCH PLT RVDT1 ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'PITCH PLT RVDT2 ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'PITCH CPLT RVDT1 ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'PITCH CPLT RVDT2 ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'ROLL PLT RVDT1 ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'ROLL PLT RVDT2 ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'ROLL CPLT RVDT1 ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'ROLL CPLT RVDT2 ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'YAW RVDT1 ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'YAW RVDT2 ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'SBH RVDT1 ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'SBH RVDT2 ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'YAW TRIM RVDT ENGAGED', statuses: [false, true, true, false] },
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
      text: 'prev',
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
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer2/fcc2engagementstatus3',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270134'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'fcc engagement status'} right={'3/4'} />
      <Legend title="true" title2="false" />
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

export default Fcc2EngagementStatus2
