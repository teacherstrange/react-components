import clsx from 'clsx'
import React, {
  ReactNode,
  useState,
  useRef,
  useCallback,
  Children,
  cloneElement,
  ReactElement,
  useEffect
} from 'react'
import { useClickAway, useKey } from 'react-use'
import { Dropdown as DropdownClass, Trigger, PopUp } from './dropdown.module.css'
import { useUIDSeed } from 'react-uid'

export type DropdownProps = PropsWithClass & {
  children: ReactNode;
  trigger: ReactNode;
  fullWidth?: boolean;
  align?: 'left' | 'center' | 'right';
}

export const Dropdown: React.FC<DropdownProps> = ({
  className,
  children,
  trigger,
  fullWidth,
  align = 'left',
  ...props
}) => {
  const DropDownRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const seedID = useUIDSeed()

  const handleOpen = useCallback(
    (isOpen: boolean) => () => {
      setOpen(isOpen)
    },
    []
  )

  useKey('Escape', handleOpen(false))
  useClickAway(DropDownRef, handleOpen(false))

  useEffect(() => {
    const keyupHandler = (event: KeyboardEvent) => {
      if (!DropDownRef.current?.contains(event.target as Node) && event.key !== 'Enter') {
        handleOpen(false)()
      }
    }
    document.body.addEventListener('keyup', keyupHandler)
    return () => {
      document.body.removeEventListener('keyup', keyupHandler)
    }
  }, [handleOpen])

  return (
    <div
      className={clsx(DropdownClass, className)}
      data-dropdown-align={align}
      data-dropdown-fullwidth={fullWidth}
      ref={DropDownRef}
      {...props}
    >
      <div className={Trigger}>
        {Children.map(trigger, (child: ReactElement) => cloneElement(
          child,
          {
            onClick: handleOpen(!open),
            'aria-haspopup': 'true',
            'aria-controls': seedID('dropdown-menu'),
            'aria-expanded': open
          }
        ))}
      </div>
      {open && (
        <div className={PopUp}>
          {Children.map(children, (child: ReactElement) => cloneElement(
            child,
            {
              id: seedID('dropdown-menu')
            }
          ))}
        </div>
      )}
    </div>
  )
}
