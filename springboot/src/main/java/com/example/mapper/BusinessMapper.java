package com.example.mapper;

import com.example.entity.Business;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
/**
 * 操作商家相关数据接口
 */
public interface BusinessMapper {
    /**
     * 新增
     */
    int insert(Business business);
    /**
     * 删除
     */
    void deleteById(Integer id);
    /**
     * 修改
     */
    int updateById(Business business);
    /**
     * 根据ID查询
     */
    Business selectById(Integer id);
    /**
     * 查询所有
     */
    List<Business> selectAll(Business business);

    @Select("select * from business")
    public List<Business> selectAllCombined();
    @Select("select * from business order by score desc ")
    public List<Business> selectAllScore();
    @Select("select * from business order by sale_volume desc ")
    public List<Business> selectAllSale();

    public List<Business> search(@Param("key") String key);

}
