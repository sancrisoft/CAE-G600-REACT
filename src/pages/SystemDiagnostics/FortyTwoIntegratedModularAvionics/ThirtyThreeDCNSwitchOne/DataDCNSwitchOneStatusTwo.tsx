import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";
import Text from "../../../../components/Text";
import DynamicTable from "../../../../components/DynamicTableTwo";

const DataDCNSwitchOneStatusTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'A/C REGISTRATION AVAILABLE', status1: true, status2: true },
    { parameter: 'UTC TIME AVAILABLE', status1: true, status2: true },
    { parameter: 'DATE AVAILABLE', status1: true, status2: true },
  ]

  const data2 = [
    { parameter: 'DATALOAD INHIBIT', status1: false, status2: false },
  ]

  const mainHeaders = [
    { title: 'INTERNAL TEMPERATURE', customSpan: 0, hasBorderBottom: true },
    { title: 'IOGM1', customSpan: 0, hasBorderBottom: true },
    { title: '45         C', customSpan: 0, hasBorderBottom: true },
  ];
  
  const secHeaders = [
    { title: 'IOGM4', customSpan: 3, hasBorderBottom: true },
    { title: '45        C', customSpan: 1, hasBorderBottom: true },
  ];

  const mainHeaders2 = [
    { title: 'SWITCH MODE', customSpan: 0, hasBorderBottom: true },
    { title: 'IOGM1', customSpan: 0, hasBorderBottom: true },
    { title: 'NORMAL OPERATION', customSpan: 0, hasBorderBottom: true },
  ];
  
  const secHeaders2 = [
    { title: 'IOGM4', customSpan: 3, hasBorderBottom: true },
    { title: 'NORMAL OPERATION', customSpan: 1, hasBorderBottom: true },
  ];
  
  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate('/systemdiagnostics')
      },
    },
    {
      text: 'PREV',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnswitchone/datadcnswitchonestatusthree',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233002'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'SWITCH 01 STATUS'} right={'2/3'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true}/>
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data2} tableHeader={tableHeader} headerLanStatus={true}/>
      <DynamicTable 
        mainHeaders={mainHeaders} 
        secondaryHeaders={secHeaders} 
        mainHeadersTwo={mainHeaders2} 
        secondaryHeadersTwo={secHeaders2} 
        hasMarginTop={true} 
      />
    </DefaultLayout>
  )
}

export default DataDCNSwitchOneStatusTwo
