import { useRef } from 'react'
import FlightDetail from '../../../components/FlightDetail'
import DefaultLayout from '../../../components/Layout'
import { NavBarButtonType } from '../../../components/NavBar'
import Table from '../../../components/Table'
import Title from '../../../components/Title'

const LastFourteenDays = () => {
  const tableRef = useRef<HTMLTableElement>(null)

  const data = [
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'R SIDESTICK SEC-CBIT FORCE SENSOR',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'R SIDESTICK SEC-FCC 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'R SIDESTICK SEC-FCC 1 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'R SIDESTICK PRI-FCC 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'R SIDESTICK PRI-FCC 1 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'R SIDESTICK PRI-CBIT FORCE SENSOR',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'L SIDESTICK SEC-CSDL 2 BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'LSIDESTICK SEC-CHANNEL CBIT FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'LSIDESTICK SEC-STICK CBIT FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'LSIDESTICK SEC-CBIT INLINE',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'LSIDESTICK SEC-CBIT CLAW',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'LSIDESTICK SEC-CSDL3 BUS FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'LSIDESTICK PRI-CBIT FORCE SENSOR',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'LSIDESTICK PRI-FCC 1 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'LSIDESTICK PRI-FCC 2 NO DATA',
      alert: '',
      last: 'PFT',
    },
    {
      status: '',
      date: '',
      time: '01:16:54',
      effect: 'L SIDESTICK PRI-STICK CBIT FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'ON',
      date: '04/21',
      time: '01:16:54',
      effect: 'IRIDIUM FAIL',
      alert: 'ADVISORY',
      last: 'PFT',
    },
    {
      status: 'ON',
      date: '04/21',
      time: '01:16:54',
      effect: '60 HZ MPT FAIL',
      alert: 'ADVISORY',
      last: 'PFT',
    },
    {
      status: 'ON',
      date: '04/21',
      time: '01:16:54',
      effect: 'TPMS MAINTENANCE REOD',
      alert: 'ADVISORY',
      last: 'PFT',
    },
    {
      status: 'OFF',
      date: '04/21',
      time: '01:16:55',
      effect: 'CMC-PRNT PWR/PRNT/WIRING FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'ON',
      date: '04/21',
      time: '01:16:58',
      effect: 'CMC-PRNT LAN NETWORK FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'OFF',
      date: '04/21',
      time: '01:17:03',
      effect: 'CMC-PRC8 MODULE FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'OFF',
      date: '04/21',
      time: '01:17:07',
      effect: 'CMC-AHTM PATH1A/WIRING FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'OFF',
      date: '04/21',
      time: '01:17:10',
      effect: 'CMC-PRNT LAN NETWORK FAULT',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'OFF',
      date: '04/21',
      time: '01:17:14',
      effect: 'FMS1-PROC8/[CLOCKSET1]/FMS1/WRG FLT',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'OFF',
      date: '04/21',
      time: '01:17:14',
      effect: 'FMS2-PROC8/[CLOCKSET1]/FMS2/WRG FLT',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'OFF',
      date: '04/21',
      time: '01:17:14',
      effect: 'FMS3-PROC8/[CLOCKSET1]/FMS3/WRG FLT',
      alert: '',
      last: 'PFT',
    },
    {
      status: 'OFF',
      date: '04/21',
      time: '01:17:27',
      effect: 'CHECK CMC',
      alert: 'ADVISORY',
      last: 'PFT',
    },
    {
      status: 'ON',
      date: '04/21',
      time: '01:17:32',
      effect: 'L-R FUEL LEVEL LOW',
      alert: 'CAUTION',
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
      <Title variant="secondary">Stored Main Msg / Flight Deck Effects</Title>
      <FlightDetail left="April 04, 2022 to April 18, 2023" right="14 Days" />
      <Table data={data} tableRef={tableRef} />
    </DefaultLayout>
  )
}

export default LastFourteenDays
