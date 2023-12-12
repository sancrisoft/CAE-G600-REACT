import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const EngagementStatus1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'PARAMETER', alignLeft: true }, { title: 'IOGM2' }, { title: 'IOGM3' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]
  const thirdHeaders = [{ title: 'FCC1' }, { title: 'FCC2' }]

  const data = [
    { parameter: 'FCC ENGAGED REU 1', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED REU 2', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED REU 3', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED REU 4', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED REU 5', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED REU 6', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED REU 7', statuses: [false, true, true, false] },
    { parameter: 'FCC ENGAGED REU 8', statuses: [false, true, true, false] },
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
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/engagementstatus2',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270133'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'fcc engagement status'} right={'2/4'} />
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

export default EngagementStatus1
