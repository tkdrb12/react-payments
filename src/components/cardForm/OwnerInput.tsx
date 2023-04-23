import { Container } from "../common/Container";

import { Input } from "../common/Input";
import { InputLabel } from "../common/InputLabel";
import styled from "styled-components";

interface OwnerInputProps {
  setOwner: (value: string) => void;
  owner: string | undefined;
}

const OwnerInfo = {
  label: "owner",
  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
  type: "text",
  $width: "318px",
  $textPosition: "left",
};

export const OwnerInput = ({ setOwner, owner }: OwnerInputProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 30) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    e.target.value = e.target.value.toUpperCase();
    setOwner(e.target.value);
  };

  return (
    <Container>
      <Row>
        <InputLabel text="카드 소유자 이름 (선택)" name="owner" />
        <InputLabel text={`${owner ? owner.length : "0"}/30`} name="ownerLength" />
      </Row>
      <Input error={{ isValid: true, errorMessage: "" }} {...OwnerInfo} handleInput={handleInput} />
    </Container>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
