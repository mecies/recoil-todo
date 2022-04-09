import { RecoilRoot } from "recoil";
import TodoList from "./components/todo-list";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
