import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "./components/Form/FormInput/FormInput";
import Button from "./components/Button/Button";

interface IFormFields {
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
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormInput name="firstName" />
          <Button className="" isLoading>
            Hello!
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default App;
