package com.example.spring.Pojo;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

public class Business {

    @TableId(type = IdType.AUTO)
    private Integer id;
    private String name;
    private int saleVolume;
    private float score;
    private String image;
    private String address;
    private String tel;
    private int beginExpense;
    private int deliverExpense;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSaleVolume() {
        return saleVolume;
    }

    public void setSaleVolume(int sale_volume) {
        this.saleVolume = sale_volume;
    }

    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public int getBeginExpense() {
        return beginExpense;
    }

    public void setBeginExpense(int beginexpense) {
        this.beginExpense = beginexpense;
    }

    public int getDeliverExpense() {
        return deliverExpense;
    }
    public void setDeliverExpense(int deliverexpense) {
        this.deliverExpense = deliverexpense;
    }
}
