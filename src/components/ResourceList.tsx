import React from "react";
import useResources from "./useResources";

interface Props {
  resource: string;
}

const ResourceList = ({ resource }: Props) => {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
