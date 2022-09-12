type Props = {
  className?: string;
};
export const Checkbox = ({ className }: Props) => (
  <input type="checkbox" className={className} />
);
