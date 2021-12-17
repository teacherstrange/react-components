import { CSSProperties, forwardRef } from 'react'
import tksn from '@wonderflow/tokens/platforms/web/tokens.json'
import { Polymorphic } from '../'
import { Stack as StackClass } from './stack.module.css'
import clsx from 'clsx'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

export type StackProps = {
  /**
   * Add a gap between rows.
   */
  rowGap?: 0 | TokensTypes['space'];
  /**
   * Add a gap between columns.
   */
  columnGap?: 0 | TokensTypes['space'];
  /**
   * Display the element as inline-flex
   */
  inline?: boolean;
  /**
   * Wrap children whene there is no space for them.
   */
  wrap?: boolean;
  /**
   * Make the children grow to fill the available space instead
   * of being sized based on their content.
   */
  fill?: boolean;
  /**
   * Place the content vertically centered instead of
   * growing to fill the available space.
   */
  verticalAlign?: string;
  /**
   * Place the content horizontally centered instead of
   * growing to fill the available space.
   */
  horizontalAlign?: string;
  /**
   * Set the horizontal padding (left/right)
   */
  horizontalPadding?: TokensTypes['space'];
  /**
   * Set the vertical padding (top/bottom)
   */
  verticalPadding?: TokensTypes['space'];
  /**
   * Renderes children as rows or columns
   */
  direction?: 'row' | 'column';
}

type PolymorphicStack = Polymorphic.ForwardRefComponent<'div', StackProps>;

export const Stack = forwardRef(({
  children,
  className,
  rowGap = 0,
  columnGap = 0,
  as: Wrapper = 'div',
  inline = false,
  direction = 'column',
  wrap = false,
  fill = true,
  verticalAlign = 'initial',
  horizontalAlign = 'initial',
  horizontalPadding = 0,
  verticalPadding = 0,
  style,
  ...otherProps
}, forwardedRef) => {
  const alignmentTemplate = (prop: string) => {
    if (prop.includes('start') || prop.includes('end')) {
      return `flex-${prop}`
    }
    return prop
  }

  const computedStyle: CSSProperties = {
    '--rGap': rowGap && tksn.space[rowGap],
    '--cGap': columnGap && tksn.space[columnGap],
    '--vAlign': verticalAlign && alignmentTemplate(verticalAlign),
    '--hAlign': horizontalAlign && alignmentTemplate(horizontalAlign),
    '--vPadding': verticalPadding && tksn.space[verticalPadding],
    '--hPadding': horizontalPadding && tksn.space[horizontalPadding]
  }

  return (
    <Wrapper
      ref={forwardedRef}
      style={{ ...computedStyle, ...style }}
      data-stack-inline={inline}
      data-stack-wrap={wrap}
      data-stack-direction={direction}
      data-stack-fill={fill}
      className={clsx(StackClass, className)}
      {...otherProps}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicStack
