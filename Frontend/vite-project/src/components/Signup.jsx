import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

export default function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center h-screen dark:bg-slate-900 dark:text-white ">
      <div className="lg:w-[30%] border border-1 border-black rounded-xl flex flex-col justify-around p-3 shadow-md dark:border dark:border-1 dark:border-white">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">Sigup</h3>
          <Link to="/" className="mt-0 btn btn-circle btn-ghost">
            ✕
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          
        >
          <div className="mt-4 flex flex-col gap-4">
            <div>
              <div className="flex gap-14">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-2 outline outline-1 outline-slate-500 rounded"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="text-center">
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="flex gap-16">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 outline outline-1 outline-slate-500 rounded"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="text-center">
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="flex gap-8">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="p-2 outline outline-1 outline-slate-500 rounded"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="text-center">
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-between pr-6 mt-3">
              <button className="bg-pink-500 px-2 py-2 rounded-md">
                Signup
              </button>
              <p className="text-[17px]">
                Have account?{` `}
                <Link
                  className="underline text-blue-400 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </Link>
                <Login />
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
