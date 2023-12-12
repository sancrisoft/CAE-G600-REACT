import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const DeckRvdtStatus = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'RVDT' }, { title: 'IOGM2' }, { title: 'IOGM3' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]
  const thirdHeaders = [{ title: 'FCC1' }, { title: 'FCC2' }]

  const data = [
    { parameter: 'PLT ROLL RVDT1', statuses: ['XXXXXX', '0.07', '0.04', 'XXXXXX'], hasBorderBottom: false },
    { parameter: 'PLT ROLL RVDT2', statuses: ['XXXXXX', '0.06', '0.06', 'XXXXXX'], hasBorderBottom: false },
    { parameter: 'CPLT ROLL RVDT1', statuses: ['XXXXXX', '-0.00', '-0.05', 'XXXXXX'], hasBorderBottom: false },
    { parameter: 'CPLT ROLL RVDT2', statuses: ['XXXXXX', '-0.03', '-0.05', 'XXXXXX'], hasBorderBottom: false },
    { parameter: 'PLT PITCH RVDT1', statuses: ['XXXXXX', '-0.07', '-0.03', 'XXXXXX'], hasBorderBottom: false },
    { parameter: 'PLT PITCH RVDT2', statuses: ['XXXXXX', '-0.10', '-0.04', 'XXXXXX'], hasBorderBottom: false },
    { parameter: 'CPLT PITCH RVDT1', statuses: ['XXXXXX', '-0.00', '-0.00', 'XXXXXX'], hasBorderBottom: false },
    { parameter: 'CPLT PITCH RVDT2', statuses: ['XXXXXX', '-0.02', '-0.02', 'XXXXXX'], hasBorderBottom: false },
    { parameter: 'RUD PEDALS RVDT1', statuses: ['XXXXXX', '-0.13', '-0.05', 'XXXXXX'], hasBorderBottom: false },
    { parameter: 'RUD PEDALS RVDT2', statuses: ['XXXXXX', '-0.14', '-0.05', 'XXXXXX'], hasBorderBottom: false },
    { parameter: 'SBH RVDT1', statuses: ['XXXXXX', '-20.13', '-20.10', 'XXXXXX'], hasBorderBottom: false },
    { parameter: 'SBH RVDT2', statuses: ['XXXXXX', '-19.99', '-20.00', 'XXXXXX'], hasBorderBottom: false },
    { parameter: 'YAW TRIM LNOB RVDT', statuses: ['XXXXXX', '0.02', '0.09', 'XXXXXX'] },
    { parameter: '', statuses: ['-degrees-'], customSpan: 4, alignCenter: true, hasBorderBottom: false },
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
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270128'} right={['Select done to continue']} />}
    >
      <DataHeader left={'flight deck rvdt status'} right={'1/1'} />
      <Legend title="true" title2="false" />
      <DynamicTable
        data={data}
        mainHeaders={mainHeaders}
        secondaryHeaders={secondaryHeaders}
        hasBorder
        thirdHeaders={thirdHeaders}
      />
    </DefaultLayout>
  )
}

export default DeckRvdtStatus
