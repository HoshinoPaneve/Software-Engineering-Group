package com.example.spring.Controller;

import com.example.spring.Mapper.FoodMapper;
import com.example.spring.Pojo.Food;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/food")
public class FoodController {
    @Resource
    private FoodMapper foodMapper;

    @GetMapping("/select")
    public List<Food> selectByBusID(int id){
        return foodMapper.selectByBusId(id);
    }

}
