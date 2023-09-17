import { useGetRacesQuery } from "../../graphql/types";
import { Link } from "react-router-dom";

export const Home = () => {
  const { loading, error, data } = useGetRacesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <Link to="/admin/event/name">Admin</Link>
      {data?.races.map(({ id, title }) => (
        <div key={id}>
          <Link to={`/event/${id}`}>
            <h2>{title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};
