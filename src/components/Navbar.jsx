"use client";
import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/authContext";

const { Header } = Layout;

const Navbar = () => {
  const param = usePathname();
  const { user } = useAuth();

  useEffect(() => {}, [param]);

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            marginRight: "auto",
          }}
        >
          <Link href={"/"} style={{ color: "white" }}>
            Tazamun
          </Link>
        </div>

        {param !== "/" && (
          <>
            <Menu
              theme="dark"
              mode="horizontal"
              items={[
                {
                  key: "1",
                  label: <Link href={"/dashboard"}>Dashboard</Link>,
                },
                {
                  key: "2",
                  label: <Link href={"/products"}> Products</Link>,
                },
              ]}
            />
            <h2 className="text-white p-0 m-0">{user?.slice(0, 4)}</h2>
          </>
        )}
      </Header>
    </Layout>
  );
};

export default Navbar;
