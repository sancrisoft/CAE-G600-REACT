import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlPdbPowerStatusRight10 = () => {
  const navigate = useNavigate();

  const tableHeader = [
    { title: 'STATUS' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const tableHeader2 = [
    { title: 'POWER QUALITY' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const tableHeader3 = [
    { title: 'STATUS' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const tableHeader4 = [
    { title: 'SWITCH STATUS' },
    { title: 'CH A' },
    { title: 'CH B' },
    { title: 'CH C' },
  ]

  const data = [
    {
      parameter: 'EXTERNAL POWER',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
  ]

  const data2 = [
    {
      parameter: 'EXT AC PWR QUAL OK',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'EXT DC PWR QUAL OK',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
  ]

  const data3 = [
    {
      parameter: 'EXTERNAL POWER',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

  const data4 = [
    {
      parameter: 'ext power switch',
      statuses: [true, true, 'N/A'],
      hasBorderBottom: true,
    },
    {
      parameter: 'l ac-x-tie switch',
      statuses: [false, false, false],
      hasBorderBottom: true,
    },
    {
      parameter: 'r ac-x-tie switch',
      statuses: [false, false, false],
      hasBorderBottom: true,
    },
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
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright11',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'244003'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdr power status'} right={'11/12'} />
      <Legend title="avail" title2="not avail" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="true" title2="false" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
      <Legend title="on" title2="off" />
      <StatusTable data={data3} hasHeader tableHeader={tableHeader3} />
      <StatusTable data={data4} hasHeader tableHeader={tableHeader4} />
    </DefaultLayout>
  )
}

export default PpdlPdbPowerStatusRight10
