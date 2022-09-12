type Props = {
  className?: string;
  src: string;
  width?: string;
  alt: string;
};
export const Image = ({ className, src, width = "100%", alt }: Props) => (
  <img className={className} src={src} width={width} alt={alt} />
);
