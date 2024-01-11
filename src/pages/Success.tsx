import { Button } from "@/components/ui/button";
import useGetOrder from "@/hooks/api/useGetOrder";
import { useLocation, useNavigate } from "react-router-dom";

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = useGetOrder(location.state.order.id);

  if (!location.state) {
    navigate("/");
    return;
  }

  return (
    <main className="flex flex-col flex-grow justify-center items-center">
      <h1 className="text-7xl">Thank You for placing your Order</h1>
      <p className="text-2xl my-10 text-center">
        Your order with the Order ID{" "}
        <span className="font-bold">#{order?.data.id}</span> will be delivered
        to you soon.{" "}
        <p className="mt-4">
          You can check your orders in the profile section.
        </p>
      </p>
      <Button onClick={() => navigate("/", { replace: true })}>
        Shop More
      </Button>
    </main>
  );
}

export default Success;
