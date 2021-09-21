import React, {
  CSSProperties,
  DetailsHTMLAttributes, forwardRef,
  ReactNode, useCallback, useState
} from 'react'
import clsx from 'clsx'
import { Disclosure as DisclosureClass, Summary, ExpandIcon, Content } from './disclosure.module.css'
import { Icon } from '../icon'
import { Text, TextProps } from '../text'
import { motion } from 'framer-motion'

export type DisclosureProps = DetailsHTMLAttributes<HTMLDetailsElement> & {
  open?: boolean;
  summary: ReactNode;
  padding?: boolean;
  contentMaxHeight?: string;
  dimension?: 'small' | 'regular' | 'big';
  iconPosition?: 'left' | 'right';
  expandable?: boolean;
}

export const Disclosure = forwardRef<HTMLDetailsElement, DisclosureProps>(({
  children,
  open = false,
  padding = true,
  className,
  summary,
  contentMaxHeight,
  dimension = 'regular',
  iconPosition = 'left',
  expandable = true,
  style,
  ...props
}, forwardedRef) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleOpen = useCallback(
    () => (event: any) => {
      event.preventDefault()
      expandable && setIsOpen(!isOpen)
    },
    [isOpen, expandable]
  )

  const dynamicStyle: CSSProperties = {
    '--maxHeight': contentMaxHeight
  }

  const sizes = {
    small: {
      summary: 16
    },
    regular: {
      summary: 18
    },
    big: {
      summary: 22
    }
  }

  const renderContent = useCallback(
    () => (
      <motion.div
        className={Content}
        data-disclosure-padding={padding}
        data-disclosure-height={Boolean(contentMaxHeight)}
        animate={isOpen ? { y: 5, opacity: 1 } : { y: 0, opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.1 }}
        initial={false}
      >
        {children}
      </motion.div>
    ),
    [children, contentMaxHeight, isOpen, padding]
  )

  return (
    <details
      style={{ ...dynamicStyle, ...style }}
      className={clsx(DisclosureClass, className)}
      data-disclosure-icon-position={iconPosition}
      data-disclosure-dimension={dimension}
      data-disclosure-expandable={expandable}
      aria-expanded={isOpen ? 'true' : 'false'}
      open={isOpen}
      ref={forwardedRef}
      {...props}
    >
      <Text
        as="summary"
        onClick={handleOpen()}
        className={Summary}
        fluid={false}
        aria-expanded={isOpen}
        tabIndex={!expandable ? -1 : 0}
        size={dimension ? sizes[dimension].summary as TextProps['size'] : undefined}
        weight="bold"
        role="button"
      >
        {summary}
        {expandable && (
          <Icon
            className={ExpandIcon}
            name="chevron-right"
            dimension={dimension !== 'big' ? 16 : 24}
          />
        )}
      </Text>
      {renderContent()}
    </details>
  )
})

Disclosure.displayName = 'Disclosure'
