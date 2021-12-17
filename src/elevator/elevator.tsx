import { FC, Fragment, Children, cloneElement, ReactElement } from 'react'

export type ElevatorProps = {
  resting: 0 | 1 | 2 | 3 | 4;
  hover?: 0 | 1 | 2 | 3 | 4;
  children: ReactElement;
}

export const Elevator: FC<ElevatorProps> = ({
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
