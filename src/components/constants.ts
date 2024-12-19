export enum ButtonNames {
    addanewtodo = "Add a new to-do",
    allToDo = "All",
    activeToDo = "To-Do",
    completedToDo = "Completed"
}


export enum TableColumnNames {
    task = "Task",
    description = "Description",
    category = "Category",
    time = "When",
    priority = "Priority",
    fulfillment = "Fulfillment",
}
export const mockToDoListData =
    [
        {
            "task": "Write a report",
            "description": "Analyze the quarterly sales data and create a detailed report.",
            "category": "Work",
            "time": "2023-11-22T10:00:00Z",
            "priority": "High",
            "fulfillment": "Completed"
        },
        {
            "task": "Grocery Shopping",
            "description": "Buy milk, eggs, bread, and fruits.",
            "category": "Personal",
            "time": "2023-11-23T15:00:00Z",
            "priority": "Medium",
            "fulfillment": "Pending"
        },
        {
            "task": "Learn React",
            "description": "Complete the React tutorial and build a simple app.",
            "category": "Learning",
            "time": "2023-11-24T18:00:00Z",
            "priority": "Low",
            "fulfillment": "In Progress"
        }
    ]
