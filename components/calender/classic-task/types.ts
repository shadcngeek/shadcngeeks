import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export interface DatabaseAtom {
  date: string;
  description: string;
}

export interface SheetDrawerTypes {
  date: string;
  prevDescription: string;
}

export interface ConfirmDeleteTypes {
  onClick: () => void;
}
