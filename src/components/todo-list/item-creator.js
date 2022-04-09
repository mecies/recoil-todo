import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../recoil";
import { getId } from "../../utils/get-id";

function ItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default ItemCreator;
