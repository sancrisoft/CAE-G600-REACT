import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const BfcuStatus1 = () => {
  const navigate = useNavigate();

  const secondaryHeaders = [{ title: 'bfcu' }]

  const mainHeaders2 = [{ title: 'parameter', alignLeft: true }, { title: 'iogm3' }]

  const data2 = [
    { parameter: 'IRU BODY YAW RATE VALID', statuses: [true], type: ['noData'], alignCenter: true },
    { parameter: 'CRC CHECK VALID', statuses: [false], type: ['noData'], alignCenter: true },
    { parameter: 'FLASH PROM PARITY VALID', statuses: [true], type: ['noData'], alignCenter: true },
    { parameter: 'PS POST VALID', statuses: [false], type: ['noData'], alignCenter: true },
    { parameter: 'PS MONITORING VALID', statuses: [true], type: ['noData'], alignCenter: true },
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
      text: 'PREV',
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
      footer={<DataFooter left={'270202'} right={['Select done to continue', 'select prev to go back']} />}
    >
      <DataHeader left={'bdfcu  status'} right={'2/2'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} thirdHeaders={secondaryHeaders} />
    </DefaultLayout>
  )
}

export default BfcuStatus1
