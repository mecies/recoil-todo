import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../recoil";
import Filters from "./filters";
import Stats from "./stats";
import Item from "./item";
import ItemCreator from "./item-creator";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  console.log({ todoList });
  return (
    <>
      <Stats />
      <Filters />
      <ItemCreator />
      {todoList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
}

export default TodoList;
