function OrderItem() {
  return (
    <div className="bg-stone-400/10 p-4 rounded-md">
      <p className="text-sm text-stone-500 mb-4">Order Id: 1</p>
      <div className="flex gap-10 flex-wrap">
        <div className="flex gap-2 items-center">
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png?tr=w-640"
            alt="photo"
            className="h-24 aspect-auto"
          />
          <div>
            <h3 className="text-xl font-bold">iPhone 14 Pro</h3>
            <p className="text-sm text-stone-500">₹139999.99</p>
            <p className="text-sm text-stone-500">x 1</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png?tr=w-640"
            alt="photo"
            className="h-24 aspect-auto"
          />
          <div>
            <h3 className="text-xl font-bold">iPhone 14 Pro</h3>
            <p className="text-sm text-stone-500">₹139999.99</p>
            <p className="text-sm text-stone-500">x 1</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-sm text-stone-500">Status: Delivered</p>
        <p className="text-sm text-stone-500">Ordered on: 12/12/2020</p>
        <p className="text-sm text-stone-500">Total: $999</p>
      </div>
    </div>
  );
}

export default OrderItem;
