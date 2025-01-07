import BarChart from "@/components/BarChart";
import DoughnutChart from "@/components/DoughnutChart";
import LineChart from "@/components/LineChart";

export const dynamic = "force-dynamic";

export default async function page() {
  const res = await fetch("http://localhost:3000/api/dashboard");
  const data = await res.json();

  return (
    <section className="container pt-7">
      <h1 className="text-4xl font-bold text-center pb-7">Dashboard</h1>
      <div className="py-9 grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
        <LineChart dashboard={data} />
        <DoughnutChart dashboard={data} />
      </div>
      <BarChart dashboard={data} />
    </section>
  );
}
