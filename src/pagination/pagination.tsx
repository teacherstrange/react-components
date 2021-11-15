import React, { useCallback, useEffect, useState } from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { Except } from 'type-fest'

export type PaginationProps = Except<ReactPaginateProps, 'pageCount' | 'pageRangeDisplayed' | 'marginPagesDisplayed'> & {
  itemsCount: number;
  itemsPerPage?: number;
  onPageClick?(offset: number): void;
  pageCount?: ReactPaginateProps['pageCount'];
  pageRangeDisplayed?: ReactPaginateProps['pageRangeDisplayed'];
  marginPagesDisplayed?: ReactPaginateProps['marginPagesDisplayed'];
}

export const Pagination = ({
  itemsCount,
  itemsPerPage = 10,
  onPageClick,
  pageCount,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 5,
  ...props
}: PaginationProps) => {
  const [computedPageCount, setComputedPageCount] = useState(0)

  useEffect(() => {
    itemsCount && setComputedPageCount(Math.ceil(itemsCount / itemsPerPage))
  }, [itemsCount, itemsPerPage])

  const handlePageClick = useCallback(
    (event: Record<string, any>) => {
      const newOffset = (event.selected * itemsPerPage) % itemsCount
      onPageClick && onPageClick(newOffset)
    },
    [itemsPerPage, onPageClick, itemsCount]
  )

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount || computedPageCount}
      marginPagesDisplayed={marginPagesDisplayed}
      previousLabel="< previous"
      {...props}
    />
  )
}
