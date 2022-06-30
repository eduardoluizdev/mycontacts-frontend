import { useState } from 'react';

type ErrorProps = {
  field: string
  message: string
};

export function useErrors() {
  const [errors, setErrors] = useState<ErrorProps[]>([]);

  function setError({ field, message }:ErrorProps) {
    const errorAlreadyExists = errors.find((error:ErrorProps) => error.field === field);

    if (errorAlreadyExists) return;

    setErrors((prevState:ErrorProps[]) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(fieldName: string) {
    setErrors(
      (prevState:ErrorProps[]) => prevState
        .filter((error: ErrorProps) => error.field !== fieldName),
    );
  }

  function getErrorMessageByFieldName(fieldName: string | boolean) {
    return errors.find((error: ErrorProps) => error.field === fieldName)?.message;
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
