package com.example.spring.Controller;

import com.example.spring.Mapper.BusinessMapper;
import com.example.spring.Pojo.Business;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/business")
public class BusinessController {
    @Autowired
    private BusinessMapper businessMapper;

    @GetMapping("/all")
    public List<Business> selectAllCombined(){
        return businessMapper.selectAllCombined();
    }

    @GetMapping("/score")
    public List<Business> selectAllScore(){
        return businessMapper.selectAllScore();
    }
    @GetMapping("/sale")
    public List<Business> selectAllSale(){
        return businessMapper.selectAllSale();
    }

    @GetMapping("/search")
    public List<Business> search(String key){
        key="%"+key+"%";
        return businessMapper.search(key);
    }


}
