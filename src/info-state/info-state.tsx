import React, { forwardRef, ReactNode } from 'react'
import { IconNames } from '../icons/types'
import { Stack, StackProps, Icon, Title, Text } from '../'
import { IconWrapper, Image } from './info-state.module.css'

export type InfoStateProps = PropsWithClass & {
  title: ReactNode;
  icon?: IconNames;
  image?: string;
  direction?: StackProps['direction'];
  iconColor?: 'gray' | 'cyan' | 'green' | 'purple' | 'yellow' | 'red' | 'blue';
  actions?: ReactNode;
}

export const InfoState = forwardRef<HTMLDivElement, InfoStateProps>(({
  className,
  children,
  title,
  icon,
  image,
  direction = 'column',
  iconColor = 'blue',
  actions,
  ...props
}) => {
  const isHorizontal = direction === 'row'

  return (
    <Stack
      direction={direction}
      rowGap={24}
      columnGap={32}
      className={className}
      horizontalAlign={isHorizontal ? 'start' : 'center'}
      verticalAlign={(isHorizontal && image) ? 'center' : 'start'}
      fill={false}
      wrap={!!image}
      {...props}
    >
      {(!image && icon) && <span data-info-state-icon-color={iconColor} className={IconWrapper}><Icon name={icon} dimension={48} /></span>}
      {(image && !icon) && <img className={Image} alt="" width="400" src={image} loading="lazy" decoding="async" />}
      <Stack
        rowGap={16}
        horizontalAlign={isHorizontal ? 'start' : 'center'}
        verticalAlign="center"
        fill={false}
      >
        <Title maxWidth="20ch" textAlign={isHorizontal ? 'start' : 'center'} level="4">{title}</Title>
        <Text maxWidth="40ch" dimmed={6} textAlign={isHorizontal ? 'start' : 'center'}>{children}</Text>
        {actions && (
          <Stack verticalPadding={16} inline direction="row" columnGap={16} rowGap={16} wrap>
            {actions}
          </Stack>
        )}
      </Stack>
    </Stack>
  )
})

InfoState.displayName = 'InfoState'
