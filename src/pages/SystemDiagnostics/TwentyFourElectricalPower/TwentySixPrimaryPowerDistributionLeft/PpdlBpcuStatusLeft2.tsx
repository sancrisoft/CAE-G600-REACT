import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlBpcuStatusLeft2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PDB TEMPERATURES' }, { title: 'CH A' }, { title: 'CH B' }]

  const tableHeader2 = [
    { title: 'PDB OVER TEMP' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const tableHeader3 = [
    { title: 'CURRENT SENSOR' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const data = [{ parameter: 'L PDB TEMPERATURE', status1: '32 C', status2: '32 C' }]

  const data2 = [
    {
      parameter: 'L AC PDB',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'L DC PDB',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

  const data3 = [
    {
      parameter: 'HE1 L MAIN TRU',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'HE3 L ESS TRU',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
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
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft3',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'245008'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdl bpcu status'} right={'3/5'} />
      <DataTable data={data} mainHeaders={tableHeader} />
      <Legend title="normal" title2="over temp" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data3} hasHeader tableHeader={tableHeader3} />
    </DefaultLayout>
  )
}

export default PpdlBpcuStatusLeft2
