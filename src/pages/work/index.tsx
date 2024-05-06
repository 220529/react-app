import React, { useEffect, useMemo } from "react";
import { cloneDeep } from "lodash-es";
import { useWork } from "@/hooks/work";
import Main from "@/components/editor-main";
import { pxTovw } from "@/utils";

const App: React.FC = () => {
  const { work, fetchWork } = useWork();
  useEffect(() => {
    fetchWork();
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
