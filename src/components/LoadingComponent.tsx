import { FC } from "react";

interface ILoadingComponentProps {
  size: "h-2" | "h-3" | "h-5" | "h-10";
}

const LoadingComponent: FC<ILoadingComponentProps> = ({ size }) => {
  return (
    <div
      className={`w-full ${size} animate-pulse bg-black bg-opacity-50 rounded-md`}
    ></div>
  );
};

export default LoadingComponent;
