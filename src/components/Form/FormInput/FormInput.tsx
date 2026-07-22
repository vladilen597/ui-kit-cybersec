import { Controller, useFormContext } from "react-hook-form";
import Input, { type IInputProps } from "@/components/Input/Input";
import { createFormElement } from "@/utils/createFormElement";

interface IFormInputProps extends IInputProps {
  name: string;
}

const FormInput = createFormElement<IFormInputProps>("firstName", Input);

// const FormInput = (props: IFormInputProps) => {
//   const { name, ...otherProps } = props;
//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <>
//             <Input
//               aria-invalid={errors.firstName ? "true" : "false"}
//               {...otherProps}
//               {...field}
//             />
//             {errors[name] && (
//               <span className="mt-1 block text-xs text-destructive">
//                 {errors[name].message as string}
//               </span>
//             )}
//           </>
//         )}
//       />
//     </>
//   );
// };

export default FormInput;
