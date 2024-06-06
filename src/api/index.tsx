import axios from "axios";

const get = async ({ url }: { url: string }) => {
  return axios.get(url);
};

export { get };
