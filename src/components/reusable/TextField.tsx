import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import {
  UseControllerProps,
  useController,
} from "react-hook-form";

interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  variant?: "short" | "medium" |"long";
}

const TextField = ({
  label,
  variant="long",
  ...props
}: UseControllerProps & ITextField) => {

  const { field, fieldState } = useController(props);

  return (
    <div className={clsx("",
      {
        "w-[280px] md:w-[390px]":
        variant== "long",
        "w-[358.97px]":
        variant== "medium",
        "w-[111px] md:w-[172px]":
        variant== "short",
      }
    )}
    >
      <p className="block text-sm mb-[6px] capitalize">
        {label}
      </p>

      <input
        // field: { onChange, onBlur, value, name, ref },
        {...field}
        {...props}
        className='block w-full h-[51.50px] p-[17.75px] rounded-lg border border-zinc-400 text-stone-300 text-[12.82px] font-medium leading-none appearance-none focus:bg-white focus:outline focus:outline--zinc-400 bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed'
        />

      <p
        className={clsx("text-sm mt-[6px]", {
          "text-[#DA1E28]": fieldState.invalid,
        })}
      >
        {fieldState.error?.message}
      </p>
    </div>
  );
};

export default TextField;
