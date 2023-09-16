import Loader from "./Loader";
import useFetch from "./useFetch";

const B = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <>
      <h2 className="text-red-500">color red</h2>
      <ol style={{ border: "2px solid green", width: "300px" }}>
        {data.slice(0, 2)?.map((_data) => {
          return (
            <li key={_data.id}>
              <p>{_data.username}</p>
              <i>{_data.email}</i>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default B;
