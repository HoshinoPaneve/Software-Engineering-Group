package com.example.mapper;

import com.example.entity.Food;
import com.example.entity.Menu;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 操作menu相关数据接口
 */
public interface MenuMapper {
    /**
     * 新增
     */
    int insert(Menu menu);
    /**
     * 删除
     */
    void deleteById(Integer id);
    /**
     * 修改
     */
    int updateById(Menu menu);
    /**
     * 根据ID查询
     */
    Menu selectById(Integer id);
    /**
     * 查询所有
     */
    List<Menu> selectAll(Menu menu);

    @Select("select * from menu where bus_id=#{id}")
    public List<Menu> selectByBusId(@Param("id") int id);
}

