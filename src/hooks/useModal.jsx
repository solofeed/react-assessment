import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isModalOpen);
  };

  return [isModalOpen, toggle];
};
