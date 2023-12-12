import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const EngagementStatus = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'PARAMETER', alignLeft: true }, { title: 'IOGM2' }, { title: 'IOGM3' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]
  const thirdHeaders = [{ title: 'FCC1' }, { title: 'FCC2' }]

  const data = [
    { parameter: 'FCC ENGAGED', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED MCE', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED CTRL', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED EXT1', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED EXT2', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED SIDESTICK', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED BFCU', statuses: [false, true, true, false] },
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
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/engagementstatus1',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270132'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'fcc engagement status'} right={'1/4'} />
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

export default EngagementStatus
