package ToDoList.repo;

import ToDoList.domain.TodoDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepo extends JpaRepository<TodoDTO, Long> {
}
