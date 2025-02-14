import { ReactNode } from "react";

export const OverviewSectionContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <article className="my-4 p-4 lg:p-8 bg-white rounded-lg">
      {children}
    </article>
  );
};

export default OverviewSectionContainer;
