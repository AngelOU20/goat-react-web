import { useState } from "react";

interface PaginationOptions<T> {
  page: number,
  rowsPerPage: number,
  visibleData: T[],
  handleChangePage: (_event: unknown, newPage: number) => void,
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const usePagination = <T> (data: T[]): PaginationOptions<T> => {
  const [page, setPage] = useState<number>(0); // Estado para la página actual
  const [rowsPerPage, setRowsPerPage] = useState<number>(5); // Estado para la cantidad de filas por página

  const visibleData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (_event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    page,
    rowsPerPage,
    visibleData,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};
