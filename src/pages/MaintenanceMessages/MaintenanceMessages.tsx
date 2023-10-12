import { useEffect } from 'react'
import DefaultLayout from '../../components/Layout'
import Title from '../../components/Title'
import Menu from '../../components/Menu'
import Button from '../../components/Button'

const MaintenanceMessagesPage = () => {
  useEffect(() => {
    sessionStorage.clear()
  }, [])

  return (
    <DefaultLayout>
      <Title>Maintenance Messages</Title>
      <Menu>
        <Button href="/maintenancemessages/active">Active</Button>
        <Button href="/maintenancemessages/presentleg">Present Leg</Button>
        <Button href="/maintenancemessages/historicalbydate">Historical By Date</Button>
        <Button href="/maintenancemessages/historicalbyata">Historical By ATA</Button>
        <Button href="/maintenancemessages/timeorderedviews">Time ordered views</Button>
        <Button href="/">Return To Main Menu</Button>
      </Menu>
    </DefaultLayout>
  )
}

export default MaintenanceMessagesPage