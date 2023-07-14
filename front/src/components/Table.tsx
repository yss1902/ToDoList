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

    // 사용자 입력 처리함수. <input or textarea>는 'name', 'value' 라는 프로퍼티 소유.
    // 이는 event.target.name과 event.target.value로 입력값을 가져온다.
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setNewTodo({ ...newTodo, [name]: value });
    };

    // <form>태그는 새로고침 기본동작이 있으므로 리턴값은 이를 방지한다.
    // 매개변수 event -> 이벤트 객체. 브라우저 입출력시, '이벤트 핸들러 함수' 발동 (매개변수로 '이벤트 객체')
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

    // 삭제, 식별자는 id, 기존 todos배열에서 파라미터 id와 todos배열 id가 같지 않은 줄은 새로운 배열을 만든다.
    // 파라미터 id와 todos배열 id가 같은 것은 삭제되는 것처럼 보인다 (업데이트 됐으므로)
    const handleDelete = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    /*
    * onSubmit은 제출 이벤트가 발생했을 때 실행되어야 할 함수를 지정
    *
    * */
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
