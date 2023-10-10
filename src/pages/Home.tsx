import React, { useEffect, PropsWithChildren } from 'react'
import Button from '../components/Button'
import DefaultLayout from '../components/Layout'
import Menu from '../components/Menu'
import Title from '../components/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './Default.module.scss'

const HomePage = () => {
  useEffect(() => {
    sessionStorage.clear()
  }, []);


  return (
    <DefaultLayout>
      <Title variant="secondary">CMC Main mENU</Title>
      <Menu>
        <Button style={{color: "white"}} href="/maintenancemessages">Maintenance Messages</Button>
        <Button href="/systemdiagnostics">System Diagnostics</Button>
        <Button href="/extendedmaintenance">Extended Maintenance</Button>
        <Button href="/dataloader">Data Loader</Button>
      </Menu>
    </DefaultLayout>)
}

export default HomePage