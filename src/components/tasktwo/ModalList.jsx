import React from 'react';
import Modal from './Modal';
import { useModal } from '../../hooks/useModal';
import { Button, ButtonsGroup } from '../styled-components/Button';
import { Spinner, SpinnerWrapper } from '../styled-components/Spinner';
import { StyledSelect } from '../styled-components/Modal';

const ModalList = () => {
  const [isLoadingModalOpen, toggleLoadingModal] = useModal();
  const [isFilesModalOpen, toggleFilesModal] = useModal();
  const [isHistoryModalOpen, toggleHistoryModal] = useModal();

  const deleteFilesModalTitle = 'Are you sure you want to delete all of your files?';
  const deleteHistoryModalTitle = 'Are you sure you want to delete this report and its history?';

  const LoadingModal = () => (
    <Modal
      isOpen={isLoadingModalOpen}
      loading
      primaryButtonHandler={() => {}}
      secondaryButtonHandler={() => {}}
    >
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
      <p>Data is loading</p>
    </Modal>
  );

  const FilesModal = () => (
    <Modal
      isOpen={isFilesModalOpen}
      title={deleteFilesModalTitle}
      primaryButtonHandler={toggleFilesModal}
      secondaryButtonHandler={toggleFilesModal}
      showWarningSign
    >
      <p>This action cannot be undone.</p>
    </Modal>
  );

  const DeleteHistoryModal = () => (
    <Modal
      isOpen={isHistoryModalOpen}
      title={deleteHistoryModalTitle}
      primaryButtonHandler={toggleHistoryModal}
      secondaryButtonHandler={toggleHistoryModal}
      primaryButtonText="Delete all"
      secondaryButtonText="Cancel"
      showWarningSign
    >
      <p>
        If you delete the
        <b> Execusive metrics </b>
        report, you will also delete the associated history:
      </p>
      <StyledSelect size="6">
        <option>January 2020</option>
        <option>February 2020</option>
        <option>March 2020</option>
        <option>April 2020</option>
        <option>May 2020</option>
        <option>June 2020</option>
        <option>July 2020</option>
      </StyledSelect>
      <p>
        Please type the word &lsquo;Delete&rsquo;
        to remove the
        <b> Execusive metrics </b>
        report and the associated history:
      </p>
      <input type="text" />
    </Modal>
  );

  return (
    <>
      <ButtonsGroup center>
        <Button primary onClick={toggleLoadingModal}>Data loading modal</Button>
        <Button primary onClick={toggleFilesModal}>Delete files modal</Button>
        <Button primary onClick={toggleHistoryModal}>Delete report and history modal</Button>
      </ButtonsGroup>

      <LoadingModal />
      <FilesModal />
      <DeleteHistoryModal />
    </>
  );
};

export default ModalList;
