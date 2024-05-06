import * as api from "@/api/work";
import { setWork } from "@/store/workSlice";
import { useWorkStore } from "@/hooks/store";
import { useParams } from "react-router-dom";

export const useWork = () => {
  const { work, dispatch } = useWorkStore();
  const params = useParams();
  const fetchWork = async () => {
    if (params.id) {
      const res = await api.fetch(params.id);
      if (res.state === 1) {
        dispatch(setWork(res.data));
      }
    }
  };
  return { work, fetchWork };
};
