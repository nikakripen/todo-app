import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.scss";
import { useDispatch } from "react-redux";
import { reorder } from "../../features/tasks/tasksSlice";

const TaskList = ({ tasksList = [], isDragDisabled = false }) => {
  const dispatch = useDispatch();
  const taskItems = tasksList.map((task, index) => (
    <Draggable
      key={task.id}
      index={index}
      draggableId={task.id}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          class={styles.listItem}
        >
          <TaskItem task={task} />
        </li>
      )}
    </Draggable>
  ));
  const handleDragEnd = ({ destination, source }) => {
    dispatch(
      reorder({ startIndex: source.index, endIndex: destination.index })
    );
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={styles.listContainer}
          >
            {taskItems}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
