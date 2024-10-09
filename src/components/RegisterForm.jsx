import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  //   console.log(watch("name"));

  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 flex flex-col justify-center gap-5 px-4 py-4 bg-red-100 rounded-md"
      >
        <div className="">
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: true })}
            type="name"
            name="name"
            placeholder="Enter Your Name"
            className="block w-full rounded-md px-2 outline-none py-2"
          />
          {errors.name && (
            <span className="text-red-500 text-xs font-semibold">
              This field is required
            </span>
          )}
        </div>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="block w-full rounded-md px-2 outline-none py-2"
          />
          {errors.email && (
            <span className="text-red-500 text-xs font-semibold">
              This field is required
            </span>
          )}
        </div>
        <div className="">
          <label htmlFor="password">Passowrd</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 15,
            })}
            type="password"
            name="password"
            placeholder="Enter Password"
            className="block w-full rounded-md px-2 outline-none py-2"
          />
          {errors.password?.type == "required" && (
            <span className="text-red-500 text-xs font-semibold">
              This field is required
            </span>
          )}
          {errors.password?.type == "minLength" && (
            <span className="text-red-500 text-xs font-semibold">
              Passwrod should have atleast 6 characters
            </span>
          )}
          {errors.password?.type == "maxLength" && (
            <span className="text-red-500 text-xs font-semibold">
              Passwrod should not be exceed more than 15 characters
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <input
            {...register("gender", { required: true })}
            type="radio"
            name="gender"
            value="male"
          />
          Male
          <input
            {...register("gender", { required: true })}
            type="radio"
            name="gender"
            value="female"
          />
          Female
          <input
            {...register("gender", { required: true })}
            type="radio"
            name="gender"
            value="other"
          />
          Other
        </div>
        <button
          type="submit"
          className="w-fit px-4 py-2 bg-blue-600 rounded-md text-white font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
