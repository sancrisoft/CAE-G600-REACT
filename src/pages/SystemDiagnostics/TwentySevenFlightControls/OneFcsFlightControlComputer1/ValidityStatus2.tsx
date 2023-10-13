import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import SimpleColumnsTable from "../../../../components/SimpleColumnsTable";

const ValidityStatus2 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'FCC2 VALIDITY PARAMETER', alignLeft: true },
    { title: 'IOGM3', customSpan: 4 },
  ]
  const secondaryHeaders = [{ title: 'CA' }, { title: 'MA' }, { title: 'CB' }, { title: 'MB' }]
  const thirdHeaders = [{ title: 'FCC2', customSpan: 4 }]

  const data = [
    { parameter: 'INTERNAL MONITORING', statuses: [true, true, false, false] },
    { parameter: 'XLANE XTALK', statuses: [true, true, false, false] },
    { parameter: 'ANALOG LOOP', statuses: [true, true, false, false] },
    { parameter: 'A429 LOOP', statuses: [true, true, false, false] },
    { parameter: 'CONTROL LAW', statuses: [true, true, true, true] },
    { parameter: 'GLOBAL CPOST', statuses: [true, true, false, false] },
  ]
  const tableHeader1 = ['COM A', 'MON A', 'COM B', 'MON B']
  const data1 = [{ statuses: ['XXXX', 'XXXX', 'XXXX', 'XXXX'] }]

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
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/validitystatus3',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270138'} right={['Select fwd to continue', 'select prev to go back']} />}
    >
      <DataHeader left={'fcc validity STATUS'} right={'3/4'} />
      <Legend title="valid" title2="not valid" />
      <DynamicTable
        data={data}
        mainHeaders={mainHeaders}
        secondaryHeaders={secondaryHeaders}
        hasBorder
        thirdHeaders={thirdHeaders}
      />
      <SimpleColumnsTable data={data1} subheaders={tableHeader1} header={'fcc1 validity error code'} />
    </DefaultLayout>
  )
}

export default ValidityStatus2
