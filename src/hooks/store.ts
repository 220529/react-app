import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useEditorStore = () => {
  const dispatch = useAppDispatch();
  const editor = useAppSelector(state => state.editor);
  const property = useMemo(() => {
    return editor.components.find(item => item.id === editor.currentId);
  }, [editor]);
  return { editor, property, dispatch };
};

export const useUserStore = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  return { user, userInfo: user.userInfo, dispatch };
};
