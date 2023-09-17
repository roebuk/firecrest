import { useGetRaceQuery } from "../../graphql/types";
import { Link } from "react-router-dom";

export const RaceDetail = () => {
  const { loading, data, error } = useGetRaceQuery({
    variables: { getRaceId: "232" },
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div>
      <p>Lincoln</p>
      <Link to="/">Home</Link>
      <h1>{data?.getRace.id}</h1>
      <h1>{data?.getRace.title}</h1>
    </div>
  );
};
