import { TasksButtons, Button } from "./styled.js";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <TasksButtons>
        {tasks.length > 0 && (
            <>
            <Button onClick={toggleHideDone}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </Button>
            </>
        )}
        </TasksButtons>
);


export default Buttons;