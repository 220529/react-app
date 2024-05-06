import React, { useEffect } from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Property from "@/components/property";
import Footer from "@/components/footer";
import Main from "@/components/editor-main";
import { useWork } from "@/hooks/work";
import style from "./style.module.less";

const App: React.FC = () => {
  const { work, fetchWork } = useWork();
  useEffect(() => {
    fetchWork();
  }, []);
  return (
    <div className={style.container}>
      <Header />
      <div className={style.content}>
        <Sidebar />
        <div className={style.middle}>
          <div className={style.editor}>
            <div className={style.warpper}>
              <Main content={work} isEditor />
            </div>
          </div>
        </div>
        <Property />
      </div>
      <Footer />
    </div>
  );
};

export default App;
