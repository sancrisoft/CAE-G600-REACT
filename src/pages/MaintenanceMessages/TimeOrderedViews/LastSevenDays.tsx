import { useRef } from 'react'
import Footer from '../../../components/Footer'
import DefaultLayout from '../../../components/Layout'
import { NavBarButtonType } from '../../../components/NavBar'
import Table from '../../../components/Table'
import Title from '../../../components/Title'

const LastSevenDays = () => {
  const tableRef = useRef<HTMLTableElement>(null)

  const data = [
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 1 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-CPLT SIDESTICK BUS DATA FAIL',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-PLT SIDESTICK BUS DATA FAL',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-CPLT SIDESTICK BUS DATA FAIL',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-IRU 3 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-IRU 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-IRU 1 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'ON',
      time: '01:16:54',
      effect: 'FCS NO DISPATCH',
      alert: 'CAUTION',
      last: 'PFT',
    },
    {
      status: 'ON',
      time: '01:16:54',
      effect: 'FCS ALTERNATE MODE (U)',
      alert: 'CAUTION',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 3 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 1 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-IRU 3 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-IRU 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-IRU 1 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'ON',
      time: '01:16:54',
      effect: 'FCS ALTERNATE MODE (U)',
      alert: 'CAUTION',
      last: 'PFT',
    },
    {
      status: 'ON',
      time: '01:16:54',
      effect: 'FCC 1A - 2B FAIL (U)',
      alert: 'CAUTION',
      last: 'PFT',
    },
    {
      status: 'ON',
      time: '01:16:54',
      effect: 'AP 1-2 FAIL',
      alert: 'CAUTION',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 3 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 1 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-IRU 3 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-IRU 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-IRU 1 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'ON',
      time: '01:16:54',
      effect: 'AP 1-2 FAIL',
      alert: 'CAUTION',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 3 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 1 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-IRU 3 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-IRU 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-IRU 1 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'ON',
      time: '01:16:54',
      effect: 'AP 1-2 FAIL',
      alert: 'CAUTION',
      last: 'PFT',
    },
    {
      status: 'ON',
      time: '01:17:32',
      effect: 'L-R FUEL LEVEL LOW',
      alert: 'CAUTION',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'L SIDESTICK PRI-FCC 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'L SIDESTICK PRI-STICK CBIT FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-REU 6/RUDDER EBMCE BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-EBMCE 7/FCC 2 BUS RX FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-REU 8/R ELEV EBMCE BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-EBMCE 8R ELEV EBMCE BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-EBMCE 6/FCC 1 BUS RX FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-REU 7/L ELEV EBMCE BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-EBMCE 5/FCC 2 BUS RX FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-REU 5/UPS POWER BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-REU 4/UPS POWER BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-REU 3/UPS POWER BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-REU 2/UPS POWER BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-REU 1/UPS POWER BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-REU 2/ROB SPLR EBMCE BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-EBMCE 4/FCC 2 BUS RX FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-REU 1/LOB SPLR EBMCE BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-EBMCE 3/FCC 2 BUS RX FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-REU 4/R AILERON EBMCE BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-EBMCE 2/FCC 1 BUS RX FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-REU 3/L AILERON EBMCE BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCS-EBMCE 1/FCC 1 BUS RX FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 3 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-IRU 1 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC2-CPLT SIDESTICK BUS DATA FAIL',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-PLT SIDESTICK BUS DATA FAL',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      time: '01:16:54',
      effect: 'FCC1-CPLT SIDESTICK BUS DATA FAIL',
      alert: '',
      last: 'PFT',
    },
  ]

  const scrollUp = () => {
    if (tableRef.current) {
      tableRef.current.scrollTop = 0
    }
  }

  const scrollDown = () => {
    if (tableRef.current) {
      tableRef.current.scrollTop = tableRef.current.scrollHeight
    }
  }

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'Page Up',
      onClick: () => scrollUp(),
      disabled: false,
      position: 4,
    },
    {
      text: 'Page Down',
      onClick: () => scrollDown(),
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons}>
      <Title variant="secondary">Active Main Msg / Flight Deck Effects</Title>
      <Table data={data} tableRef={tableRef} />
      <Footer>Monitor Warn Function 1 Selected</Footer>
    </DefaultLayout>
  )
}

export default LastSevenDays
