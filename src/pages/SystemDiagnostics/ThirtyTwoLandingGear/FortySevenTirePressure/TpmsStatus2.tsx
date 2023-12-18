import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import StatusTable from '../../../../components/StatusTable';
import Legend from '../../../../components/Legend';

const TpmsStatus2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM4' }];
  const data = [
    { parameter: 'ARINC INPUT FAULT', status1: true },
    { parameter: 'PBIT PIN PROGRAMMING INPUT FAULT', status1: true },
  ];

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
      text: 'Prev',
      onClick: () => {
        navigate(-1);
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'DONE',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'324902'} right={['Select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'tpms fault status screen 2'} right={'2/2'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle/>
    </DefaultLayout>
  );
};

export default TpmsStatus2;
