package ToDoList.controller;

import ToDoList.repo.TodoRepo;
import ToDoList.request.TodoCreate;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@AutoConfigureMockMvc
@SpringBootTest
class TodoControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private TodoRepo todoRepo;
    @Autowired
    private ObjectMapper objectMapper;
    @BeforeEach
    void clean() {
        todoRepo.deleteAll();
    }
    @Test
    @DisplayName("/create 요청시 리턴 내용을 출력한다.")
    void test1() throws Exception {
        //given
        TodoCreate request = TodoCreate.builder()
                .title("할일제목")
                .content("할일내용")
                .build();
        String json = objectMapper.writeValueAsString(request);
        //expected
        mockMvc.perform(post("/create")
                        .contentType(APPLICATION_JSON)
                        .content(json)
                )
                .andExpect(status().isOk())
                .andDo(print());
    }


}