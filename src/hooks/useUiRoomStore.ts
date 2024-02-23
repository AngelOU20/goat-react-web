import { type RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import {
  onOpenTaskModal,
  onCloseTaskModal,
  onCloseAssignPersonalModal,
  onOpenAssignPersonalModal,
} from '../store/ui/uiRoomSlice';

interface UiRoomStoreOptions {
  isTaskModalOpen: boolean;
  isAssignPersonalModalOpen: boolean;
  openTaskModal: () => void;
  closeTaskModal: () => void;
  openAssignPersonalModal: () => void;
  closeAssignPersonalModal: () => void;
}

export const useUiRoomStore = (): UiRoomStoreOptions => {
  const dispatch = useDispatch();

  const { isTaskModalOpen, isAssignPersonalModalOpen } = useSelector(
    (state: RootState) => state.uiRoom
  );

  const openTaskModal = (): void => {
    dispatch(onOpenTaskModal());
  };

  const closeTaskModal = (): void => {
    dispatch(onCloseTaskModal());
  };

  const openAssignPersonalModal = (): void => {
    dispatch(onOpenAssignPersonalModal());
  };

  const closeAssignPersonalModal = (): void => {
    dispatch(onCloseAssignPersonalModal());
  };

  return {
    // Properties
    isTaskModalOpen,
    isAssignPersonalModalOpen,

    // Methods
    openTaskModal,
    closeTaskModal,

    openAssignPersonalModal,
    closeAssignPersonalModal,
  };
};
