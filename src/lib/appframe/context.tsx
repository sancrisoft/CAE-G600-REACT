import { createContext, useContext } from 'react'

export interface AppFrameContextType {
  maintenanceSwitch: boolean
  updateMaintenanceSwitch: () => void
}

export const AppFrameContext = createContext<AppFrameContextType> ({
  maintenanceSwitch: false,
  updateMaintenanceSwitch: () => {
    throw new Error('updateMaintenanceSwitch method not implemented')
  },
})

export const useAppFrameContext = () => useContext(AppFrameContext)