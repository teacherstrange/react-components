import React, { Fragment, Children, cloneElement, ReactElement } from 'react'

export type ElevatorProps = {
  resting: 1 | 2 | 3 | 4;
  hover?: 1 | 2 | 3 | 4;
  children: ReactElement;
}

export const Elevator: React.FC<ElevatorProps> = ({
  children,
  resting,
  hover
}) => {
  return (
    <Fragment>
      {Children.map(children, (child: ReactElement) => cloneElement(
        child,
        {
          'data-elevation': resting,
          'data-elevation-hover': hover
        }
      ))}
    </Fragment>
  )
}
