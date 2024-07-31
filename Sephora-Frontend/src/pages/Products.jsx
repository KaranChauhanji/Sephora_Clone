import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await axios.get('http://localhost:3000/product');
      console.log(resp.data)
      setData(resp.data)

    } catch (error) {
        console.log("Error in Fetching")
    }
  };

  useEffect(()=>{
fetchData()
  },[])

  return <Box></Box>;
};

export default Products;
