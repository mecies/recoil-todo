import { snapshot_UNSTABLE } from "recoil";
import {
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  todoListStatsState,
} from ".";

const todoList = [
  { id: "1", text: "first todo", isComplete: false },
  { id: "2", text: "second todo", isComplete: false },
  { id: "3", text: "third todo", isComplete: false },
  { id: "4", text: "forth todo", isComplete: true },
];

describe("Recoil store", () => {
  it("should apply 'Show all' filter correctly", () => {
    const initialSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(todoListState, todoList);
      set(todoListFilterState, "Show All");
    });

    expect(
      initialSnapshot.getLoadable(todoListState).valueOrThrow()
    ).toStrictEqual(todoList);
    expect(
      initialSnapshot.getLoadable(todoListState).valueOrThrow().length
    ).toBe(4);
    expect(
      initialSnapshot.getLoadable(filteredTodoListState).valueOrThrow().length
    ).toBe(4);
  });

  it("should apply 'Show completed' filter correctly", () => {
    const showCompletedSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(todoListState, todoList);
      set(todoListFilterState, "Show Completed");
    });

    expect(
      showCompletedSnapshot.getLoadable(todoListState).valueOrThrow()
    ).toStrictEqual(todoList);
    expect(
      showCompletedSnapshot.getLoadable(todoListState).valueOrThrow().length
    ).toBe(4);
    expect(
      showCompletedSnapshot.getLoadable(filteredTodoListState).valueOrThrow()
        .length
    ).toBe(1);
  });

  it("should apply 'Show uncompleted' filter correctly", () => {
    const showUnCompletedSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(todoListState, todoList);
      set(todoListFilterState, "Show Uncompleted");
    });

    expect(
      showUnCompletedSnapshot.getLoadable(todoListState).valueOrThrow()
    ).toStrictEqual(todoList);
    expect(
      showUnCompletedSnapshot.getLoadable(todoListState).valueOrThrow().length
    ).toBe(4);
    expect(
      showUnCompletedSnapshot.getLoadable(filteredTodoListState).valueOrThrow()
        .length
    ).toBe(3);
  });

  it("should show correct stats", () => {
    const initialSnapshot = snapshot_UNSTABLE(({ set }) => {
      set(todoListState, todoList);
    });

    expect(
      initialSnapshot.getLoadable(todoListStatsState).valueOrThrow()
    ).toStrictEqual({
      totalNum: 4,
      totalCompletedNum: 1,
      totalUncompletedNum: 3,
      percentCompleted: 25,
    });
  });
});
