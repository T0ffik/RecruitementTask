import { PropsWithChildren } from "react";
type Props = PropsWithChildren & {
  condition: unknown;
};
export const If = ({ children, condition }: Props) => {
  return condition ? children : null;
};
