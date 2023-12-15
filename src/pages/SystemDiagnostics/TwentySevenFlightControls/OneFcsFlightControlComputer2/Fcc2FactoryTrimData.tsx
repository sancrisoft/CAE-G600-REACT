import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const Fcc2FactoryTrimData = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'FACTORY TRIM DATA', alignLeft: true },
    { title: 'IOGM2', alignLeft: true },
    { title: 'IOGM3', alignLeft: true },
  ]
  const secondaryHeaders = [
    { title: 'FCC1', alignLeft: true },
    { title: 'FCC2', alignLeft: true },
  ]
  const data = [
    { parameter: 'FACTORY ROLL TRIM', statuses: ['-0.03', '-0.03'], alignRight: true },
    { parameter: 'CURRENT ROLL TRIM', statuses: ['-0.00', '-0.00'], alignRight: true },
    { parameter: '', statuses: ['-1.00-MAX TRIM LWD'], customSpan: 4 },
    { parameter: '', statuses: ['+1.00-MAX TRIM LWD'], customSpan: 4 },
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
      text: 'done',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270127'} right={['Select done to continue']} />}
    >
      <DataHeader left={'factory roll trim data display'} right={'1/1'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} colspan={2} />
    </DefaultLayout>
  )
}

export default Fcc2FactoryTrimData
