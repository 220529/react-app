import { useCallback, useRef, ChangeEventHandler, useState } from "react";
import * as api from "@/api/oss";
import style from "./style.module.less";

interface UploadProps {
  uploadSuccess: (res: any) => void;
}

export const useUpload = ({ uploadSuccess }: UploadProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = async e => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append(file.name, file);
      setLoading(true);
      const res = await api.upload(formData);
      setLoading(false);
      uploadSuccess(res);
    }
  };

  const upload = () => {
    ref.current?.click();
  };

  const Uploader = useCallback(() => {
    return <input onChange={onChange} className={style.input} ref={ref} type="file" />;
  }, []);

  return {
    loading,
    upload,
    Uploader,
  };
};
