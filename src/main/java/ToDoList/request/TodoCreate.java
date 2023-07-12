package ToDoList.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TodoCreate {
    @NotBlank(message = "제목을 입력해주세요")
    private String title;
    @NotBlank(message = "내용을 입력해주세요")
    private String content;
    private String status;

    @Builder
    public TodoCreate(String title, String content, String status) {
        this.title = title;
        this.content = content;
        this.status = status;
    }
}
