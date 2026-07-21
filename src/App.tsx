import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "./components/Form/FormInput/FormInput";

export interface IFormFields {
  firstName: string;
}

const App = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "",
    },
  });

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput name="firstName" control={control} />
    </form>
  );
};

export default App;
