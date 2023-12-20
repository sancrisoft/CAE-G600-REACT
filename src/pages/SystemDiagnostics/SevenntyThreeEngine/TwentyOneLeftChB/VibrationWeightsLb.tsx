import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import Text from '../../../../components/Text';
import TableList from '../../../../components/TableList';

const VibrationWeightsLb = () => {
  const navigate = useNavigate();

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
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'773106'} right={['select done to continue']} />}>
      <DataHeader left={'evm: read weight configuration'} right={'1/1'} />
      <Text text="left engine" indentSize="s" />
      <TableList data={[{ columns: ['DATE:', '0 0/ ', '0 0/ ', '  0 0'] }, { columns: ['TIME', '0:', '0:', '0'] }]} halfWidth />
      <TableList
        marginTop="s"
        columns={['HOLE', 'WEIGHT', 'HOLE', 'WEIGHT']}
        data={[
          { columns: ['1', '0', '10', '0'] },
          { columns: ['2', '0', '11', '0'] },
          { columns: ['3', '0', '12', '0'] },
          { columns: ['4', '0', '13', '0'] },
          { columns: ['5', '0', '14', '0'] },
          { columns: ['6', '0', '15', '0'] },
          { columns: ['7', '0', '16', '0'] },
          { columns: ['8', '0', '17', '0'] },
          { columns: ['9', '0', '18', '0'] },
        ]}
      />
      <TableList marginTop="l" data={[{ columns: ['0 *', '0.0 GRAMS', '', ''] }, { columns: ['1 * CL10', '0.0 GRAMS'] }, { columns: ['2 * CL11', '0.0 GRAMS'] }, { columns: ['3 * CL12', '0.0 GRAMS'] }]} />
    </DefaultLayout>
  );
};

export default VibrationWeightsLb;
