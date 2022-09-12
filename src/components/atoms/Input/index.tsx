import styled from "styled-components";
type Props = {
  value: string;
  onChange: (e:any) => void;
  placeholder: string;
  required: boolean;
  name: string;
  validation?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type:string
};
const StyledInput = styled.input`
  box-sizing: border-box;
  width: 335px;
  display: block;
  padding: 1rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #0b2253;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background: #ffffff;
  border: 1px solid #a4a7b7;
  border-radius: 4px;

  &:focus {
    border-color: #0a74dc;
    outline: 0;
  }
`;

export const Input = ({
  value,
  onChange,
  placeholder,
  required,
  name,
  validation,
  type
}: Props) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      onKeyUp={validation}
      type={type}
    />
  );
};
