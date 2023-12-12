import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlPdbPowerStatusRight7 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: ' R DC CONT FAULT STATUS' }, { title: 'CH A' }, { title: 'CH B' }]

  const data = [
    { parameter: 'LEDXC FAULT', status1: true, status2: true },
    { parameter: 'LMDXC FAULT', status1: true, status2: true },
    { parameter: 'REDC FAULT', status1: true, status2: true },
    { parameter: 'RMDC FAULT', status1: true, status2: true },
    { parameter: 'EDCADC FAULT', status1: true, status2: true },
    { parameter: 'ADBC FAULT', status1: true, status2: true },
    { parameter: 'RMFPC FAULT', status1: true, status2: true },
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
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright8',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'246012'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdr power status'} right={'8/12'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlPdbPowerStatusRight7
