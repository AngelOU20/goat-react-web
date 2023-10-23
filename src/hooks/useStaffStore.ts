import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../store';
import {
  type Employee,
  onAddNewEmployee,
  onClearEmployeeActive,
  onSetActiveEmployee,
  onUpdateEmployee,
} from '../store/staff/staffSlice';

interface Props {
  activeEmployee: Employee | null;
  staff: Employee[];
  setActiveEmployee: (employee: Employee | null) => void;
  startSavingEmployee: (employee: Employee | null) => Promise<void>;
  clearEmployeeActive: () => void;
}

export const useStaffStore = (): Props => {
  const dispatch = useDispatch();

  const { staff, activeEmployee } = useSelector(
    (state: RootState) => state.staff
  );

  const setActiveEmployee = (employee: Employee | null): void => {
    dispatch(onSetActiveEmployee(employee));
  };

  const startSavingEmployee = async (
    employee: Employee | null
  ): Promise<void> => {
    if (employee !== null && employee._id !== 0) {
      dispatch(onUpdateEmployee({ ...employee }));
    } else {
      dispatch(
        onAddNewEmployee({
          ...employee,
          status: 'Activo',
          _id: new Date().getTime(),
        })
      );
    }
  };

  const clearEmployeeActive = (): void => {
    dispatch(onClearEmployeeActive());
  };

  return {
    // Properties
    activeEmployee,
    staff,

    // Methods
    setActiveEmployee,
    startSavingEmployee,
    clearEmployeeActive,
  };
};
