export interface TodoState {
  id: string;
  content: string;
  done: boolean;
}
export type TodoList = Array<TodoState>