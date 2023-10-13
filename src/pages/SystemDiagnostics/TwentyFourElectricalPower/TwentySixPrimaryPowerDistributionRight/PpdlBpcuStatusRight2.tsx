import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlBpcuStatusRight2 = () => {
  const navigate = useNavigate();

  const tableHeader = [
    { title: 'CURRENT SENSOR' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const tableHeader2 = [
    { title: 'PDB OVER TEMP' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const tableHeader3 = [
    { title: 'PDB TEMPERATURES' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const data = [
    {
      parameter: 'HE2 R MAIN TRU',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'HE4 R ESS TRU',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'HE5 EDC/ADC',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

  const data2 = [
    {
      parameter: 'R AC PDB',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'R DC PDB',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

  const data3 = [
    {
      parameter: 'R PDB TEMPERATURE',
      status1: '34 C',
      status2: '34 C',
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
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlbpcustatusright3',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'246014'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdr bpcu status'} right={'3/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="normal" title2="overtemp" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data3} hasHeader tableHeader={tableHeader3} />
    </DefaultLayout>
  )
}

export default PpdlBpcuStatusRight2
