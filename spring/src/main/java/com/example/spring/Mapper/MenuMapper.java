package com.example.spring.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.spring.Pojo.Menu;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuMapper extends BaseMapper<Menu> {

    @Select("select * from menu where bus_id=#{id}")
    public List<Menu> selectTypeByBus(@Param("id") int id);
}
