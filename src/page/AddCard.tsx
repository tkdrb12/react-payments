import CardItem from "../components/cardList/CardItem";
import Header from "../components/common/Header";
import CardForm from "../components/cardForm/CardForm";
import Modal from "tkdrb12-react-modal";
import BrandSelectModal from "../components/modal/BrandSelectModal";
import styled from "styled-components";

import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { NewCardContext } from "../contexts/NewCardContext";

import { useNewCard } from "../hook/useNewCard";

export const AddCard = () => {
  const { newCard, setNumbers, setExpiryDate, setBrand, setOwner, setCVC, setPassword } = useNewCard();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleClickOpenModalButton = (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    e.preventDefault();

    openModal();
  };

  const canBackdropClickClose = !!newCard.brand;
  return (
    <>
      <HeaderWrapper>
        <Link to={"/"}>
          <BackButton>«</BackButton>
        </Link>
        <Header text="카드 추가" />
      </HeaderWrapper>
      <NewCardContext.Provider value={{ newCard, setNumbers, setExpiryDate, setBrand, setCVC, setPassword, setOwner }}>
        <Main>
          <CardItem card={newCard} handleClick={handleClickOpenModalButton} />
          <CardForm />
          {isModalOpen && (
            <Modal closeModal={closeModal} canBackdropClickClose={canBackdropClickClose}>
              <BrandSelectModal closeModal={closeModal} />
            </Modal>
          )}
        </Main>
      </NewCardContext.Provider>
    </>
  );
};

const BackButton = styled.button`
  position: absolute;
  font-size: 24px;
  padding: 12px 0 0 12px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 28px;
`;
