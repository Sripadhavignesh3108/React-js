import axios from "axios";
import { useEffect, useState } from "react";

export default function useCustomAxios(url) {
  const [AxiosData, updateAxiosData] = useState([]);
  useEffect(() => {
    let functionCall = async () => {
      let response = await axios.get(url);
      updateAxiosData(response);
    };
    functionCall();
  }, [url]);
  if (AxiosData.status === 200) {
    return AxiosData.data;
   }
}
