import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../store';
import { onCloseStaffModal, onOpenStaffModal } from '../store/ui/uiStaffSlice';

export const useUiStaffStore = (): {
  isStaffModalOpen: boolean;
  openStaffModal: () => void;
  closeStaffModal: () => void;
} => {
  const dispatch = useDispatch();

  const { isStaffModalOpen } = useSelector((state: RootState) => state.uiStaff);

  const openStaffModal = (): void => {
    dispatch(onOpenStaffModal());
  };

  const closeStaffModal = (): void => {
    dispatch(onCloseStaffModal());
  };

  return {
    // Properties
    isStaffModalOpen,

    // Methods
    openStaffModal,
    closeStaffModal,
  };
};
