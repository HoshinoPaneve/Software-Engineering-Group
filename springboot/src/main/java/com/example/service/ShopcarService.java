package com.example.service;

import com.example.common.Result;
import com.example.entity.Records;
import com.example.entity.Shopcar;
import com.example.mapper.RecordsMapper;
import com.example.mapper.ShopcarMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * 购物车业务处理
 **/
@Service
public class ShopcarService {

    @Resource
    private ShopcarMapper shopcarMapper;

    /**
     * 新增
     */
    public void add(Shopcar shopcar) {
        if (shopcar.getNumber()>1){
            shopcarMapper.update(shopcar);
        }
        else {
            shopcarMapper.insert(shopcar);
        }
    }

    /**
     * 查询所有
     */
    public List<Shopcar> selectAll(Shopcar shopcar) {
        return shopcarMapper.selectAll(shopcar);
    }
    /**
     * 清空购物车（根据用户id删除）
     */
    public void deleteAll(Shopcar shopcar) {
        if (shopcar.getNumber()==null||shopcar.getNumber()== 0){
            shopcarMapper.deleteAll(shopcar);
        }
        else {
            shopcarMapper.update(shopcar);
        }
    }
}
