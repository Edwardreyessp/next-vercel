import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#3E3E3E",
        borderRadius: "5px",
        padding: "3rem",
      }}
    >
      {children}
    </div>
  );
};
