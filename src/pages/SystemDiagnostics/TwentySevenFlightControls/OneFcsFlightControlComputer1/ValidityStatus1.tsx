import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const ValidityStatus1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'FCC1 VALIDITY PARAMETER', alignLeft: true },
    { title: 'IOGM2', customSpan: 4 },
  ]
  const secondaryHeaders = [{ title: 'CA' }, { title: 'MA' }, { title: 'CB' }, { title: 'MB' }]
  const thirdHeaders = [{ title: 'FCC1', customSpan: 4 }]

  const data = [
    { parameter: 'ELEV L CMD XCOMP', statuses: [false, false, true, true] },
    { parameter: 'ELEV R CMD XCOMP', statuses: [false, false, true, true] },
    { parameter: 'AIL L CMD XCOMP', statuses: [false, false, true, true] },
    { parameter: 'AIL R CMD XCOMP', statuses: [false, false, true, true] },
    { parameter: 'rud cmd xcomp', statuses: [false, false, true, true] },
    { parameter: 'LIB SPLR CMD XCOMP', statuses: [false, false, true, true] },
    { parameter: 'RIB SPLR CMD XCOMP', statuses: [false, false, true, true] },
    { parameter: 'LMID SPLR CMD XCOMP', statuses: [false, false, true, true] },
    { parameter: 'RMID SPLR CMD XCOMP', statuses: [false, false, true, true] },
    { parameter: 'LOB SPLR CMD XCOMP', statuses: [false, false, true, true] },
    { parameter: 'ROB SPLR CMD XCOMP', statuses: [false, false, true, true] },
    { parameter: 'STAB RATE CMD XCOMP', statuses: [false, false, true, true] },
    { parameter: 'XTALK DATA XCOMP', statuses: ['N/A', false, 'N/A', true], alignCenter: true },
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
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/validitystatus2',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270137'} right={['Select fwd to continue', 'select prev to go back']} />}
    >
      <DataHeader left={'fcc validity STATUS'} right={'2/4'} />
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

export default ValidityStatus1
