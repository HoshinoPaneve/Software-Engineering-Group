package com.example.spring.Controller;

import com.example.spring.Mapper.MenuMapper;
import com.example.spring.Pojo.Menu;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {
    @Resource
    private MenuMapper menuMapper;

    @GetMapping("/select")
    public List<Menu> select(int id){
        return menuMapper.selectTypeByBus(id);
    }
}
