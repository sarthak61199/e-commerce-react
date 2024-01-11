import { axiosPublic } from "@/lib/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axiosPublic.post("/auth/refresh-token");
    setAuth({
      accessToken: response.data.accessToken,
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
