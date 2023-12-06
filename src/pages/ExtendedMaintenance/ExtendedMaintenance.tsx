import { useEffect } from 'react'
import DefaultLayout from '../../components/Layout'
import Title from '../../components/Title'
import Menu from '../../components/Menu'
import Button from '../../components/Button'

const ExtendedMaintenance = () => {
  useEffect(() => {
    sessionStorage.clear()
  }, [])

  return (
    <DefaultLayout>
      <Title>Extended Maintenance</Title>
      <Menu>
      <Button>Storage disabled, press to enable</Button>
      <Button href="/extendedmaintenance/membersystemstatus">member system status</Button>
      <Button > File  transfer from aircraft</Button>
      <Button >configuration</Button>
      <Button >reports</Button>
      <Button >dataloader</Button>
      <Button href="/">return to main menu</Button>
      </Menu>
    </DefaultLayout>
  )
}

export default ExtendedMaintenance