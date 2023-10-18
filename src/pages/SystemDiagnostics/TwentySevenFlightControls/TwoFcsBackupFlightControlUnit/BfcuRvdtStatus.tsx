import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const BfcuRvdtStatus = () => {
  const navigate = useNavigate();

  const secondaryHeaders = [{ title: 'fcc2' }]

  const mainHeaders2 = [{ title: 'bfcu rvdt sensor' }, { title: 'iogm3' }]

  const data2 = [
    { parameter: 'PILOT STICK ROLL', statuses: ['XXXXXXX'], alignCenter: true },
    { parameter: 'COPILOT STICK ROLL', statuses: ['XXXXXXX'], alignCenter: true },
    { parameter: 'PILOT STICK PITCH', statuses: ['XXXXXXX'], alignCenter: true },
    { parameter: 'COPILOT STICK PITCH', statuses: ['XXXXXXX'], alignCenter: true },
    { parameter: 'RUDDER PEDALS', statuses: ['XXXXXXX'], alignCenter: true },
    { parameter: '', statuses: ['-degrees-'], customSpan: 4 },
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
      footer={<DataFooter left={'270203'} right={['Select done to continue']} />}
    >
      <DataHeader left={'BDFCU RVDT STATUS'} right={'1/1'} />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} thirdHeaders={secondaryHeaders} />
    </DefaultLayout>
  )
}

export default BfcuRvdtStatus
