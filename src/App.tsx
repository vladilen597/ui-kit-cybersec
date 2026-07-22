import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "./components/Form/FormInput/FormInput";

export interface IFormFields {
  firstName: string;
}

const App = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
    },
  });

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormInput name="firstName" />
      </form>
    </FormProvider>
  );
};

export default App;
