import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

interface Todo {
    id: number;
    title: string;
    content: string;
}

function TodoTable() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<Todo>({
        id: 0,
        title: '',
        content: '',
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setNewTodo({ ...newTodo, [name]: value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (newTodo.title === '') {
            alert('타이틀을 입력해주세요.');
            return;
        }

        if (newTodo.title.length > 20) {
            alert('타이틀은 20자를 초과할 수 없습니다.');
            return;
        }

        const newId = todos.length + 1;
        const newRow: Todo = { ...newTodo, id: newId };
        setTodos([...todos, newRow]);
        setNewTodo({ ...newTodo, id: newId, title: '', content: '' });
    };

    const handleDelete = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={newTodo.title}
                        onChange={handleInputChange}
                        style={{ width: '50%' }}
                    />
                </Form.Group>
                <p></p>
                <Form.Group controlId="formContent" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        name="content"
                        value={newTodo.content}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px', marginBottom: '15px' }}>
                    <Button variant="primary" type="submit">
                        제출
                    </Button>
                </div>
            </Form>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th style={{ width: '20%' }}>To Do 제목</th>
                    <th>To Do 내용</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.content}</td>
                        <td>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleDelete(todo.id)}
                            >
                                삭제
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
}

export default TodoTable;
