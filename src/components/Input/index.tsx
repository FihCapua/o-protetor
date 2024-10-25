import { InputContainer, StyledInput } from "./style";
import { InputFieldProps } from "@/types";

export const InputField: React.FC<InputFieldProps> = ({ type = "text", value, onChange, placeholder, required = false }) => (
    <InputContainer>
        <StyledInput
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
        />
    </InputContainer>
);
