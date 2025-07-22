import { NavLink } from "react-router-dom";
import List from "../../public/list.json";
import Cards from "./Cards";

export default function Courses() {
  return (
    <div className="max-w-screen-2xl container md:px-20 px-2 dark:bg-slate-900 dark:text-white">
      <div className="bg-white dark:bg-slate-900 pt-28 flex flex-col gap-4 justify-center items-center text-center">
        <h1 className="text-2xl font-bold md:text-4xl">
          We're delighted to have you
          <span className="text-pink-500"> Here! :)</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque velit
          impedit tempore quos.
        </p>
        <NavLink
          className="mt-2 bg-pink-500 text-white rounded-xl px-4 py-2 hover:bg-pink-600 transition duration-200 ease-in-out"
          to="/"
        >
          Back
        </NavLink>
      </div>
      <div className="flex flex-wrap justify-between mt-5">
        {List.map((data) => {
          return (
            <Cards
              item={data}
              key={data.id}
              img="https://img.freepik.com/free-vector/stack-colorful-books_74855-314.jpg"
              className="w-full sm:w-[48%] md:w-[31%] lg:w-[24%]"
            />
          );
        })}
      </div>
    </div>
  );
}
