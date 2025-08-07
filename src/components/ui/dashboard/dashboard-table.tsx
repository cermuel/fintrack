import { useState } from "react";
import { Table } from "../shared/Table";
import { constants } from "../../../constants";
import { helper } from "../../../utils/helpers";
import { useSearch } from "../../../hooks/useSearch";

export default function DashboardTable() {
  const { searchQuery } = useSearch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredData = constants.TRANSACTIONS.filter((item) =>
    item.remark.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <Table
        columns={[
          { label: "ID", accessor: "id" },
          {
            label: "Date",
            accessor: "date",
            render: (value) => (
              <span>{new Date(value as string).toLocaleDateString()}</span>
            ),
          },
          { label: "Remark", accessor: "remark" },
          {
            label: "Amount",
            accessor: "amount",
            render: (value) => <span>{helper.formatDollar(value)}</span>,
          },
          { label: "Currency", accessor: "currency" },
          {
            label: "Type",
            accessor: "type",
            render: (value) => (
              <div className="bg-[#34616F17] rounded-full h-7 w-max flex items-center gap-2 px-2.5 ml-1">
                <div
                  className={`w-1 5 h-1 5 ${value === "Credit" ? "bg-[#087A2E]" : "bg-[#C6381B]"} rounded-full`}
                ></div>
                <span className="text-[#1B2528] font-medium text-xs">
                  {value}
                </span>
              </div>
            ),
          },
        ]}
        data={filteredData}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={setPage}
        onRowsPerPageChange={(newRows) => {
          setRowsPerPage(newRows);
          setPage(0);
        }}
      />
    </div>
  );
}
