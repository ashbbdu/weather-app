import axios from "axios";
import { useEffect, useState } from "react";
 
 
const Loader = () => {
  const [data, setData] = useState<[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit , setLimit] = useState(20)
 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?offset=${offset}&limit=${limit}`
        );
        setData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
 
 
    const handleScroll = async (e : any) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 > scrollHeight) {
        setOffset(offset + 20);
        setLimit(offset + 20)
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);
 
 
  return data;
};
 
 
export default Loader;