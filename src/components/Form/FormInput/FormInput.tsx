import Input, { type IInputProps } from "@/components/Input/Input";
import { createFormElement } from "@/utils/createFormElement";

interface IFormInputProps extends IInputProps {
  name: string;
}

const FormInput = createFormElement<IFormInputProps>(Input);

export default FormInput;
