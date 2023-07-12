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
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Form.Control
                        type="text"
                        name="title"
                        value={newTodo.title}
                        onChange={handleInputChange}
                        style={{ width: '50%' }} // 타이틀 입력 필드의 크기를 줄이는 스타일 추가
                    />
                    </div>
                </Form.Group>
                <Form.Group controlId="formContent">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea" // 컨텐츠 입력 필드를 textarea로 변경
                        rows={5} // textarea의 높이 조정
                        name="content"
                        value={newTodo.content}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ marginTop: '15px', marginBottom: '15px' }}>
                    제출
                </Button>
            </Form>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>To Do 제목</th>
                    <th>To Do 내용</th>
                    <th>동작</th>
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
