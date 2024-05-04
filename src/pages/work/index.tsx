import React, { useEffect, useMemo } from "react";
import { cloneDeep } from "lodash-es";
import { useWorkStore } from "@/hooks/store";
import { fetchWork } from "@/store/workSlice";
import { useParams } from "react-router-dom";
import Main from "@/components/editor-main";
import { pxTovw } from "@/utils";

const App: React.FC = () => {
  const { work, dispatch } = useWorkStore();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchWork(params.id as string));
  }, []);
  const page = useMemo(() => {
    const copyWork = cloneDeep(work);
    pxTovw(copyWork?.components);
    return copyWork;
  }, [work]);
  if (!page) return null;
  return <Main content={page} />;
};

export default App;
