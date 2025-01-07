import Login from "@/components/Login";


export const dynamic = "force-dynamic";

export default async function Home() {

  return (
    <section className="container pt-7  h-full">
      <h1 className="text-4xl font-bold text-center pb-7">login</h1>
      <div className="bg-[#001529] w-full p-6 h-96">
        <Login />
      </div>
    </section>
  );
}
