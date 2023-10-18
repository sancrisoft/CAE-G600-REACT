import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const HstsData = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'STATUS' }, { title: 'IOGM3/HSTS' }]
  const secondaryHeaders = [{ title: 'CH1' }, { title: 'CH2' }]

  const data = [
    { parameter: 'HSTS CHANNEL STANDBY', statuses: [false, true] },
    { parameter: 'HSTS NORMAL MODE ACTIVE', statuses: [true, false] },
    { parameter: 'HSTS SECONDARY MODE ACTIVE', statuses: [false, 'N/A'], alignCenter: true },
    { parameter: 'HSTA EXTEND STOP', statuses: [false, false] },
    { parameter: 'HSTA RETRACT STOP', statuses: [false, false] },
    { parameter: 'BACKUP PITCH TRIM UP', statuses: [false, 'N/A'], alignCenter: true },
    { parameter: 'BACKUP PITCH TRIM DN', statuses: [false, 'N/A'], alignCenter: true },
    { parameter: 'BRAKE RELEASE COMMANDED', statuses: [true, false] },
  ]

  const mainHeaders2 = [{ title: 'PARAMETER' }, { title: 'IOGM3/HSTS' }]

  const data2 = [
    { parameter: 'STABILIZER MEASURED RATE', statuses: ['-0.000', '-0.000'], alignRight: true },

    { parameter: '', statuses: ['-deg/s-'], customSpan: 4, alignCenter: true },
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
      footer={<DataFooter left={'550107'} right={['Select done to continue']} />}
    >
      <DataHeader left={'horizontal stabilizer datas'} right={'1/1'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} secondaryHeaders={secondaryHeaders} />
    </DefaultLayout>
  )
}

export default HstsData
