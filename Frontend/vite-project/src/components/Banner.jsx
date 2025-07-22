import Baner from "../../public/Banner.jpg";

export default function Banner() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col-reverse gap-5 md:flex-row pt-[200px] pb-20">
        <div className="w-full md:w-1/2">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              alias quod, cum odio corrupti accusamus culpa? Eum sit quam sed
              molestiae ipsa vero iste recusandae alias quas deleniti corporis.
            </p>
            <input
              type="text"
              placeholder="Type here"
              className="input focus-within:outline-none"
            />
          </div>
          <button className="btn btn-secondary mt-6">Secondary</button>
        </div>
        <div className="w-full md:w-1/2 ">
          <img src={Baner} className="h-96 w-100" />
        </div>
      </div>
    </>
  );
}
