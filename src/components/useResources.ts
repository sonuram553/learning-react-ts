import { useState, useEffect } from "react";
import axios from "axios";

interface Resource {
  title: string;
  id: string;
  name:string;
}

const useResources = (resource: string) => {
  const [resources, setResources] = useState<Resource[]>([]);

  const fetchResource = async (resource: string) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(res.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

export default useResources;
