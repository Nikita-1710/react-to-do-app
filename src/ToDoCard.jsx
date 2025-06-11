import { Trash2 as TrashIcon } from 'lucide-react'

const TAST_PRIORITY_CLASSES = {
    "High": "border-t-6 border-t-green-500 ",
    "Medium": "border-t-6 border-t-yellow-500 ",
    "Low": "border-t-6 border-t-red-500 ",
}

const BADGE_PRIORITy_CLASSES = {
    "High": "text-green-500 border-green-500",
    "Medium": "text-yellow-500 border-yellow-500",
    "Low": "text-red-500 border-red-500",
}

function ToDoCard({ task, priority, onDelete, index }) {
    return (
        <div
            className={`bg-white p-5 m-5 rounded-md shadow-lg border-1 border-gray-200 relative ${TAST_PRIORITY_CLASSES[priority]}`}>

            <span className={`block w-[100px] border-1 text-center rounded-full  ${BADGE_PRIORITy_CLASSES[priority]}`}>{priority}</span>

            <h1 className="mt-2 text-xl">{task}</h1>

            <TrashIcon
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => {
                    onDelete(index);
                }} />
        </div>
    )
}

export default ToDoCard