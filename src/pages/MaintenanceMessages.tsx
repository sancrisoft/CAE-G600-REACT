import { useEffect } from 'react'
import DefaultLayout from '../components/Layout'
import Title from '../components/Title'
import Menu from '../components/Menu'
import Button from '../components/Button'

const MaintenanceMessagesPage = () => {
  useEffect(() => {
    sessionStorage.clear()
  }, [])

  return (
    <DefaultLayout>
      <Title variant="secondary">Maintenance Messages</Title>
      <Menu>
        <Button href="/maintenance-messages/active">Active</Button>
        <Button href="/maintenance-messages/present-leg">Present Leg</Button>
        <Button href="/maintenance-messages/historical-by-date">Historical By Date</Button>
        <Button href="/maintenance-messages/historical-by-ata">Historical By ATA</Button>
        <Button href="/">Return To Main Menu</Button>
      </Menu>
    </DefaultLayout>
  )
}

export default MaintenanceMessagesPage