type Prefer<P, T> = P & Omit<T, keyof P>;

type ElementPropsWithoutRef<T extends ElementType> = Pick<
  React.ComponentPropsWithoutRef<T>,
  keyof React.ComponentPropsWithoutRef<T>
>;

type OverwritableType<OwnProps, Type extends ElementType> = Prefer<
  OwnProps,
  ElementPropsWithoutRef<Type>
>;
