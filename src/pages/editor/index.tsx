import React from "react";
import { useEditorStore } from "@/hooks/store";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Property from "@/components/property";
import Footer from "@/components/footer";
import Editor from "@/components/editor-main";

import style from "./style.module.less";

const App: React.FC = () => {
  const { editor } = useEditorStore();
  return (
    <div className={style.container}>
      <Header />
      <div className={style.content}>
        <Sidebar />
        <div className={style.middle}>
          <div className={style.editor}>
            <p>main</p>
            <Editor page={editor} />
          </div>
        </div>
        <Property />
      </div>
      <Footer />
    </div>
  );
};

export default App;
