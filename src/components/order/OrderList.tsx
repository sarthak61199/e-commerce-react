import OrderItem from "./OrderItem";

function OrderList() {
  return (
    <div className="flex flex-col gap-8">
      <OrderItem />
      <OrderItem />
    </div>
  );
}

export default OrderList;
