import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const IrsStatus3 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETERS', alignLeft: true },
    { title: 'IRU3A', customSpan: 1, hasBorderBottom: false },
    { title: 'IRU3B', customSpan: 1, hasBorderBottom: false },
  ];
  const secHedaers = [{ title: 'IOGM1' }, { title: 'IOGM4' }];

  const data = [
    {
      parameter: 'PITCH ANGLE - DEG',
      statuses: ['XXXXXX', 'XXXXXX'],
      alignRight: true,
    },
    {
      parameter: 'ROLL ANGLE - DEG',
      statuses: ['XXXXXX', 'XXXXXX'],
      alignRight: true,
    },
    {
      parameter: 'MAG HDG - DEG',
      statuses: ['XXXXXX', 'XXXXXX'],
      alignRight: true,
    },
    {
      parameter: 'TRUE HDG - DEG',
      statuses: ['XXXXXX', 'XXXXXX'],
      alignRight: true,
    },
    {
      parameter: 'TIME IN NAV - MIN',
      statuses: ['XXXX', 'XXXX'],
      alignRight: true,
    },
    {
      parameter: 'POS LAT - DEG',
      statuses: ['XXXXXX', 'XXXXXX'],
      alignRight: true,
    },
    {
      parameter: 'POS LONG - DEG',
      statuses: ['XXXXXX', 'XXXXXX'],
      alignRight: true,
    },
    {
      parameter: 'LAT ACCL - G*S',
      statuses: ['XXXXXX', 'XXXXXX'],
      alignRight: true,
    },
    {
      parameter: 'LONG ACCL - G*S',
      statuses: ['XXXXXX', 'XXXXXX'],
      alignRight: true,
    },
    {
      parameter: 'NORM ACCL - G*S',
      statuses: ['XXXXXX', 'XXXXXX'],
      alignRight: true,
    },
  ];
  const data2 = [
    {
      parameter: 'irs3a alignment',
      statuses: ['XXXXXXXXXXXXXXXXX'],
    },
    {
      parameter: 'irs3b alignment',
      statuses: ['XXXXXXXXXXXXXXXXXXXXXXX'],
    },
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
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => {
        navigate(-1);
      },
    },

    {
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'344203'} right={['select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'irs status'} right={'3/3'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secHedaers} hasHeightHeader={false} />
      <DynamicTable data={data2} hasMarginTop />
    </DefaultLayout>
  );
};

export default IrsStatus3;
