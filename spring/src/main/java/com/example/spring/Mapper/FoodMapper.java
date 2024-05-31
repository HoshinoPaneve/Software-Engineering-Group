package com.example.spring.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.spring.Pojo.Food;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodMapper extends BaseMapper<Food> {
    @Select("select * from food where bus_id=#{id}")
    public List<Food> selectByBusId(@Param("id") int id);

}
