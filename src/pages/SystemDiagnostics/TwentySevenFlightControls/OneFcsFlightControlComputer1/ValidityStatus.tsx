import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import SimpleColumnsTable from "../../../../components/SimpleColumnsTable";

const ValidityStatus = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'FCC1 VALIDITY PARAMETER', alignLeft: true },
    { title: 'IOGM2', customSpan: 4 },
  ]
  const secondaryHeaders = [{ title: 'CA' }, { title: 'MA' }, { title: 'CB' }, { title: 'MB' }]
  const thirdHeaders = [{ title: 'FCC1', customSpan: 4 }]

  const data = [
    { parameter: 'INTERNAL MONITORING', statuses: [false, false, true, true] },
    { parameter: 'XLANE XTALK', statuses: [false, false, true, true] },
    { parameter: 'ANALOG LOOP', statuses: [false, false, true, true] },
    { parameter: 'A429 LOOP', statuses: [false, false, true, true] },
    { parameter: 'CONTROL LAW', statuses: [true, true, true, true] },
    { parameter: 'GLOBAL CPOST', statuses: [false, false, true, true] },
  ]
  const tableHeader1 = ['COM A', 'MON A', 'COM B', 'MON B']
  const data1 = [{ statuses: ['XXXX', 'XXXX', 'XXXX', 'XXXX'] }]

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
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/validitystatus1',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270136'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'fcc validity status'} right={'1/4'} />
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

export default ValidityStatus
