import { useRecoilValue } from "recoil";
import { todoListState } from "../../recoil";
import Item from "./item";
import ItemCreator from "./item-creator";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  console.log({ todoList });
  return (
    <>
      <ItemCreator />

      {todoList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
}

export default TodoList;
