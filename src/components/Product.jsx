"use client";
import { columns } from "@/helpers/helpers";
import { Select, Skeleton, Table } from "antd";
import { Input } from "antd";
import { lazy, Suspense, useEffect, useState } from "react";
const LazyTable = lazy(() => import("@/components/LazyTable"));

export default function Product({ data }) {
  const [tableData, setTableData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(null);

  const filterData = () => {
    let filteredData = [...data];

    // Filter by category
    if (selectedCategory !== "All") {
      filteredData = filteredData.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort by name
    if (sortOrder) {
      filteredData = filteredData.sort((a, b) =>
        sortOrder === "a"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    }

    setTableData(filteredData);
  };

  // Handle category change
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  // Handle sort change
  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  // Handle search change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Apply filters and sort when any change happens
  useEffect(() => {
    filterData();
  }, [searchQuery, selectedCategory, sortOrder]);

  return (
    <>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        <Input
          placeholder="search by product"
          allowClear
          onChange={handleSearchChange}
          style={{
            width: 200,
          }}
        />
        <Select
          style={{ width: 200 }}
          onChange={handleCategoryChange}
          placeholder="filter by category"
        >
          <Select.Option value="All">All</Select.Option>
          <Select.Option value="Electronics">Electronics</Select.Option>
          <Select.Option value="Clothing">Clothing</Select.Option>
          <Select.Option value="Appliances">Appliances</Select.Option>
          <Select.Option value="Furniture">Furniture</Select.Option>
        </Select>

        <Select
          style={{ width: 200 }}
          onChange={handleSortChange}
          placeholder="Sort by"
        >
          <Select.Option value="a">Alphabetically A-Z</Select.Option>
          <Select.Option value="z">Alphabetically Z-A</Select.Option>
        </Select>
      </div>
      <Suspense fallback={<Skeleton active />}>
        <LazyTable tableData={tableData} columns={columns} />
      </Suspense>
    </>
  );
}
