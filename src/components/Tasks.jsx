import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Tasks({tasks,onTaskClick,onDeletTaskClick}) {
  const navigate = useNavigate()

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set("title",task.title)
    query.set("description",task.description)
    navigate(`/task?${query.toString()}`)
  }
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`w-full bg-slate-400 text-left text-white p-2 rounded-md flex items-center gap-2 ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted && <CheckIcon/>}
              {task.title}
            </button>
            <Button onClick={()=>onSeeDetailsClick(task)} >
              <ChevronRightIcon />
            </Button>
            <Button
              onClick={() => onDeletTaskClick(task.id)}
            >
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
