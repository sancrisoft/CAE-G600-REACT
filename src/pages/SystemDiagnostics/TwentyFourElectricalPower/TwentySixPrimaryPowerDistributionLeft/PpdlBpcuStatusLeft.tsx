import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlBpcuStatusLeft = () => {
  const navigate = useNavigate();

  const tableHeader = [
    { title: 'L BPCU FAULT FLAGS' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const data = [
    {
      parameter: 'L EPS FAIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'L PDB FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'R BPCU COMMS FAIL',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'L EPS WARNING',
      status1: true,
      status2: true,
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
      text: 'fwd',
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlbpcustatusleft1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'245001'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'ppdl bpcu status'} right={'1/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlBpcuStatusLeft
