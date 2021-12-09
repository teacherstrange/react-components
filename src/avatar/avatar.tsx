import clsx from 'clsx'
import React, { forwardRef, ImgHTMLAttributes } from 'react'
import { Avatar as AvatarClass, Placeholder } from './avatar.module.css'

export const AVATAR_NAME = 'Avatar'

export type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  src?: string;
  dimension?: 'small' | 'regular' | 'big';
}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(({
  className,
  src,
  dimension = 'regular',
  ...props
}, forwardedRef) => {
  return (
    <picture
      className={clsx(AvatarClass, className)}
      data-avatar-dimension={dimension}
    >
      <svg
        aria-hidden="true"
        className={Placeholder}
        height={18}
        viewBox="0 0 12 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity={0.7}
          d="M6 0C3.795 0 2 1.794 2 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4z"
          fill="var(--highlight-blue-foreground)"
        />
        <path
          d="M8.4 9H3.6C1.612 9 0 10.575 0 12.531v5.126C1.814 18.517 3.85 19 6 19s4.186-.483 6-1.343v-5.126C12 10.581 10.394 9 8.4 9z"
          fill="var(--highlight-blue-foreground)"
        />
      </svg>

      {src && (
        <img
          ref={forwardedRef}
          alt=""
          src={src}
          {...props}
        />
      )}
    </picture>
  )
})

Avatar.displayName = AVATAR_NAME
