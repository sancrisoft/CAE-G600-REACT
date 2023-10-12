import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const TQAStatus = () => {
  const navigate = useNavigate();
  const data = [
    {
      parameter: 'LH SERVO ACTIVE',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'RH SERVO ACTIVE',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LH LEVER INT SERVO FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'RH LEVER INT SERVO FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

  const tableHeader = [
    { title: 'PARAMETER' },
    { title: 'IOGM1' },
    { title: 'IOGM4' },
  ]

  const dataTable = [
    { parameter: 'lh lever magnitude (deg/sec)', status1: '0.00', status2: '0.00' },
    { parameter: 'rh lever magnitude (deg/sec)', status1: '0.00', status2: '0.00' },
  ]

  const mainHeaders = [{ title: 'parameter' }, { title: 'IOGM1' }, { title: 'IOGM4' }]

  const dataTableAll = [
    { parameter: 'L TRA', statuses: ['-0.04', '-0,04', '-0.04', '-0,04'] },
    { parameter: 'R TRA', statuses: ['0.18', '0.18', '0.18', '0.18'] },
  ]

  const mainHeadersAll = [
    { title: 'parameter' },
    { title: 'IOGM1' },
    { title: 'IOGM2' },
    { title: 'IOGM3' },
    { title: 'IOGM4' },
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
      text: 'FWD',
      href: '/systemdiagnostics/twentytwoautoflight/thirtythreethrottlequadrantassembly/tqastatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'223301'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'tqa status'} right={'1/3'} />
      <Legend title="inactive" title2="active" />
      <StatusTable data={dataTable} tableHeader={mainHeaders} />
      <StatusTable data={dataTableAll} tableHeader={mainHeadersAll} />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default TQAStatus
