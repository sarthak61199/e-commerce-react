import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useUser from "@/hooks/api/useUser";

function UserAvatar() {
  const { data } = useUser();

  return (
    <Avatar>
      <AvatarImage src={data?.data?.imgUrl} />
      <AvatarFallback>
        {(data?.data?.firstName[0] || "") + (data?.data?.lastName[0] || "")}
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
