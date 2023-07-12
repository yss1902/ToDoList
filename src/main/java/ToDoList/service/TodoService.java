package ToDoList.service;

import ToDoList.domain.TodoDTO;
import ToDoList.repo.TodoRepo;
import ToDoList.request.TodoCreate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepo todoRepo;

    //todo 추가
    public void create(TodoCreate todoCreate) {
        TodoDTO todoDTO = TodoDTO.builder()
                .title(todoCreate.getTitle())
                .content(todoCreate.getContent())
                .status("progress")
                .build();
        todoRepo.save(todoDTO);
    }
    //todo 리스트
    public List<TodoDTO> getAll() {
        return todoRepo.findAll();
    }

}
