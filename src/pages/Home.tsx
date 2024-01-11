import ProductList from "@/components/product/ProductList";

function Home() {
  return (
    <main className="flex-grow flex flex-col">
      <div className="flex items-center justify-center mb-20">
        <h2 className="text-7xl font-bold  text-center leading-[1.5]">
          Choose from over 100+ Phones from our store.
        </h2>
      </div>
      <div className="border-yellow-400 w-fit mx-auto border-b-[6px] px-4 pb-2">
        <h4 className="text-center text-3xl uppercase font-bold">
          Products available
        </h4>
      </div>
      <ProductList />
    </main>
  );
}

export default Home;
