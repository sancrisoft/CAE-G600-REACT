import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const LgCisMaintModeStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'LDG MAINT SERVICE PNL' }, { title: 'CL1' }, { title: 'CL2' }];
  const data = [
    { parameter: 'LGCIS MM SELECTED', status1: true, status2: true },
    { parameter: 'MM WOW ON GROUND SELECTED', status1: false, status2: false },
    { parameter: 'MY WOW IN AIR SELECTED', status1: false, status2: false },
    { parameter: 'MM NLG DOOR OPEN SELECTED', status1: false, status2: false },
    { parameter: 'MM NLG DOOR CLOSED SEL', status1: false, status2: false },
    { parameter: 'MM MLG DOOR OPEN SELECTED', status1: false, status2: false },
    { parameter: 'MM MLG DOOR CLOSED SEL', status1: false, status2: false },
    { parameter: 'MM NLG EXTEND SELECTED', status1: false, status2: false },
    { parameter: 'MM NLG RETRACT SELECTED', status1: false, status2: false },
    { parameter: 'MM MLG EXTEND SELECTED', status1: false, status2: false },
    { parameter: 'MM MLG RETRACT SELECTED', status1: false, status2: false },
    { parameter: 'NOSE WHEEL CENTERED', status1: false, status2: false },
  ];

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => {
        navigate(-1);
      },
    },
    {
      text: 'DONE',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323001'} right={['Select done to continue']} />}>
      <DataHeader left={'LGCIS maint mode status'} right={'1/1'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle />
    </DefaultLayout>
  );
};

export default LgCisMaintModeStatus;
