import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="">
      <dialog id="my_modal_3" className="modal dark:bg-slate-900">
        <div className="modal-box lg:w-[30%] sm:w-[48%] dark:bg-slate-900 dark:border dark:border-1 dark:border-white">
          <a
            href="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </a>
          <form
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
            className="dark:bg-slate-900"
          >
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col">
                <div className="flex justify-between">
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
              <div className="flex flex-col">
                <div className="flex justify-between">
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
                  Login
                </button>
                <p className="text-[17px]">
                  Not Registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-400 cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
