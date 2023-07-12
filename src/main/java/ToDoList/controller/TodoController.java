package ToDoList.controller;

import ToDoList.domain.TodoDTO;
import ToDoList.request.TodoCreate;
import ToDoList.service.TodoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class TodoController {
    private final TodoService todoService;

    @PostMapping("/create")
    public void create(@RequestBody TodoCreate request){
        todoService.create(request);
    }

    @GetMapping("/todos")
    public List<TodoDTO> getAll() {
        return todoService.getAll();
    }
}
