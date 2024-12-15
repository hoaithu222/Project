import { useParams } from "react-router-dom";

export default function CategoryProducts() {
  const params = useParams();
  console.log(params);
  return <div>{params.categoryName}</div>;
}
