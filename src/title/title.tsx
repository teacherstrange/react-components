import { CSSProperties, forwardRef } from 'react'
import { Polymorphic } from '../'
import * as styles from './title.module.css'
import clsx from 'clsx'

export type TitleProps = {
  /**
   * Set the level of the title. This property only
   * affects the visual appearance of the title and not the
   * semantic meaning of the title, which you can define
   * by using the `as` property.
   */
  level?: '1' | '2' | '3' | '4' | '5' | '6' | 'display';
  /**
   * Set the text line-height of the title. This uses
   * the predefined tokens from the typography system.
   */
  lineHeight?: 'none' | 'small' | 'large';
  /**
   * Set the text alignment of the title based on the text direction.
   */
  textAlign?: 'start' | 'center' | 'end';
  /**
   * Set the maximum width of the text after which it will wrap.
   */
  maxWidth?: string;
  /**
   * Enable or disable the responsiveness of the text. If disabled,
   * the text will be always the same size across all breakpoints.
   */
  responsive?: boolean;
}

type PolymorphicTitle = Polymorphic.ForwardRefComponent<'span', TitleProps>;

export const Title = forwardRef(({
  children,
  className,
  as: Wrapper = 'span',
  lineHeight = 'small',
  level = '1',
  textAlign = 'start',
  maxWidth,
  responsive = true,
  style,
  ...otherProps
}, forwardedRef) => {
  const computedLevel = level.match(/\d/g) ? `H${level}` : level.charAt(0).toUpperCase() + level.slice(1)

  const dynamicStyle: CSSProperties = {
    '--maxW': maxWidth,
    '--tAlign': textAlign
  }

  return (
    <Wrapper
      ref={forwardedRef}
      data-title-line-height={lineHeight}
      data-title-responsive={responsive}
      className={clsx(styles.Title, styles[computedLevel], className)}
      style={{ ...dynamicStyle, ...style }}
      {...otherProps}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicTitle
