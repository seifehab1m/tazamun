"use client";
import React from "react";
import { Table } from "antd";

const LazyTable = ({ tableData, columns }) => {
  return (
    <Table
      dataSource={tableData}
      columns={columns}
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      className="mt-5"
    />
  );
};

export default LazyTable;
