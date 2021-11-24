import React, {
  useMemo
} from 'react'
import ReactDataTable, { TableProps } from 'react-data-table-component'
import { Icon, SkeletonBlock, Checkbox } from '../'
import { customStyle } from './theme'
import { TableWrapper, SortIcon, ExpandIcon, ExpandWrapper, ExpandContent } from './data-table.module.css'
import { IconNames } from '../icons/types'
import clsx from 'clsx'

export type DataTableProps<T> = TableProps<T> & {
  ExpandableRowsComponent?: React.FC<{data: T}>;
  collapsedRowIcon?: IconNames;
  expandedRowIcon?: IconNames;
  minRowHeight?: string;
}

export const DataTable = <T, >({
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
}: DataTableProps<T>) => {
  const selectProps = {
    indeterminate: (isIndeterminate: boolean) => isIndeterminate,
    dimension: 'small'
  }

  // eslint-disable-next-line react/display-name
  const ExpandComponent = useMemo(() => ({ data: innerData }: { data?: any }) => (
    <div className={ExpandWrapper}>
      <div className={ExpandContent}>
        {ExpandableRowsComponent ? <ExpandableRowsComponent data={innerData} /> : null}
      </div>
    </div>
  ), [ExpandableRowsComponent])

  return (
    <div className={clsx(TableWrapper, className)}>
      <ReactDataTable
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
          collapsed: <span className={ExpandIcon}><Icon name={collapsedRowIcon} dimension={16} /></span>,
          expanded: <span className={ExpandIcon} data-expanded><Icon name={expandedRowIcon} dimension={16} /></span>
        }}
        sortIcon={(
          <span className={SortIcon}>
            <Icon
              name="arrow-up"
              dimension={16}
            />
          </span>
        )}
        {...props}
      />
    </div>
  )
}
