import ErrorPage from "pages/ErrorPage/ErrorPage";
import React, { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ErrorContextType {
  seriousError: { status: number | string; data: unknown } | null;
  handleSeriousError: (error: {
    status: number | string;
    data: unknown;
  }) => void;
  handleMinorError: (error: string) => void;
  handleWarning: (message: string) => void;
  clearErrors: () => void;
}

// const ErrorContext = createContext<ErrorContextType | null>(null);
const ErrorContext = createContext<ErrorContextType>({
  seriousError: null, // или начальный объект ошибки, если нужно
  handleSeriousError: () => {},
  handleMinorError: () => {},
  handleWarning: () => {},
  clearErrors: () => {},
});

export const useError = () => React.useContext(ErrorContext);

export const ErrorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [seriousError, setSeriousError] = useState<{
    status: number | string;
    data: unknown;
  } | null>(null);
  const [minorError, setMinorError] = useState<boolean | null>(null);
  const [warnigNotice, setWarnigNotice] = useState<string | null>(null);

  const clearErrors = () => {
    setSeriousError(null);
    setMinorError(null);
  };

  const handleSeriousError = (error: {
    status: number | string;
    data: unknown;
  }) => {
    setSeriousError(error);
  };

  const handleMinorError = (error: string) => {
    setMinorError(true);
    toast.error(error);
  };
  const handleWarning = (warnMessage: string) => {
    setWarnigNotice(warnMessage);
    toast.warn(warnMessage);
  };
  return (
    <ErrorContext.Provider
      value={{
        seriousError,
        handleSeriousError,
        handleMinorError,
        handleWarning,
        clearErrors,
      }}
    >
      {children}

      {seriousError && <ErrorPage />}
      {minorError && <ToastContainer autoClose={3000} />}
      {warnigNotice && <ToastContainer autoClose={3000} theme="dark" />}
    </ErrorContext.Provider>
  );
};
