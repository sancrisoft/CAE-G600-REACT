import { useEffect, useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import DefaultLayout from "../components/Layout";
import Menu from "../components/Menu";
import Title from "../components/Title";
import DisclaimerModal from '../components/DisclaimerModal'

let popUpShown = false;

const HomePage = () => {
  const [isOpen, setIsopen] = useState(false)
  useEffect(() => {
    sessionStorage.clear()
    if (!popUpShown) {
      setIsopen(true);
    }
  }, [])

  const closeModal = () => {
    setIsopen(false);
    popUpShown = true;
  }

  return (
    <DefaultLayout footer={<Footer>Fault History Database Currently&nbsp;XXX&nbsp;%Full</Footer>}>
      <Title>CMC Main mENU</Title>
      <Menu>
        <Button href="/maintenancemessages">Maintenance Messages</Button>
        <Button href="/systemdiagnostics">System Diagnostics</Button>
        <Button href="/extendedmaintenance"> Extended Maintenance</Button>
        <Button>Print Destination Setup</Button>
      </Menu>
      <DisclaimerModal isOpen={isOpen} onClose={closeModal} />
    </DefaultLayout>
  );
};

export default HomePage