"use client"
import React, { ReactNode, Suspense } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

interface CustomSuspenseProps {
  children: ReactNode;
}

const LoadingSpinner = () => (
  <div className="text-center mt-4">
    <p className="text-lg font-semibold">Cargando productos...</p>
    <ClipLoader color={"#36D7B7"} loading={true} size={70} />
  </div>
);

const CustomSuspense: React.FC<CustomSuspenseProps> = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
);

export default CustomSuspense;

