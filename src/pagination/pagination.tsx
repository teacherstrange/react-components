import clsx from 'clsx'
import { useEffect, useState } from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { Except } from 'type-fest'
import { Icon } from '../'

import { Pagination as PaginationClass } from './pagination.module.css'

export type PaginationProps = Except<ReactPaginateProps, 'pageCount'> & {
  itemsCount: number;
  itemsPerPage?: number;
  pageCount?: number;
  onPageClick?(data: Record<string, number>): void;
  pageRangeDisplayed?: ReactPaginateProps['pageRangeDisplayed'];
  marginPagesDisplayed?: ReactPaginateProps['marginPagesDisplayed'];
}

export const Pagination = ({
  className,
  itemsCount,
  itemsPerPage = 10,
  onPageClick,
  pageCount,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 1,
  ...otherProps
}: PaginationProps) => {
  const [computedPageCount, setComputedPageCount] = useState(0)

  useEffect(() => {
    itemsCount && setComputedPageCount(Math.ceil(itemsCount / itemsPerPage))
  }, [itemsCount, itemsPerPage])

  const handlePageClick = (event: Record<string, any>) => {
    const newOffset = (event.selected * itemsPerPage) % itemsCount
    onPageClick && onPageClick({ ...event, offset: newOffset })
  }

  return (
    <ReactPaginate
      containerClassName={clsx(PaginationClass, className)}
      breakLabel="..."
      nextLabel={<Icon dimension={16} name="chevron-right" />}
      previousLabel={<Icon dimension={16} name="chevron-left" />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount || computedPageCount}
      marginPagesDisplayed={marginPagesDisplayed}
      {...otherProps}
    />
  )
}
