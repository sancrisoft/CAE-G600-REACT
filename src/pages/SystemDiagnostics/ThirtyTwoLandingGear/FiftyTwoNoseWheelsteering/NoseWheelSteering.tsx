import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import StatusTable from '../../../../components/StatusTable';

const NoseWheelSteering = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'PARAMETER - NWSCU' }, { title: 'IOGM1' }, { title: 'IOGM4' }];
  const data1 = [
    { parameter: 'NOSE WHEEL POS', status1: '-0.69 DEG', status2: '-0.69 DEG' },
    { parameter: 'TILLER HANDLE POS', status1: '-0.16 DEG', status2: '-0.16 DEG' },
    { parameter: 'NWSCU RUD PDL POS', status1: '-0.01 IN', status2: '-0.01 IN' },
  ];

  const tableHeader2 = [{ title: 'PARAMETER - FCC' }, { title: 'IOGM1' }];
  const data2 = [
    { parameter: 'FCC1 PEDAL POSITION', status1: '-0.01 IN' },
    { parameter: 'FCC2 PEDAL POSITION', status1: '-0.01 IN' },
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
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'325201'} right={['Select done to continue']} />}>
      <DataHeader left={'Nose wheel position'} right={'1/1'} />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  );
};

export default NoseWheelSteering;
