import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'
import Button from '../Button'
import Title from '../Title'
import styles from './Accordion.module.scss'
import { useLocation } from 'react-router-dom'

interface IAccordionProps {
  items: AccordionItem[]
  subtitle?: string
  subtitleRight?: string
}

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

const Accordion: FC<IAccordionProps> = ({ items, subtitle, subtitleRight }) => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({})
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    const savedExpandedItems = sessionStorage.getItem(`count_${path}`)
    if (savedExpandedItems) {
      setExpandedItems(JSON.parse(savedExpandedItems))
    }
    setLoading(false)
  }, [path])

  useEffect(() => {
    if (Object.keys(expandedItems).length > 0) sessionStorage.setItem(`count_${path}`, JSON.stringify(expandedItems))
  }, [expandedItems, path])

  const renderItem = (item: AccordionItem, index: number, parentIdentifier = '', hasChildren = false) => {
    const identifier = `${parentIdentifier}_${index}`
    const isExpanded = expandedItems[identifier] || false
    const textTransform = item.textLowerCase ? styles.NoTextTransform : ''
    const color = item.color === 'cyan' ? styles.Cyan : item.color === 'green' ? styles.Green : ' '
    const containerClass = item.customWidth ? styles.GridContainer : styles.ButtonContainer

    const toggleItem = (identifier: string) => {
      setExpandedItems((prevExpandedItems) => {
        const newExpandedItems = { ...prevExpandedItems }
        const isExpanded = prevExpandedItems[identifier]

        if (isExpanded) {
          // Collapse the current item and its children recursively
          const itemKeys = Object.keys(newExpandedItems)
          itemKeys.forEach((itemKey) => {
            if (itemKey.startsWith(identifier)) {
              newExpandedItems[itemKey] = false
            }
          })
        } else if (hasChildren) {
          // Expand the current item
          newExpandedItems[identifier] = true
        }

        return newExpandedItems
      })
    }

    const toggle = () => toggleItem(identifier)
    const delayedToggle = () => {
      if (isExpanded) {
        toggle()
      } else {
        if (item.delayOpen) item.delayOpen()
        setTimeout(() => {
          toggle()
          if (item.close) item.close()
        }, 5000)
      }
    }

    return !item.hide ? (
      <div key={identifier} className={`${styles.AccordionItem} ${color}`}>
        {item.href ? (
          <Button className={`${styles.AccordionButton} ${textTransform}`} href={item.href} link>
            {item.text}
          </Button>
        ) : (
          <div>
            <Button
              className={`${styles.AccordionButton} ${textTransform} ${containerClass}`}
              onClick={item.onClick ? item.onClick : item.delayOpen ? delayedToggle : toggle}
              link
            >
              {item.text}
              <div className={styles.ActiveContainer}>{item.secondColumn && item.secondColumn}</div>
            </Button>
          </div>
        )}
        <div className={clsx(styles.AccordionContent, isExpanded ? styles.expanded : styles.collapsed)}>
          {item.children &&
            item.children.map((child, childIndex) => renderItem(child, childIndex, identifier, !!child.children))}
        </div>
      </div>
    ) : null
  }

  return !loading ? (
    <>
      <div className={styles.SubtitleContainer}>
        <Title variant="secondary" align="left" size="subtitle">
          {subtitle}
        </Title>
        {subtitleRight && (
          <Title variant="secondary" size="subtitle">
            {subtitleRight}
          </Title>
        )}
      </div>
      <div className={styles.Accordion}>{items.map((item, index) => renderItem(item, index, '', !!item.children))}</div>
    </>
  ) : null
}

export default Accordion
