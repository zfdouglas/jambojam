interface TitleProps {
  title: string;
  accentColor?: boolean;
}

export const Title = ({ title, accentColor = false }: TitleProps) => {
  return (
    <div
      className={`w-full text-center text-4xl uppercase font-title tracking-widest font-light ${accentColor ? "text-tAccent" : "text-tPrimary"}`}
    >
      {title}
    </div>
  );
};
