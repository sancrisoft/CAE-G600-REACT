import Button from "../components/Button";
import Footer from "../components/Footer";
import DefaultLayout from "../components/Layout";
import Menu from "../components/Menu";
import Title from "../components/Title";

const HomePage = () => {
  return (
    <DefaultLayout footer={<Footer>Fault History Database Currently&nbsp;XXX&nbsp;%Full</Footer>}>
      <Title>CMC Main mENU</Title>
      <Menu>
        <Button href="/maintenancemessages">Maintenance Messages</Button>
        <Button href="/systemdiagnostics">System Diagnostics</Button>
        <Button>Extended Maintenance</Button>
        <Button>Print Destination Setup</Button>
      </Menu>
    </DefaultLayout>
  );
};

export default HomePage