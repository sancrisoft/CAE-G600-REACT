import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react'

export interface AccordionItem {
  text: string
  href?: string
  children?: AccordionItem[]
  textLowerCase?: boolean
  hide?: boolean
  secondColumn?: string
  color?: 'cyan' | 'green' | string
  delayOpen?: () => void
  close?: () => void
  onClick?: () => void
  customWidth?: boolean
}

interface AccordionContextValue {
  expandedItems: { [key: string]: boolean }
  setExpandedItems: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>
  loading: boolean
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

export const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('useAccordionContext must be used within an AccordionProvider')
  }
  return context
}

export interface AccordionProviderProps extends PropsWithChildren {
  pageIdentifier: string
  hasAccordion: boolean
}

export const AccordionProvider: React.FC<AccordionProviderProps> = ({ children, pageIdentifier, hasAccordion }) => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (hasAccordion) {
      // Load the expanded items state from local storage when the context mounts
      const storedExpandedItems = sessionStorage.getItem(`expandedItems_${pageIdentifier}`)
      if (storedExpandedItems) {
        setExpandedItems(JSON.parse(storedExpandedItems))
      }
      setLoading(false)
    }
  }, [pageIdentifier, hasAccordion])

  useEffect(() => {
    if (hasAccordion) {
      // Save the expanded items state to local storage whenever it changes
      sessionStorage.setItem(`expandedItems_${pageIdentifier}`, JSON.stringify(expandedItems))
    }
  }, [expandedItems, pageIdentifier, hasAccordion])

  return (
    <AccordionContext.Provider value={{ expandedItems, setExpandedItems, loading }}>
      {children}
    </AccordionContext.Provider>
  )
}
