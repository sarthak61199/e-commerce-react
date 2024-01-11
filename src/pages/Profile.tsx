import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import OrderList from "@/components/order/OrderList";

function Profile() {
  return (
    <div>
      <Tabs defaultValue="profile" className="flex" orientation="vertical">
        <TabsList className="bg-transparent flex flex-col mt-10">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>
        <Separator orientation="vertical" className="h-[calc(100vh-320px)]" />
        <TabsContent value="profile" className="ml-10 mt-5">
          <h3 className="text-2xl font-bold">Make changes to your Profile</h3>
        </TabsContent>
        <TabsContent value="orders" className="ml-10 mt-5 flex-1">
          <h3 className="text-2xl font-bold">
            View your current and past Orders
          </h3>
          <div className="mt-10">
            <OrderList />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Profile;
