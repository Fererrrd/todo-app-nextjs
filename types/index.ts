import { MouseEventHandler } from 'react';

export interface addTodo {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  buttonstyle: string;
}
