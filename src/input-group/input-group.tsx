import clsx from 'clsx'
import React, { Children, cloneElement, forwardRef, ReactElement, ReactNode } from 'react'
import { Stack, Text } from '../'
import { useUIDSeed } from 'react-uid'
import { End, InputField, Start, InputGroup as InputGroupClass } from './input-group.module.css'

export type InputGroupProps = PropsWithClass & {
  input: ReactNode;
  end?: ReactNode;
  start?: ReactNode;
  label?: ReactNode;
  dimension?: 'small' | 'big' | 'regular';
}

export const InputGroup = forwardRef<HTMLFieldSetElement, InputGroupProps>(({
  className,
  input,
  end,
  start,
  label,
  dimension = 'regular',
  ...props
}, forwardedRef) => {
  const uid = useUIDSeed()

  return (
    <Stack
      rowGap={4}
      horizontalAlign="stretch"
      verticalAlign="start"
      fill={false}
    >
      {label && <Text as="label" size={dimension === 'small' ? 14 : 16} htmlFor={uid('field')}>{label}</Text>}
      <Stack
        as="fieldset"
        direction="row"
        verticalAlign="start"
        horizontalAlign="start"
        fill={false}
        inline
        ref={forwardedRef}
        className={clsx(InputGroupClass, className)}
        data-input-group-has-end={Boolean(end)}
        data-input-group-has-start={!!start}
        {...props}
      >
        <div className={Start}>
          {Children.map(start, (child: ReactElement) => cloneElement(
            child,
            {
              dimension
            }
          ))}
        </div>
        <div className={InputField}>
          {Children.map(input, (child: ReactElement) => cloneElement(
            child,
            {
              id: uid('field'),
              dimension
            }
          ))}
        </div>
        <div className={End}>
          {Children.map(end, (child: ReactElement) => cloneElement(
            child,
            {
              dimension
            }
          ))}
        </div>
      </Stack>
    </Stack>
  )
})
