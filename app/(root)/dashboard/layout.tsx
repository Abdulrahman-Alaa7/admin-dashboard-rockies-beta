import AdminProtected from "../../hooks/AdminProtected";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rockies Dashboard ",
  description: "Food, Burger , Ice cream and more.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminProtected>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16">{children}</main>
      </div>
    </AdminProtected>
  );
}
