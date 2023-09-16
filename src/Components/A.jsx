import Loader from "./Loader";
import useFetch from "./useFetch";

const A = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  // console.log(data);
  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className="a">
      {data.slice(0, 3)?.map((d) => (
        <ul key={d.userid}>
          <li>{d.username}</li>
        </ul>
      ))}
    </div>
  );
};

export default A;
