import clsx from 'clsx'
import React, { useCallback, useEffect, useState } from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { Icon } from '../'

import { Pagination as PaginationClass } from './pagination.module.css'

export type PaginationProps = ReactPaginateProps & {
  itemsCount: number;
  itemsPerPage?: number;
  onPageClick?(offset: Record<string, number>): void;
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

  const handlePageClick = useCallback(
    (event: Record<string, any>) => {
      const newOffset = (event.selected * itemsPerPage) % itemsCount
      onPageClick && onPageClick({ ...event, offset: newOffset })
    },
    [itemsPerPage, onPageClick, itemsCount]
  )

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
