import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type FormData = {
  firstName: string;
  lastName: string;
};

export const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type

  return (
    <form onSubmit={onSubmit}>
      <Link to="/">Home</Link>
      {Object.keys(errors).length > 0 && (
        <p aria-live="polite">We detected the following errors:</p>
      )}
      <label>First Name</label>
      <input
        aria-invalid={Boolean(errors.firstName)}
        {...register("firstName", { required: true, minLength: 20 })}
      />
      <label>Last Name</label>
      <input
        aria-invalid={Boolean(errors.lastName)}
        {...register("lastName", { required: true, minLength: 20 })}
      />
      <button type="submit">SetValue</button>
    </form>
  );
};
