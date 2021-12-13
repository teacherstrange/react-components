import React, { useMemo, FC } from 'react'
import ReactDataTable, { TableProps as ReactTableProps } from 'react-data-table-component'
import { Icon, SkeletonBlock, Checkbox } from '..'
import { customStyle } from './theme'
import { SortIcon, ExpandWrapper, ExpandContent } from './table.module.css'
import { IconNames } from '../icons/types'
import clsx from 'clsx'

export type TableProps<T> = ReactTableProps<T> & {
  ExpandableRowsComponent?: FC<{data: T}>;
  collapsedRowIcon?: IconNames;
  expandedRowIcon?: IconNames;
  minRowHeight?: string;
}

export const Table = <T, >({
  className,
  ExpandableRowsComponent,
  progressComponent,
  customStyles,
  pagination = false,
  responsive = true,
  fixedHeader = false,
  noHeader = true,
  paginationPerPage = 8,
  striped = false,
  theme = 'default',
  collapsedRowIcon = 'chevron-right',
  expandedRowIcon = 'chevron-down',
  minRowHeight = '48px',
  ...props
}: TableProps<T>) => {
  const selectProps = {
    indeterminate: (isIndeterminate: boolean) => isIndeterminate,
    dimension: 'small'
  }

  const ExpandComponent = useMemo(() => ({ data: innerData }: { data: T }) => (
    <div className={ExpandWrapper}>
      <div className={ExpandContent}>
        {ExpandableRowsComponent ? <ExpandableRowsComponent data={innerData} /> : null}
      </div>
    </div>
  ), [ExpandableRowsComponent])

  return (
    <ReactDataTable
      className={clsx(className)}
      pagination={pagination}
      responsive={responsive}
      fixedHeader={fixedHeader}
      paginationPerPage={paginationPerPage}
      expandableRows={Boolean(ExpandableRowsComponent)}
      expandOnRowClicked={Boolean(ExpandableRowsComponent)}
      expandableRowsComponent={ExpandComponent}
      theme={theme}
      noHeader={noHeader}
      progressComponent={progressComponent || <div style={{ width: '100%' }}><SkeletonBlock height={40} count={8} /></div>}
      striped={striped}
      customStyles={customStyles || customStyle(minRowHeight)}
      selectableRowsComponent={Checkbox}
      selectableRowsComponentProps={selectProps}
      expandableIcon={{
        collapsed: <Icon name={collapsedRowIcon} fill="var(--global-foreground)" dimension={16} />,
        expanded: <Icon name={expandedRowIcon} fill="var(--global-foreground)" dimension={16} />
      }}
      paginationIconFirstPage={<Icon name="backward-step" dimension={24} />}
      paginationIconPrevious={<Icon name="chevron-left" dimension={24} />}
      paginationIconNext={<Icon name="chevron-right" dimension={24} />}
      paginationIconLastPage={<Icon name="forward-step" dimension={24} />}
      sortIcon={(
        <span className={SortIcon}>
          <Icon name="arrow-up" />
        </span>
        )}
      {...props}
    />
  )
}
