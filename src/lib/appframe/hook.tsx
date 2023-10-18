import { useContext } from 'react'
import { AppFrameContext } from './context'

export function useAppFrameStatus() {
  const { maintenanceSwitch, updateMaintenanceSwitch } = useContext(AppFrameContext)

  return { maintenanceSwitch, updateMaintenanceSwitch }
}
