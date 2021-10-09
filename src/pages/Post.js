import { useLocation, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search);
  return (
    <div>
      <h1>Id is = {id}</h1>
      <h1>name is = {query.get("name")}</h1>
      <h1>name is = {query.get("lastName")}</h1>
    </div>
  );
};

export default Post;
