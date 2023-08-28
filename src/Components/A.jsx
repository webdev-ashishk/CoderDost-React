import useFetch from "./useFetch";

const A = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  // console.log(data);
  return loading ? (
    <h1>Loading .....</h1>
  ) : (
    <div className="a">
      <h3>data fetching below</h3>
      {data?.map((d) => (
        <ul key={d.userid}>
          <li>{d.username}</li>
        </ul>
      ))}
    </div>
  );
};

export default A;
