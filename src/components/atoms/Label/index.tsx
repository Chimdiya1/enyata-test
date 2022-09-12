type Props = {
  className?: string;
  inputName: string;
};
export const Label = ({ className, inputName }: Props) => {
  return <label className={className}>{inputName}</label>;
};
