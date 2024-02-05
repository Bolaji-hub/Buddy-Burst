import { useState, useEffect } from "react";
import Header from "../components/Header";

const Connect = () => {
  let [users, setUsers] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [page, setPage] = useState(1);

  const PER_PAGE = 4;
  const skip = (page - 1) * PER_PAGE;
  const pages = Math.floor(users?.length / PER_PAGE);

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=400")
      .then((Response) => {
        if (!Response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${Response.status}`
          );
        }
        return Response.json();
      })
      .then((data) => {
        setUsers(data.results);
        setError(null);
      })

      .catch((err) => {
        setError(err.message);
        setUsers(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading";
  if (!users) return "An error occured";
  return (
    <div className=" ">
      <Header />
      <h2 className=" font-bold text-xl justify-center items-center pr-10 mt-8 mb-4">
        Connect with diffrent people from diffrent race{" "}
      </h2>

      <ul>
        {users &&
          users?.slice(skip, skip + PER_PAGE).map((user, id) => {
            const name = `${user.name.title} ${user.name.last} ${user.name.first}`;
            return (
              <li key={users.results} className="px-10 grid sm:grid-cols-1">
                <img
                  src={user.picture.large}
                  alt=""
                  className="  rounded-md "
                />
                <br />
                {name}
              </li>
            );
          })}
      </ul>
      <p className="pagination">
        pages: {page} of {pages}
      </p>

      <div>
        <button
          disabled={page <= 1}
          aria-disabled={page <= 1}
          onClick={() => setPage((page) => page - 1)}
        >
          prev
        </button>

        <button
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((page) => page + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Connect;
