import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useWorkStore = () => {
  const dispatch = useAppDispatch();
  const work = useAppSelector(state => state.work);
  const property = useMemo(() => {
    return work.components.find(item => item.id === work.currentId);
  }, [work]);
  return { work, property, dispatch };
};

export const useUserStore = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  return { user, userInfo: user.userInfo, dispatch };
};
