import * as api from "@/api/user";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/hooks/store";
import { setUserInfo } from "@/store/userSlice";

export const useUserInfo = () => {
  const navigate = useNavigate();
  const { dispatch, user } = useUserStore();
  const fetchUserInfo = async () => {
    if (user.access_token) {
      const res = await api.info();
      if (res.state === 1) {
        dispatch(setUserInfo(res.data));
      } else {
        navigate("/login");
      }
    }
  };
  return { fetchUserInfo };
};
