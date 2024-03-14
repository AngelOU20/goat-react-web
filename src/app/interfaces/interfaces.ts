export interface Employee {
  _id: number;
  nameComplete: string;
  user: string | undefined;
  isActive: boolean;
  number: string;
  email: string;
  password: string;
}

export interface Room {
  id: number,
  roomNumber: string,
  floor: string,
  status: string,
  isAvailability: boolean,
}

export interface RoomOperation {
  uuid: number,
  roomId: number,
  personalId: number,
  tasks: [],
  observations: [],
  createDate: string,
}

export interface Task {
  id: number,
  title: string,
  isCompleted: boolean,
}
