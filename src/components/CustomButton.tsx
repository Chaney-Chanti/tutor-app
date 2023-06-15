import { CustomButtonProps } from "./types";

const CustomButton = ({title, containerStyles} : CustomButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
    <button
    disabled={false}
    type={"button"}
    className={`custom-btn ${containerStyles}`}
    >
    <span className={`flex-1`}>
        {title}
    </span>
    </button>
    </div>
  )
}

export default CustomButton