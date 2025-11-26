/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState, useEffect, useMemo } from 'react';
import { Dropdown } from '../Dropdown';
import { ProductCard } from '../ProductCard';
import './Catalog.scss';
import Paginator from '../Paginator/Paginator';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import type { GeneralBook } from '../../types/GeneralBook';

const DEFAULT_ITEM_COUNT = 16;
const DEFAULT_PAGE = 1;
const PAGE_PARAM_NAME = 'page';
const ITEM_COUNT_PARAM_NAME = 'count';
const SORT_PARAM_NAME = 'sort';

enum sortOption {
  Newest = 'Newest',
  Cheaper = 'Cheaper',
  Expensive = 'More Expensive',
}

type CatalogProps = {
  error: Error | null;
  isLoading: boolean;
  title: string;
  catalogBooks: GeneralBook[];
};

enum Order {
  Ascending = 1,
  Descending = 2,
}

function sortPrice(a: GeneralBook, b: GeneralBook, order: Order) {
  const priceA = a.priceDiscount ?? a.priceRegular;
  const priceB = b.priceDiscount ?? b.priceRegular;

  return order === Order.Ascending ? priceA - priceB : priceB - priceA;
}

function sortedcatalogBooks(catalogBooks: GeneralBook[], sortBy: string) {
  const visiblecatalogBooks = [...catalogBooks];
  visiblecatalogBooks.sort((a: GeneralBook, b: GeneralBook) => {
    switch (sortBy) {
      case sortOption.Newest:
        return b.publicationYear - a.publicationYear;

      case sortOption.Cheaper:
        return sortPrice(a, b, Order.Ascending);

      case sortOption.Expensive:
        return sortPrice(a, b, Order.Descending);

      default:
        return 0;
    }
  });

  return visiblecatalogBooks;
}

export const Catalog = ({
  error,
  isLoading,
  title,
  catalogBooks,
}: CatalogProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sortBy, setsortBy] = useState<sortOption>(sortOption.Newest);
  const [itemsCount, setItemsCount] = useState(DEFAULT_ITEM_COUNT);
  const [page, setPage] = useState(DEFAULT_PAGE);

  const sortedcatalogBooksList = useMemo(
    () => sortedcatalogBooks(catalogBooks, sortBy),
    [catalogBooks, sortBy],
  );

  const [visiblecatalogBooks, setVisiblecatalogBooks] = useState<GeneralBook[]>(
    [],
  );

  useEffect(() => {
    setVisiblecatalogBooks(sortedcatalogBooksList.slice(0, itemsCount));
    setPage(1);
  }, [sortedcatalogBooksList, itemsCount]);

  const getTotalPageCount = useCallback(
    (rowCount: number): number => Math.ceil(rowCount / itemsCount),
    [itemsCount],
  );

  const handleNextPageClick = useCallback(() => {
    const current = page;
    const next = current + 1;
    const total = getTotalPageCount(sortedcatalogBooksList.length);
    const skip = current * itemsCount;

    setVisiblecatalogBooks(
      sortedcatalogBooksList.slice(skip, skip + itemsCount),
    );
    setPage(next <= total ? next : current);
  }, [page, sortedcatalogBooksList, itemsCount, getTotalPageCount]);

  const handlePrevPageClick = useCallback(() => {
    const current = page;
    const prev = current - 1;
    const skip = prev * itemsCount;

    setVisiblecatalogBooks(
      sortedcatalogBooksList.slice(skip - itemsCount, skip),
    );
    setPage(prev > 0 ? prev : current);
  }, [page, sortedcatalogBooksList, itemsCount]);

  const handlePageButtonClick = useCallback(
    (
      pageNumber: number,
      itemsPerPage: number | null = null,
      sortBy: sortOption | null = null,
    ) => {
      const current = pageNumber - 1;
      const countPerPage = itemsPerPage ?? itemsCount;
      const skip = current * countPerPage;

      setVisiblecatalogBooks(
        sortedcatalogBooks(sortedcatalogBooksList, sortBy as string).slice(
          skip,
          skip + countPerPage,
        ),
      );

      setPage(pageNumber);
    },
    [itemsCount, sortedcatalogBooksList],
  );

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (sortBy) newSearchParams.set(SORT_PARAM_NAME, sortBy);
    if (itemsCount)
      newSearchParams.set(ITEM_COUNT_PARAM_NAME, itemsCount.toString());
    if (page) newSearchParams.set(PAGE_PARAM_NAME, page.toString());

    setSearchParams(newSearchParams);
  }, [sortBy, itemsCount, page, searchParams, setSearchParams]);

  useEffect(() => {
    const pageParam = Number(searchParams.get(PAGE_PARAM_NAME));
    const sortParam = (searchParams.get(SORT_PARAM_NAME) as sortOption) ?? null;
    const countParam = Number(searchParams.get(ITEM_COUNT_PARAM_NAME));

    if (sortParam) setsortBy(sortParam);
    if (countParam) setItemsCount(Number(countParam));

    if (pageParam) {
      setPage(pageParam);
      handlePageButtonClick(pageParam, countParam, sortParam);
    }
  }, []);

  const setBooksPerPage = (val: number) => {
    setItemsCount(val);
    handlePageButtonClick(1, val);
  };

  const setSorting = (option: sortOption) => {
    setsortBy(option);
    handlePageButtonClick(1, null, option);
  };

  if (isLoading) {
    return (
      <section>
        <div className="container">
          <Loader />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <div className="container">
          <ErrorMessage />
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container">
        <h1 className="catalog__title">{title}</h1>
        <span className="catalog__subtitle">{catalogBooks.length} books</span>
        <div className="catalog__categories">
          <Dropdown
            label="Sort by"
            variant="sort"
            options={[
              { label: 'Newest', value: sortOption.Newest },
              { label: 'Cheaper', value: sortOption.Cheaper },
              { label: 'More expensive', value: sortOption.Expensive },
            ]}
            dropdownText={sortBy}
            onSelect={(val) => setSorting(val as sortOption)}
          />

          <Dropdown
            label="Items on page"
            variant="number"
            options={[
              { label: '8', value: 8 },
              { label: '16', value: 16 },
              { label: '24', value: 24 },
              { label: '30', value: 30 },
            ]}
            dropdownText={itemsCount.toString()}
            onSelect={(val) => setBooksPerPage(val as number)}
          />
        </div>

        <ul className="catalog__list">
          {visiblecatalogBooks.map((book) => (
            <li
              key={book.id}
              className="catalog__item"
            >
              <ProductCard book={book} />
            </li>
          ))}
        </ul>

        <Paginator
          onNextPageClick={handleNextPageClick}
          onPrevPageClick={handlePrevPageClick}
          onPageButtonClick={handlePageButtonClick}
          disable={{
            left: page === 1,
            right: page === getTotalPageCount(sortedcatalogBooksList.length),
          }}
          nav={{
            current: page,
            total: getTotalPageCount(sortedcatalogBooksList.length),
          }}
        />
      </div>
    </section>
  );
};
