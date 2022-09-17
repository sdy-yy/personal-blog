import Mock from "mockjs";
Mock.mock("/api/home/img", "get", Mock.mock({
    code: 0,
    msg: 'success',
    data: ["https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0167ec5a0c2ed7a801204a0e669833.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665984895&t=efeb7af639e7a24fb50fd5a0949648fd",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.nipic.com%2F20090526%2F2539885_133226059_2.gif&refer=http%3A%2F%2Fpic3.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665984845&t=8899f135291bb0bfe36b5df024b2bb84",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012aa6582d5788a84a0d304f27bd43.jpg%403000w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665984895&t=47f9b8cffa1b2c717e13648b611eb2de"]
}))