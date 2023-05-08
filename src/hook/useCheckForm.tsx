import { useState, useCallback } from "react";

import { CompleteFlagsType, ValidFlagType } from "../types/input";

export const useCheckForm = () => {
  const [isInputsCompleted, setIsInputsCompleted] = useState<CompleteFlagsType>({
    isCardNumberCompleted: false,
    isExpiryDateCompleted: false,
    isCVCCompleted: false,
    isPasswordCompleted: false,
  });

  const useMakeSetInputCompleted = (key: keyof CompleteFlagsType) =>
    useCallback(
      (isCompleted: boolean) => {
        setIsInputsCompleted((isInputsCompleted) => ({ ...isInputsCompleted, [key]: isCompleted }));
      },
      [setIsInputsCompleted]
    );

  const setIsNumbersCompleted = useMakeSetInputCompleted("isCardNumberCompleted");
  const setExpriyDateCompleted = useMakeSetInputCompleted("isExpiryDateCompleted");
  const setIsCVCCompleted = useMakeSetInputCompleted("isCVCCompleted");
  const setIsPassWordCompleted = useMakeSetInputCompleted("isPasswordCompleted");

  const [isInputsValid, setIsInputsValid] = useState<ValidFlagType>({
    isCardNumbersValid: true,
    isExpiryDateValid: true,
  });

  const useMakeSetInputValid = (key: keyof ValidFlagType) =>
    useCallback(
      (isValid: boolean) => {
        setIsInputsValid((isInputsValid) => ({ ...isInputsValid, [key]: isValid }));
      },
      [setIsInputsValid]
    );

  const setIsNumbersValid = useMakeSetInputValid("isCardNumbersValid");
  const setIsExpiryDateValid = useMakeSetInputValid("isExpiryDateValid");

  const isAllCompleted = (): boolean => {
    return Object.values(isInputsCompleted).every((isCompleted) => isCompleted);
  };

  return {
    isInputsCompleted,
    setIsNumbersCompleted,
    setExpriyDateCompleted,
    setIsCVCCompleted,
    setIsPassWordCompleted,

    isInputsValid,
    setIsNumbersValid,
    setIsExpiryDateValid,

    isAllCompleted,
  };
};
