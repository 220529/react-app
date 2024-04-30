import React, { useEffect, useMemo } from "react";
import { cloneDeep } from "lodash-es";
import { useEditorStore } from "@/hooks/store";
import { fetchWork } from "@/store/editorSlice";
import { useParams } from "react-router-dom";
import Main from "@/components/editor-main";
import { pxTovw } from "@/utils";

const App: React.FC = () => {
  const { work, dispatch } = useEditorStore();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchWork(params.id as string));
  }, []);
  const page = useMemo(() => {
    const copyWork = cloneDeep(work);
    pxTovw(copyWork?.content?.components);
    return copyWork;
  }, [work]);
  if (!page.content) return null;
  return <Main content={page.content} />;
};

export default App;
