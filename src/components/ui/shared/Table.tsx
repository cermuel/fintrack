import React, { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

type Column<T> = {
  label: string;
  accessor: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  sortable?: boolean;
  page: number;
  rowsPerPage: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange?: (newRows: number) => void;
};

export function Table<T>({
  columns,
  data,
  sortable = true,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);

  const sortedData = React.useMemo(() => {
    if (!sortable || !sortConfig) return data;

    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (aVal == null) return 1;
      if (bVal == null) return -1;

      const direction = sortConfig.direction === "asc" ? 1 : -1;

      if (typeof aVal === "number" && typeof bVal === "number") {
        return (aVal - bVal) * direction;
      }

      const isDate = (val: unknown) =>
        typeof val === "string" && !isNaN(Date.parse(val));

      if (isDate(aVal) && isDate(bVal)) {
        return (
          (new Date(aVal as string).getTime() -
            new Date(bVal as string).getTime()) *
          direction
        );
      }

      return String(aVal).localeCompare(String(bVal)) * direction;
    });

    return sorted;
  }, [data, sortConfig, sortable]);

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  const handleSort = (key: keyof T) => {
    if (!sortable) return;

    setSortConfig((prev) =>
      prev && prev.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
  };

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="w-full  space-y-4">
      <div className="w-full overflow-x-auto">
        <table className="min-w-full shadow p-4">
          <thead>
            <tr className="p-4">
              {columns.map((col) => (
                <th
                  key={String(col.accessor)}
                  onClick={() => handleSort(col.accessor)}
                  className="px-4 py-2 text-xs text-[#15272D9E] font-semibold capitalize border-b border-[#49656E33] cursor-pointer text-left"
                >
                  <div className="flex items-center">
                    {col.label}
                    {sortConfig?.key === col.accessor ? (
                      sortConfig.direction === "asc" ? (
                        <IoMdArrowDropup size={18} />
                      ) : (
                        <IoMdArrowDropdown size={18} />
                      )
                    ) : (
                      <IoMdArrowDropup size={18} className="opacity-0" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, idx) => (
              <tr key={idx} className="border-t">
                {columns.map((col) => (
                  <td
                    key={String(col.accessor)}
                    className="px-4 py-3 border-b border-[#49656E33] text-sm text-[#1B2528]"
                  >
                    {col.render
                      ? col.render(row[col.accessor], row)
                      : String(row[col.accessor] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <label
            htmlFor="rows-per-page"
            className="text-sm text-[#15272D] max-sm:hidden"
          >
            Rows per page:
          </label>
          <select
            id="rows-per-page"
            className="border rounded px-2 py-1 text-sm outline-0"
            value={rowsPerPage}
            onChange={(e) => onRowsPerPageChange?.(parseInt(e.target.value))}
          >
            {[5, 10, 25, 50, 100].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => onPageChange(Math.max(0, page - 1))}
            disabled={page === 0}
            className={`px-3 py-1 border text-xs font-semibold rounded-sm disabled:opacity-50  ${page === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            Prev
          </button>
          <span className="text-sm max-sm:hidden">
            Page {page + 1} of {totalPages}
          </span>
          <button
            onClick={() => onPageChange(Math.min(page + 1, totalPages - 1))}
            disabled={page + 1 >= totalPages}
            className={`px-3 py-1 border text-xs font-semibold rounded-sm disabled:opacity-50 ${
              page + 1 >= totalPages ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
