package com.example.spring.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.spring.Pojo.Business;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BusinessMapper extends BaseMapper<Business> {



    @Select("select * from business")
    public List<Business> selectAllCombined();
    @Select("select * from business order by score desc ")
    public List<Business> selectAllScore();
    @Select("select * from business order by sale_volume desc ")
    public List<Business> selectAllSale();

    public List<Business> search(@Param("key") String key);
}
