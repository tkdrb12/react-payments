import { Container } from "../common/Container";
import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";

interface ExpiryDateInputProps {
  isValid: boolean;
  setIsValid: (isValid: boolean) => void;
  setExpiryDate: (value: string) => void;
  setIsCompleted: (isCompleted: boolean) => void;
}

const ExpiryDateInfo = {
  label: "expiryDate",
  placeholder: "MM / YY",
  type: "text",

  $width: "137px",
  $textPosition: "center",
};

export const ExpiryDateInput = ({ isValid, setExpiryDate, setIsCompleted, setIsValid }: ExpiryDateInputProps) => {
  const paddingSingleDigitMonth = (expriyDate: string) => {
    if (expriyDate.length === 2 && !/[^2-9]/g.test(expriyDate[0])) {
      return `${"0"}${expriyDate}`;
    }

    return expriyDate;
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replaceAll(" / ", "");

    if (value.length > 4) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    const expriyDate = paddingSingleDigitMonth(value);

    e.target.value = (expriyDate.match(/\d{1,2}/g) ?? []).join(" / ");
    setExpiryDate(e.target.value);

    setIsCompleted(false);
    setIsValid(true);
    if (value.length === 4) {
      setIsCompleted(true);
    }
  };

  return (
    <Container>
      <InputLabel text="만료일" name="expiryDate" />
      <Input
        {...ExpiryDateInfo}
        handleInput={handleInput}
        error={{
          isValid: isValid,
          errorMessage: "유효한 만료일을 입력해주세요.",
        }}
      />
    </Container>
  );
};
