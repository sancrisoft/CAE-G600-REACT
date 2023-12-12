import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const Fcc2ValidityStatus3 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'FCC2 VALIDITY PARAMETER', alignLeft: true },
    { title: 'IOGM3', customSpan: 4 },
  ]
  const secondaryHeaders = [{ title: 'CA' }, { title: 'MA' }, { title: 'CB' }, { title: 'MB' }]
  const thirdHeaders = [{ title: 'FCC2', customSpan: 4 }]

  const data = [
    { parameter: 'ELEV L CMD XCOMP', statuses: [true, true, false, false] },
    { parameter: 'ELEV R CMD XCOMP', statuses: [true, true, false, false] },
    { parameter: 'AIL L CMD XCOMP', statuses: [true, true, false, false] },
    { parameter: 'AIL R CMD XCOMP', statuses: [true, true, false, false] },
    { parameter: 'rud cmd xcomp', statuses: [true, true, false, false] },
    { parameter: 'LIB SPLR CMD XCOMP', statuses: [true, true, false, false] },
    { parameter: 'RIB SPLR CMD XCOMP', statuses: [true, true, false, false] },
    { parameter: 'LMID SPLR CMD XCOMP', statuses: [true, true, false, false] },
    { parameter: 'RMID SPLR CMD XCOMP', statuses: [true, true, false, false] },
    { parameter: 'LOB SPLR CMD XCOMP', statuses: [true, true, false, false] },
    { parameter: 'ROB SPLR CMD XCOMP', statuses: [true, true, false, false] },
    { parameter: 'STAB RATE CMD XCOMP', statuses: [true, true, false, false] },
    { parameter: 'XTALK DATA XCOMP', statuses: ['N/A', true, 'N/A', false], alignCenter: true },
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
      footer={<DataFooter left={'270139'} right={['Select done to continue', 'select prev to go back']} />}
    >
      <DataHeader left={'fcc validity STATUS'} right={'4/4'} />
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

export default Fcc2ValidityStatus3
