import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import CustomTable from '../../../../components/CustomTable';

const Egpvm1ApmRaasConfigOpt10 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'APM 2 EGPWM OPTIONS' }, { title: 'NIC 4', customSpan: 1 }];

  const data = [
    {
      row1: 'RAAS INHIBIT TYPE',
      row2: 'INDEPENTDENT RAAS INHIBIT',
    },
    {
      row1: 'IN AIR ADVISORY VOLUME',
      row2: '~70% OF FULL COLUME',
    },
    {
      row1: 'ON GROUND ADVISORY VOLUME',
      row2: '~70% OF FULL COLUME',
    },
    {
      row1: 'ON RUNWAY ADVISORY VOLUME',
      row2: '12DB BELOW NORMAL (/25%EGPWS)',
    },
    {
      row1: 'RUNWAY  END ADVISORY VOLUME',
      row2: '12DB BELOW NORMAL (/25%EGPWS)',
    },
    {
      row1: 'DIST REMAIN ADVISORY VOLUME',
      row2: '~25% OF FULL COLUME',
    },
    {
      row1: 'RTO AND LONG LANDING DREM VOLUME',
      row2: '12DB BELOW NORMAL (/25%EGPWS)',
    },
    {
      row1: 'EXTENDED HOLDING ADVISORY VOLUME',
      row2: '12DB BELOW NORMAL (/25%EGPWS)',
    },
    {
      row1: 'ON TAXWAY ADVISORY VOLUME',
      row2: '~25% OF FULL COLUME',
    },
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
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => {
        navigate(-1);
      },
    },
    {
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt11',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'344612'} right={['select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'eg pwm apm raas config options'} right={'10/20'} />
      <CustomTable data={data} headers={mainHeaders} />
    </DefaultLayout>
  );
};

export default Egpvm1ApmRaasConfigOpt10;
