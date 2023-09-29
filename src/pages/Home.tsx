import Button from "../components/Button";
import DefaultLayout from "../components/Layout";
import Menu from "../components/Menu";
import Title from "../components/Title";

const HomePage = () => {
  return (
    <DefaultLayout>
      <Title variant="secondary">CMC Main mENU</Title>
      <Menu>
        <Button href="/maintenance-messages">Maintenance Messages</Button>
        <Button href="/system-diagnostics">System Diagnostics</Button>
        <Button href="/extended-maintenance">Extended Maintenance</Button>
        <Button href="/data-loader">Data Loader</Button>
      </Menu>
    </DefaultLayout>
    
  );
};

export default HomePage