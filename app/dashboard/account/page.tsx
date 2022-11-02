interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(res.json());
        }, 2000);
    });
}

export default async function AccountPage() {
    const table = await getData();

    return (
        <ul>
            {table.map((todo: Todo) => (
                <li key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
    )
    return <h1>This is my account page</h1>;
}