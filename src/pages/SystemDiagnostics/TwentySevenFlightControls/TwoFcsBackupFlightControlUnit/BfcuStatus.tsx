import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const BfcuStatus = () => {
  const navigate = useNavigate();

  const secondaryHeaders = [{ title: 'bfcu' }]

  const mainHeaders2 = [{ title: 'parameter', alignLeft: true }, { title: 'iogm3' }]

  const data2 = [
    { parameter: 'GEAR handle retracted', statuses: [false], type: ['noData'], alignCenter: true },
    { parameter: 'FLAP handle retracted', statuses: [false], type: ['noData'], alignCenter: true },
    { parameter: 'LEFT WOW', statuses: [false], type: ['noData'], alignCenter: true },
    { parameter: 'RIGHT WOW', statuses: [false], type: ['noData'], alignCenter: true },
    { parameter: 'FCC 1A ENGAGED', statuses: [false], type: ['noData'], alignCenter: true },
    { parameter: 'FCC 1B ENGAGED', statuses: [false], type: ['noData'], alignCenter: true },
    { parameter: 'FCC 2A ENGAGED', statuses: [false], type: ['noData'], alignCenter: true },
    { parameter: 'FCC 2B ENGAGED', statuses: [false], type: ['noData'], alignCenter: true },
    { parameter: 'BFCU ARMED', statuses: [false], type: ['noData'], alignCenter: true },
    { parameter: 'BFCU ENGAGED', statuses: [false], type: ['noData'], alignCenter: true },
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
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/twentysevenflightcontrols/twofcsbackupflightcontrolunit/bfcustatus1',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270201'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'bfcu status'} right={'1/2'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} thirdHeaders={secondaryHeaders} />
    </DefaultLayout>
  )
}

export default BfcuStatus
