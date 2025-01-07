import Product from "../../components/Product";

export const dynamic = "force-dynamic";

export default async function page() {
  const data = await fetch("http://localhost:3000/api/products").then((res) =>
    res.json()
  );
  return (
    <div className="container ">
      <h1 className="text-4xl font-bold text-center py-7">Products</h1>
      <Product data={data} />
    </div>
  );
}
