var http=require("http");
var shopData= [
        {id:1000,alt:"饼干",icon:"http://pic2.womai.com/upload/601/602/54301/57276/57276_0_pic270_1177.jpg",desc:"Danisa皇冠丹麦曲奇饼干908g",price:"89"},
        {id:1001,alt:"饼干",icon:"http://pic1.womai.com/upload/backend/2018/11/06/14/1541487135944.jpg"},
        {id:1002,alt:"饼干",icon:"http://pic3.womai.com/upload/601/602/51600/564393/564393_1_pic270_5762.jpg",desc:"绅士牌Planters精选大罐混合果",price:"89"},
        {id:1003,alt:"饼干",icon:"http://pic3.womai.com/upload/601/603/606/66102/496889/496894/625566/625566_1_pic270_5737.jpg",desc:"【中粮海外直采】Ocean Spray",price:"89"},
        {id:1004,alt:"饼干",icon:"http://pic1.womai.com/upload/601/603/606/66102/66108/496885/649132/649132_1_pic270_4442.jpg",desc:"Perrier巴黎水含天然矿泉水",price:"89"},
        {id:1006,alt:"饼干",icon:"http://pic1.womai.com/upload/601/603/606/6700/6702/10181557/10181557_1_pic270_6790.jpg",desc:"【中粮海外直采】柏思蜜",price:"89"},
        {id:1007,alt:"饼干",icon:"http://pic3.womai.com/upload/601/603/606/66102/214300/10261990/10261990_1_pic270_5649.jpg",desc:"【中粮海外直采】SIN YOON",price:"89"},

        {id:1008,alt:"饼干",icon:"http://pic1.womai.com/upload/601/603/606/66102/66104/570415/570415_1_pic270_4590.jpg",desc:"Danisa皇冠丹麦曲奇饼干908g",price:"89"},
        {id:1009,alt:"饼干",icon:"http://pic3.womai.com/upload/601/603/606/66102/66104/588795/588795_0_pic270_9755.jpg",desc:"Danisa皇冠丹麦曲奇饼干908g",price:"89"},
        {id:1010,alt:"饼干",icon:"http://pic2.womai.com/upload/601/603/606/66102/496890/496895/611240/611240_1_pic270_8688.jpg",desc:"Danisa皇冠丹麦曲奇饼干908g",price:"89"},
        {id:1011,alt:"饼干",icon:"http://pic3.womai.com/upload/601/603/606/66102/66108/496884/619146/619146_1_pic270_2014.jpg",desc:"绅士牌Planters精选大罐混合果",price:"89"},
        {id:1012,alt:"饼干",icon:"http://pic2.womai.com/upload/601/603/606/66102/214300/10532854/10532854_1_pic270_6194.jpg",desc:"【中粮海外直采】Ocean Spray",price:"89"},
        {id:1013,alt:"饼干",icon:"http://pic3.womai.com/upload/601/604/439208/10765845/10765845_0_pic270_9197.jpg",desc:"Perrier巴黎水含天然矿泉水",price:"89"},
        {id:1014,alt:"饼干",icon:"http://pic3.womai.com/upload/601/603/606/6060/6064/6082/588899/588899_1_pic270_8395.jpg",desc:"【中粮海外直采】柏思蜜",price:"89"},
        {id:1015,alt:"饼干",icon:"http://pic2.womai.com/upload/601/603/606/6060/6064/6082/588900/588900_1_pic270_658.jpg",desc:"绅士牌Planters精选大罐混合果",price:"89"},

        {id:1016,alt:"饼干",icon:"http://pic3.womai.com/upload/601/603/606/64306/280375/219300/219302/595096/595096_2_pic270_8155.jpg",desc:"Danisa皇冠丹麦曲奇饼干908g",price:"89"},
        {id:1017,alt:"饼干",icon:"http://pic1.womai.com/upload/backend/2018/11/06/14/1541487135944.jpg"},
        {id:1018,alt:"饼干",icon:"http://pic1.womai.com/upload/601/603/606/64306/280375/82817/219363/606484/606484_1_pic270_4740.jpg",desc:"绅士牌Planters精选大罐混合果",price:"89"},
        {id:1019,alt:"饼干",icon:"http://pic3.womai.com/upload/601/603/606/64306/280375/82402/82505/627180/627180_1_pic270_1461.jpg",desc:"【中粮海外直采】Ocean Spray",price:"89"},
        {id:1020,alt:"饼干",icon:"http://pic3.womai.com/upload/601/603/606/7500/7502/638999/638999_1_pic270_3474.jpg",desc:"Perrier巴黎水含天然矿泉水",price:"89"},
        {id:1021,alt:"饼干",icon:"http://pic3.womai.com/upload/601/603/606/64306/280375/219300/219302/644726/644726_1_pic270_4929.jpg",desc:"【中粮海外直采】柏思蜜",price:"89"},
        {id:1022,alt:"饼干",icon:"http://pic2.womai.com/upload/601/603/606/64306/280375/82402/82506/659244/659244_1_pic270_9400.jpg",desc:"【中粮海外直采】SIN YOON",price:"89"},

        {id:1023,alt:"饼干",icon:"http://pic1.womai.com/upload/601/603/606/64306/280375/82402/82505/584317/584317_1_pic270_899.jpg",desc:"Danisa皇冠丹麦曲奇饼干908g",price:"89"},
        {id:1024,alt:"饼干",icon:"http://pic2.womai.com/upload/601/603/606/64306/280375/219300/219301/599165/599165_1_pic270_9327.jpg",desc:"Danisa皇冠丹麦曲奇饼干908g",price:"89"},
        {id:1025,alt:"饼干",icon:"http://pic1.womai.com/upload/601/603/606/64306/280375/82402/219343/613819/613819_1_pic270_21.jpg",desc:"Danisa皇冠丹麦曲奇饼干908g",price:"89"},
        {id:1026,alt:"饼干",icon:"http://pic2.womai.com/upload/601/603/606/7500/7502/643740/643740_1_pic270_210.jpg",desc:"绅士牌Planters精选大罐混合果",price:"89"},
        {id:1027,alt:"饼干",icon:"http://pic1.womai.com/upload/601/603/606/64306/280375/82402/219341/659492/659492_1_pic270_9681.jpg",desc:"【中粮海外直采】Ocean Spray",price:"89"},
        {id:1028,alt:"饼干",icon:"http://pic2.womai.com/upload/601/604/439208/10760651/10760651_1_pic270_728.JPG",desc:"Perrier巴黎水含天然矿泉水",price:"89"},
        {id:1029,alt:"饼干",icon:"http://pic3.womai.com/upload/601/602/66008/523926/523926_1_pic270_9468.jpg",desc:"【中粮海外直采】柏思蜜",price:"89"},
        {id:1030,alt:"饼干",icon:"http://pic1.womai.com/upload/601/603/210641/210654/210656/550674/550674_0_pic270_190.jpg",desc:"绅士牌Planters精选大罐混合果",price:"89"}
    ];
var url=window.location.search.split("?")[1];
var id=url.split("&")[0].split("=")[1];
var item;
for(var i=0;i<shopData.length;i++){
    if(shopData[i].id==id) {
        item=shopData[i];
    }
}
var shoppingList=[];
var server=http.createServer(function (req,res) {
    var data="";
    req.on("data",function (d) {
        data+=d;
    });
    req.on("end",function () {
        var reqData=JSON.parse(decodeURIComponent(data));
        var resData={error:null};
        resData.type=reqData.type;
        switch (reqData.type){
            case 0:
                resData.result=addItemShop(reqData.item);
                break;

            case 4:
                resData.result=shopData;
                break;
            case 5:
                resData.result=shoppingList;
                break;
        }
        res.writeHead(200,{"Content-Type":"text/plane","Access-Control-Allow-Origin":"*"});
        res.write(encodeURIComponent(JSON.stringify(resData)));
        res.end();
    })
});
server.listen(3008,"10.9.42.213",function () {
    console.log("服务已开启");
});


function addItemShop(item) {
    var arr=shoppingList.filter(function (t) {
        return t.id===item.id;
    });
    if(arr.length===0){
        var obj={select:false};
        Object.assign(obj,item);
        item.nums=url.split("&")[1].split("=")[1];
        obj.sum=item.nums*item.price;
        obj.deleted=false;
        shoppingList.push(obj);
    }else{
        arr[0].nums++;
        arr[0].sum=arr[0].nums*arr[0].price;
    }
    // localStorage.shopData+=JSON.stringify(shoppingList);
    return shoppingList;
}
