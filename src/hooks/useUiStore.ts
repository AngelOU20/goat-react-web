import { useDispatch, useSelector } from "react-redux";
import { type RootState } from '../store';
import { setCloseDrawer, setOpenDrawer } from '@/store/ui/uiSlice';

interface UiStoreOptions {
  isDrawerOpen: boolean;
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
}

export const useUiStore = (): UiStoreOptions => {
  const dispatch = useDispatch();

  const { isDrawerOpen } = useSelector(
    (state: RootState) => state.ui
  );

  const onOpenDrawer = (): void => { dispatch(setOpenDrawer()); };

  const onCloseDrawer = (): void => { dispatch(setCloseDrawer()); };

  return {
    isDrawerOpen,
    onOpenDrawer,
    onCloseDrawer
  };
};
