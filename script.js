const spots = [
  { name: '布达拉宫', province: '西藏', lng: 91.13, lat: 29.66, visited: false },
  { name: '丽江古城', province: '云南', lng: 100.23, lat: 26.86, visited: false },
  { name: '杭州西湖', province: '浙江', lng: 120.15, lat: 30.28, visited: false },
  { name: '大连星海广场', province: '辽宁', lng: 121.58, lat: 38.92, visited: false },
  { name: '新疆喀纳斯', province: '新疆', lng: 87.08, lat: 48.70, visited: false },
  { name: '乌镇', province: '浙江', lng: 120.45, lat: 30.75, visited: false },
  { name: '九寨沟', province: '四川', lng: 103.93, lat: 33.14, visited: false },
  { name: '湘西凤凰古城', province: '湖南', lng: 109.41, lat: 27.92, visited: false },
  { name: '南京夫子庙', province: '江苏', lng: 118.79, lat: 32.03, visited: false },
  { name: '乐山大佛', province: '四川', lng: 103.77, lat: 29.55, visited: false },
  { name: '可可西里', province: '青海', lng: 92.80, lat: 35.20, visited: false },
  { name: '普陀山', province: '浙江', lng: 122.30, lat: 29.98, visited: false },
  { name: '三峡大坝', province: '湖北', lng: 111.28, lat: 30.80, visited: false },
  { name: '七彩丹霞', province: '甘肃', lng: 100.23, lat: 39.25, visited: false },
  { name: '珠穆朗玛峰', province: '西藏', lng: 86.93, lat: 27.98, visited: false },
  { name: '莫高窟', province: '甘肃', lng: 94.87, lat: 40.15, visited: false },
  { name: '西双版纳', province: '云南', lng: 101.50, lat: 22.00, visited: false },
  { name: '千岛湖', province: '浙江', lng: 119.10, lat: 29.60, visited: false },
  { name: '呼伦贝尔', province: '内蒙古', lng: 119.75, lat: 49.20, visited: false },
  { name: '长白山天池', province: '吉林', lng: 128.00, lat: 42.00, visited: false },
  { name: '稻城亚丁', province: '四川', lng: 100.30, lat: 28.50, visited: false },
  { name: '泸沽湖', province: '云南', lng: 100.80, lat: 27.70, visited: false },
  { name: '张家界', province: '湖南', lng: 110.48, lat: 29.11, visited: false },
  { name: '黄山', province: '安徽', lng: 118.18, lat: 30.29, visited: false },
  { name: '峨眉山', province: '四川', lng: 103.45, lat: 29.56, visited: false },
  { name: '上海外滩', province: '上海', lng: 121.49, lat: 31.24, visited: false },
  { name: '黄果树瀑布', province: '贵州', lng: 105.62, lat: 25.98, visited: false },
  { name: '大理洱海', province: '云南', lng: 100.19, lat: 25.60, visited: false },
  { name: '少林寺', province: '河南', lng: 113.10, lat: 34.47, visited: false },
  { name: '青海湖', province: '青海', lng: 100.10, lat: 36.90, visited: false },
  { name: '日月潭', province: '台湾', lng: 120.90, lat: 23.85, visited: false },
  { name: '西安兵马俑', province: '陕西', lng: 109.27, lat: 34.38, visited: false },
  { name: '香格里拉', province: '云南', lng: 99.72, lat: 27.80, visited: false },
  { name: '帕米尔高原', province: '新疆', lng: 75.20, lat: 38.50, visited: false },
  { name: '华山', province: '陕西', lng: 110.08, lat: 34.49, visited: false },
  { name: '壶口瀑布', province: '陕西', lng: 110.50, lat: 36.08, visited: false },
  { name: '五大连池', province: '黑龙江', lng: 126.00, lat: 48.50, visited: false },
  { name: '北戴河', province: '河北', lng: 119.57, lat: 39.85, visited: false },
  { name: '三清山', province: '江西', lng: 118.02, lat: 28.90, visited: false },
  { name: '泰山', province: '山东', lng: 117.12, lat: 36.26, visited: false },
  { name: '大兴安岭', province: '黑龙江', lng: 123.00, lat: 52.00, visited: false },
  { name: '三亚', province: '海南', lng: 109.51, lat: 18.24, visited: false },
  { name: '避暑山庄', province: '河北', lng: 117.95, lat: 40.97, visited: false },
  { name: '恒山', province: '山西', lng: 113.67, lat: 39.71, visited: false },
  { name: '云冈石窟', province: '山西', lng: 113.20, lat: 40.08, visited: false },
  { name: '桂林阳朔', province: '广西', lng: 110.47, lat: 24.78, visited: false },
  { name: '湖北恩施', province: '湖北', lng: 109.48, lat: 30.27, visited: false },
  { name: '鼓浪屿', province: '福建', lng: 118.06, lat: 24.46, visited: false },
  { name: '梅里雪山', province: '云南', lng: 98.60, lat: 28.20, visited: false },
  { name: '赛里木湖', province: '新疆', lng: 81.12, lat: 44.53, visited: false },
  { name: '伊犁那拉提草原', province: '新疆', lng: 85.92, lat: 43.32, visited: false },
  { name: '独库公路', province: '新疆', lng: 83.50, lat: 41.80, visited: false },
  { name: '乌尔禾魔鬼城', province: '新疆', lng: 85.60, lat: 46.28, visited: false },
  { name: '喀拉峻草原', province: '新疆', lng: 83.05, lat: 42.92, visited: false },
  { name: '琼库什台', province: '新疆', lng: 83.25, lat: 42.78, visited: false },
  { name: '慕士塔格峰', province: '新疆', lng: 75.10, lat: 38.10, visited: false },
  { name: '纳木错', province: '西藏', lng: 90.67, lat: 30.77, visited: false },
  { name: '羊卓雍措', province: '西藏', lng: 90.70, lat: 29.08, visited: false },
  { name: '南迦巴瓦峰', province: '西藏', lng: 95.05, lat: 29.62, visited: false },
  { name: '冈仁波齐', province: '西藏', lng: 81.30, lat: 31.00, visited: false },
  { name: '萨普神山', province: '西藏', lng: 94.95, lat: 31.05, visited: false },
  { name: '林芝桃花沟', province: '西藏', lng: 94.35, lat: 29.65, visited: false },
  { name: '羊八井', province: '西藏', lng: 90.55, lat: 30.15, visited: false },
  { name: '四姑娘山', province: '四川', lng: 102.90, lat: 30.95, visited: false },
  { name: '毕棚沟', province: '四川', lng: 102.95, lat: 31.30, visited: false },
  { name: '若尔盖草原', province: '四川', lng: 102.90, lat: 33.50, visited: false },
  { name: '党岭', province: '四川', lng: 101.55, lat: 30.25, visited: false },
  { name: '丹巴藏寨', province: '四川', lng: 101.85, lat: 30.85, visited: false },
  { name: '牛背山', province: '四川', lng: 102.25, lat: 29.65, visited: false },
  { name: '海螺沟', province: '四川', lng: 102.08, lat: 29.60, visited: false },
  { name: '玉龙雪山', province: '云南', lng: 100.25, lat: 27.05, visited: false },
  { name: '蓝月谷', province: '云南', lng: 100.23, lat: 27.03, visited: false },
  { name: '元阳梯田', province: '云南', lng: 102.80, lat: 23.10, visited: false },
  { name: '普者黑', province: '云南', lng: 104.15, lat: 24.10, visited: false },
  { name: '丙中洛', province: '云南', lng: 98.50, lat: 28.55, visited: false },
  { name: '沙溪古镇', province: '云南', lng: 99.85, lat: 26.10, visited: false },
  { name: '南极洛', province: '云南', lng: 98.95, lat: 27.75, visited: false },
  { name: '荔波小七孔', province: '贵州', lng: 107.90, lat: 25.35, visited: false },
  { name: '梵净山', province: '贵州', lng: 108.85, lat: 27.90, visited: false },
  { name: '肇兴侗寨', province: '贵州', lng: 109.25, lat: 25.90, visited: false },
  { name: '加榜梯田', province: '贵州', lng: 108.75, lat: 25.75, visited: false },
  { name: '德天瀑布', province: '广西', lng: 106.95, lat: 22.90, visited: false },
  { name: '龙脊梯田', province: '广西', lng: 110.05, lat: 25.75, visited: false },
  { name: '张掖七彩丹霞', province: '甘肃', lng: 100.40, lat: 39.20, visited: false },
  { name: '鸣沙山月牙泉', province: '甘肃', lng: 94.70, lat: 40.15, visited: false },
  { name: '茶卡盐湖', province: '青海', lng: 99.05, lat: 36.80, visited: false },
  { name: '茫崖翡翠湖', province: '青海', lng: 90.50, lat: 38.25, visited: false },
  { name: '扎尕那', province: '甘肃', lng: 103.05, lat: 34.30, visited: false },
  { name: '神农架', province: '湖北', lng: 110.60, lat: 31.75, visited: false },
  { name: '张家界天门山', province: '湖南', lng: 110.45, lat: 29.18, visited: false },
  { name: '故宫', province: '北京', lng: 116.39, lat: 39.91, visited: false },
  { name: '颐和园', province: '北京', lng: 116.27, lat: 39.99, visited: false },
  { name: '天坛', province: '北京', lng: 116.41, lat: 39.88, visited: false },
  { name: '南锣鼓巷', province: '北京', lng: 116.40, lat: 39.94, visited: false },
  { name: '恭王府', province: '北京', lng: 116.38, lat: 39.93, visited: false },
  { name: '龙门石窟', province: '河南', lng: 112.45, lat: 34.62, visited: false },
  { name: '平遥古城', province: '山西', lng: 112.15, lat: 37.20, visited: false },
  { name: '大雁塔', province: '陕西', lng: 108.95, lat: 34.22, visited: false },
  { name: '大唐不夜城', province: '陕西', lng: 108.95, lat: 34.22, visited: false },
  { name: '华清池', province: '陕西', lng: 109.20, lat: 34.33, visited: false },
  { name: '苏州拙政园', province: '江苏', lng: 120.62, lat: 31.32, visited: false },
  { name: '留园', province: '江苏', lng: 120.61, lat: 31.32, visited: false },
  { name: '南京中山陵', province: '江苏', lng: 118.80, lat: 32.06, visited: false },
  { name: '杭州灵隐寺', province: '浙江', lng: 120.10, lat: 30.31, visited: false },
  { name: '绍兴鲁迅故里', province: '浙江', lng: 120.58, lat: 30.01, visited: false },
  { name: '福建土楼', province: '福建', lng: 117.05, lat: 24.65, visited: false },
  { name: '重庆洪崖洞', province: '重庆', lng: 106.58, lat: 29.41, visited: false },
  { name: '大足石刻', province: '重庆', lng: 105.75, lat: 29.70, visited: false },
  { name: '成都武侯祠', province: '四川', lng: 104.04, lat: 30.66, visited: false },
  { name: '杜甫草堂', province: '四川', lng: 104.02, lat: 30.66, visited: false },
  { name: '曲阜三孔', province: '山东', lng: 116.98, lat: 35.59, visited: false },
  { name: '上海迪士尼', province: '上海', lng: 121.78, lat: 31.14, visited: false },
  { name: '广州塔', province: '广东', lng: 113.33, lat: 23.11, visited: false },
  { name: '深圳世界之窗', province: '广东', lng: 113.97, lat: 22.54, visited: false },
  { name: '解放碑', province: '重庆', lng: 106.51, lat: 29.56, visited: false },
  { name: '长沙橘子洲头', province: '湖南', lng: 112.93, lat: 28.22, visited: false },
  { name: '武汉黄鹤楼', province: '湖北', lng: 114.31, lat: 30.55, visited: false },
  { name: '青岛八大关', province: '山东', lng: 120.33, lat: 36.05, visited: false },
  { name: '周庄', province: '江苏', lng: 120.58, lat: 31.10, visited: false },
  { name: '同里', province: '江苏', lng: 120.65, lat: 31.15, visited: false },
  { name: '西塘', province: '浙江', lng: 120.52, lat: 30.85, visited: false },
  { name: '南浔', province: '浙江', lng: 120.45, lat: 30.87, visited: false },
  { name: '甪直', province: '江苏', lng: 120.70, lat: 31.20, visited: false },
  { name: '宏村', province: '安徽', lng: 117.92, lat: 30.10, visited: false },
  { name: '西递', province: '安徽', lng: 117.95, lat: 30.15, visited: false },
  { name: '婺源篁岭', province: '江西', lng: 117.80, lat: 29.35, visited: false },
  { name: '呈坎', province: '安徽', lng: 118.25, lat: 29.95, visited: false },
  { name: '云水谣古镇', province: '福建', lng: 117.00, lat: 24.55, visited: false },
  { name: '开平碉楼', province: '广东', lng: 112.60, lat: 22.35, visited: false },
  { name: '八达岭长城', province: '北京', lng: 116.01, lat: 40.36, visited: false },
  { name: '天安门广场', province: '北京', lng: 116.40, lat: 39.91, visited: false },
  { name: '九华山', province: '安徽', lng: 117.84, lat: 30.58, visited: false },
  { name: '衡山', province: '湖南', lng: 112.73, lat: 27.28, visited: false },
  { name: '嵩山', province: '河南', lng: 113.00, lat: 34.47, visited: false },
  { name: '庐山', province: '江西', lng: 115.90, lat: 29.60, visited: false },
  { name: '黄龙', province: '四川', lng: 104.10, lat: 32.75, visited: false },
  { name: '新都桥', province: '四川', lng: 101.50, lat: 30.05, visited: false },
  { name: '可可托海', province: '新疆', lng: 89.93, lat: 47.22, visited: false },
  { name: '吐鲁番火焰山', province: '新疆', lng: 89.15, lat: 42.93, visited: false },
  { name: '翡翠湖', province: '青海', lng: 93.30, lat: 37.85, visited: false },
  { name: '塔尔寺', province: '青海', lng: 101.55, lat: 36.32, visited: false },
  { name: '雅鲁藏布大峡谷', province: '西藏', lng: 95.05, lat: 29.25, visited: false },
  { name: '石林', province: '云南', lng: 103.25, lat: 24.87, visited: false },
  { name: '镇远古镇', province: '贵州', lng: 108.48, lat: 27.05, visited: false },
  { name: '武当山', province: '湖北', lng: 111.05, lat: 32.40, visited: false },
  { name: '岳阳楼', province: '湖南', lng: 113.15, lat: 29.34, visited: false },
  { name: '雁荡山', province: '浙江', lng: 120.95, lat: 28.20, visited: false },
  { name: '武夷山', province: '福建', lng: 117.98, lat: 27.75, visited: false },
  { name: '东山岛', province: '福建', lng: 117.40, lat: 23.70, visited: false },
  { name: '霞浦', province: '福建', lng: 120.00, lat: 26.85, visited: false },
  { name: '青岛崂山', province: '山东', lng: 120.60, lat: 36.15, visited: false },
  { name: '威海刘公岛', province: '山东', lng: 122.42, lat: 37.50, visited: false },
  { name: '蓬莱阁', province: '山东', lng: 120.75, lat: 37.80, visited: false },
  { name: '悬空寺', province: '山西', lng: 113.48, lat: 39.66, visited: false },
  { name: '老君山', province: '河南', lng: 111.50, lat: 33.70, visited: false },
  { name: '开封清明上河园', province: '河南', lng: 114.35, lat: 34.80, visited: false },
  { name: '莫干山', province: '浙江', lng: 119.85, lat: 30.55, visited: false },
  { name: '徽州古城', province: '安徽', lng: 118.45, lat: 29.80, visited: false },
  { name: '武功山', province: '江西', lng: 114.20, lat: 27.55, visited: false },
  { name: '龙虎山', province: '江西', lng: 116.90, lat: 28.25, visited: false },
  { name: '岳麓山', province: '湖南', lng: 112.93, lat: 28.17, visited: false },
  { name: '海陵岛', province: '广东', lng: 111.95, lat: 21.55, visited: false },
  { name: '三亚亚龙湾', province: '海南', lng: 109.50, lat: 18.30, visited: false },
  { name: '天涯海角', province: '海南', lng: 109.21, lat: 18.21, visited: false },
  { name: '万宁', province: '海南', lng: 110.35, lat: 18.80, visited: false },
  { name: '分界洲岛', province: '海南', lng: 110.10, lat: 18.50, visited: false },
  { name: '雪乡', province: '黑龙江', lng: 128.50, lat: 44.30, visited: false },
  { name: '镜泊湖', province: '黑龙江', lng: 128.85, lat: 44.35, visited: false },
  { name: '漠河', province: '黑龙江', lng: 122.50, lat: 52.90, visited: false },
  { name: '阿尔山', province: '内蒙古', lng: 119.95, lat: 47.25, visited: false },
  { name: '苏州虎丘', province: '江苏', lng: 120.63, lat: 31.35, visited: false },
  { name: '苏州寒山寺', province: '江苏', lng: 120.58, lat: 31.32, visited: false },
  { name: '扬州瘦西湖', province: '江苏', lng: 119.43, lat: 32.39, visited: false },
  { name: '南京明孝陵', province: '江苏', lng: 118.80, lat: 32.04, visited: false },
  { name: '无锡灵山大佛', province: '江苏', lng: 120.26, lat: 31.40, visited: false },
  { name: '镇江金山寺', province: '江苏', lng: 119.44, lat: 32.20, visited: false },
  { name: '常熟沙家浜', province: '江苏', lng: 120.71, lat: 31.64, visited: false },
  { name: '宁波天一阁', province: '浙江', lng: 121.55, lat: 29.87, visited: false },
  { name: '宁波老外滩', province: '浙江', lng: 121.55, lat: 29.87, visited: false },
  { name: '绍兴沈园', province: '浙江', lng: 120.58, lat: 30.01, visited: false },
  { name: '湖州南浔古镇', province: '浙江', lng: 120.45, lat: 30.87, visited: false },
  { name: '丽水古堰画乡', province: '浙江', lng: 119.92, lat: 28.45, visited: false },
  { name: '台州天台山', province: '浙江', lng: 121.03, lat: 29.15, visited: false },
  { name: '衢州江郎山', province: '浙江', lng: 118.62, lat: 28.55, visited: false },
  { name: '合肥三河古镇', province: '安徽', lng: 117.23, lat: 31.60, visited: false },
  { name: '安庆天柱山', province: '安徽', lng: 116.35, lat: 30.65, visited: false },
  { name: '婺源江湾', province: '江西', lng: 117.85, lat: 29.30, visited: false },
  { name: '景德镇瑶里古镇', province: '江西', lng: 117.55, lat: 29.45, visited: false },
  { name: '上饶望仙谷', province: '江西', lng: 118.00, lat: 28.25, visited: false },
  { name: '抚州流坑古村', province: '江西', lng: 116.20, lat: 27.35, visited: false },
  { name: '济南趵突泉', province: '山东', lng: 117.00, lat: 36.67, visited: false },
  { name: '青岛栈桥', province: '山东', lng: 120.33, lat: 36.06, visited: false },
  { name: '烟台养马岛', province: '山东', lng: 121.50, lat: 37.50, visited: false },
  { name: '威海成山头', province: '山东', lng: 122.65, lat: 37.38, visited: false },
  { name: '青州古城', province: '山东', lng: 118.48, lat: 36.40, visited: false },
  { name: '聊城光岳楼', province: '山东', lng: 115.97, lat: 36.40, visited: false },
  { name: '邯郸广府古城', province: '河北', lng: 114.50, lat: 36.60, visited: false },
  { name: '秦皇岛山海关', province: '河北', lng: 119.70, lat: 39.98, visited: false },
  { name: '唐山清东陵', province: '河北', lng: 117.93, lat: 40.13, visited: false },
  { name: '保定野三坡', province: '河北', lng: 115.45, lat: 39.45, visited: false },
  { name: '张家口坝上草原', province: '河北', lng: 114.80, lat: 41.45, visited: false },
  { name: '忻州雁门关', province: '山西', lng: 112.85, lat: 39.35, visited: false },
  { name: '临汾尧庙', province: '山西', lng: 111.50, lat: 36.08, visited: false },
  { name: '运城盐湖', province: '山西', lng: 110.95, lat: 35.05, visited: false },
  { name: '三门峡地坑院', province: '河南', lng: 111.15, lat: 34.75, visited: false },
  { name: '开封龙亭', province: '河南', lng: 114.35, lat: 34.80, visited: false },
  { name: '安阳殷墟', province: '河南', lng: 114.35, lat: 36.10, visited: false },
  { name: '武汉东湖', province: '湖北', lng: 114.32, lat: 30.54, visited: false },
  { name: '武汉户部巷', province: '湖北', lng: 114.31, lat: 30.55, visited: false },
  { name: '宜昌三峡人家', province: '湖北', lng: 110.85, lat: 30.90, visited: false },
  { name: '襄阳古隆中', province: '湖北', lng: 112.15, lat: 32.05, visited: false },
  { name: '恩施地心谷', province: '湖北', lng: 109.25, lat: 30.45, visited: false },
  { name: '重庆磁器口', province: '重庆', lng: 106.45, lat: 29.49, visited: false },
  { name: '重庆武隆天生三桥', province: '重庆', lng: 108.05, lat: 29.25, visited: false },
  { name: '成都宽窄巷子', province: '四川', lng: 104.00, lat: 30.67, visited: false },
  { name: '成都锦里', province: '四川', lng: 104.03, lat: 30.66, visited: false },
  { name: '都江堰青城山', province: '四川', lng: 103.58, lat: 30.95, visited: false },
  { name: '甘孜冷嘎措', province: '四川', lng: 100.15, lat: 29.00, visited: false },
  { name: '青海年宝玉则', province: '青海', lng: 101.50, lat: 33.30, visited: false },
  { name: '银川镇北堡西部影城', province: '宁夏', lng: 106.25, lat: 38.50, visited: false },
  { name: '中卫沙坡头', province: '宁夏', lng: 105.10, lat: 37.55, visited: false },
  { name: '喀什古城', province: '新疆', lng: 75.98, lat: 39.47, visited: false },
  { name: '伊犁果子沟', province: '新疆', lng: 81.85, lat: 44.30, visited: false },
  { name: '阿勒泰禾木村', province: '新疆', lng: 87.50, lat: 48.50, visited: false },
  { name: '吐鲁番葡萄沟', province: '新疆', lng: 89.15, lat: 42.90, visited: false },
  { name: '瑞丽一寨两国', province: '云南', lng: 97.85, lat: 24.00, visited: false },
  { name: '芒市勐巴娜西珍奇园', province: '云南', lng: 98.55, lat: 24.45, visited: false },
  { name: '腾冲和顺古镇', province: '云南', lng: 98.55, lat: 25.00, visited: false },
  { name: '腾冲银杏村', province: '云南', lng: 98.45, lat: 25.10, visited: false },
  { name: '建水古城', province: '云南', lng: 102.75, lat: 23.65, visited: false },
  { name: '崇左明仕田园', province: '广西', lng: 106.90, lat: 22.85, visited: false },
  { name: '靖西通灵大峡谷', province: '广西', lng: 106.20, lat: 23.10, visited: false },
  { name: '黄姚古镇', province: '广西', lng: 110.75, lat: 24.45, visited: false },
  { name: '珠海长隆海洋王国', province: '广东', lng: 113.50, lat: 22.20, visited: false },
  { name: '广州沙面岛', province: '广东', lng: 113.25, lat: 23.10, visited: false },
  { name: '深圳大鹏半岛', province: '广东', lng: 114.35, lat: 22.65, visited: false },
  { name: '汕头南澳岛', province: '广东', lng: 117.05, lat: 23.35, visited: false },
  { name: '湛江硇洲岛', province: '广东', lng: 110.40, lat: 20.90, visited: false },
  { name: '三亚蜈支洲岛', province: '海南', lng: 109.60, lat: 18.38, visited: false },
  { name: '三亚西岛', province: '海南', lng: 109.20, lat: 18.20, visited: false },
  { name: '文昌铜鼓岭', province: '海南', lng: 111.15, lat: 19.65, visited: false },
  { name: '琼海博鳌', province: '海南', lng: 110.55, lat: 19.20, visited: false },
  { name: '三沙永兴岛', province: '海南', lng: 112.35, lat: 16.85, visited: false },
  { name: '北京奥林匹克公园', province: '北京', lng: 116.40, lat: 39.99, visited: false },
  { name: '北京圆明园', province: '北京', lng: 116.27, lat: 40.01, visited: false },
  { name: '北京明十三陵', province: '北京', lng: 116.20, lat: 40.22, visited: false },
  { name: '北京大运河文化旅游景区', province: '北京', lng: 116.60, lat: 39.95, visited: false },
  { name: '天津古文化街', province: '天津', lng: 117.20, lat: 39.14, visited: false },
  { name: '天津盘山', province: '天津', lng: 117.35, lat: 39.98, visited: false },
  { name: '承德金山岭长城', province: '河北', lng: 117.25, lat: 40.65, visited: false },
  { name: '唐山南湖・开滦', province: '河北', lng: 118.15, lat: 39.60, visited: false },
  { name: '衡水湖', province: '河北', lng: 115.75, lat: 37.70, visited: false },
  { name: '保定白石山', province: '河北', lng: 114.00, lat: 39.18, visited: false },
  { name: '保定清西陵', province: '河北', lng: 115.45, lat: 39.28, visited: false },
  { name: '邯郸娲皇宫', province: '河北', lng: 114.25, lat: 36.65, visited: false },
  { name: '忻州五台山', province: '山西', lng: 113.50, lat: 38.95, visited: false },
  { name: '太原晋祠天龙山', province: '山西', lng: 112.55, lat: 37.85, visited: false },
  { name: '晋中乔家大院', province: '山西', lng: 112.35, lat: 37.65, visited: false },
  { name: '晋中绵山', province: '山西', lng: 111.85, lat: 36.95, visited: false },
  { name: '临汾云丘山', province: '山西', lng: 111.25, lat: 36.85, visited: false },
  { name: '长治八泉峡', province: '山西', lng: 113.35, lat: 35.85, visited: false },
  { name: '呼和浩特老牛湾', province: '内蒙古', lng: 111.50, lat: 39.95, visited: false },
  { name: '鄂尔多斯响沙湾', province: '内蒙古', lng: 107.55, lat: 40.50, visited: false },
  { name: '鄂尔多斯成吉思汗陵', province: '内蒙古', lng: 109.75, lat: 39.35, visited: false },
  { name: '呼伦贝尔满洲里边境旅游区', province: '内蒙古', lng: 117.45, lat: 49.60, visited: false },
  { name: '赤峰克什克腾旗', province: '内蒙古', lng: 117.40, lat: 43.30, visited: false },
  { name: '通辽大青沟', province: '内蒙古', lng: 122.95, lat: 42.65, visited: false },
  { name: '大连金石滩', province: '辽宁', lng: 121.95, lat: 39.00, visited: false },
  { name: '鞍山千山', province: '辽宁', lng: 123.15, lat: 41.10, visited: false },
  { name: '本溪水洞', province: '辽宁', lng: 123.75, lat: 41.25, visited: false },
  { name: '沈阳故宫', province: '辽宁', lng: 123.43, lat: 41.80, visited: false },
  { name: '沈阳张氏帅府', province: '辽宁', lng: 123.43, lat: 41.79, visited: false },
  { name: '长春净月潭', province: '吉林', lng: 125.35, lat: 43.85, visited: false },
  { name: '长春伪满皇宫', province: '吉林', lng: 125.33, lat: 43.88, visited: false },
  { name: '长春世界雕塑公园', province: '吉林', lng: 125.25, lat: 43.85, visited: false },
  { name: '延边六鼎山', province: '吉林', lng: 129.45, lat: 43.30, visited: false },
  { name: '通化高句丽古迹', province: '吉林', lng: 125.75, lat: 41.75, visited: false },
  { name: '松原查干湖', province: '吉林', lng: 124.35, lat: 45.20, visited: false },
  { name: '齐齐哈尔扎龙', province: '黑龙江', lng: 124.25, lat: 47.30, visited: false },
  { name: '哈尔滨太阳岛', province: '黑龙江', lng: 126.55, lat: 45.80, visited: false },
  { name: '哈尔滨中央大街', province: '黑龙江', lng: 126.97, lat: 45.80, visited: false },
  { name: '伊春汤旺河石林', province: '黑龙江', lng: 129.15, lat: 48.25, visited: false },
  { name: '上海东方明珠', province: '上海', lng: 121.50, lat: 31.23, visited: false },
  { name: '上海科技馆', province: '上海', lng: 121.53, lat: 31.23, visited: false },
  { name: '上海野生动物园', province: '上海', lng: 121.78, lat: 31.05, visited: false },
  { name: '无锡鼋头渚', province: '江苏', lng: 120.26, lat: 31.53, visited: false },
  { name: '常州恐龙园', province: '江苏', lng: 119.95, lat: 31.80, visited: false },
  { name: '常州天目湖', province: '江苏', lng: 119.40, lat: 31.45, visited: false },
  { name: '苏州金鸡湖', province: '江苏', lng: 120.62, lat: 31.32, visited: false },
  { name: '镇江三山', province: '江苏', lng: 119.44, lat: 32.20, visited: false },
  { name: '连云港花果山', province: '江苏', lng: 119.25, lat: 34.58, visited: false },
  { name: '徐州云龙湖', province: '江苏', lng: 117.18, lat: 34.27, visited: false },
  { name: '宁波溪口', province: '浙江', lng: 121.35, lat: 29.60, visited: false },
  { name: '金华横店影视城', province: '浙江', lng: 120.23, lat: 29.15, visited: false },
  { name: '六安天堂寨', province: '安徽', lng: 115.80, lat: 31.10, visited: false },
  { name: '亳州花戏楼', province: '安徽', lng: 115.75, lat: 33.85, visited: false },
  { name: '福州三坊七巷', province: '福建', lng: 119.30, lat: 26.08, visited: false },
  { name: '泉州清源山', province: '福建', lng: 118.55, lat: 24.90, visited: false },
  { name: '三明泰宁大金湖', province: '福建', lng: 117.15, lat: 26.90, visited: false },
  { name: '宁德太姥山', province: '福建', lng: 120.25, lat: 27.15, visited: false },
  { name: '南昌滕王阁', province: '江西', lng: 115.89, lat: 28.68, visited: false },
  { name: '淄博周村古商城', province: '山东', lng: 117.80, lat: 36.78, visited: false },
  { name: '焦作云台山', province: '河南', lng: 113.45, lat: 35.25, visited: false },
  { name: '新乡宝泉', province: '河南', lng: 113.65, lat: 35.55, visited: false },
  { name: '黄冈龟峰山', province: '湖北', lng: 114.65, lat: 30.55, visited: false },
  { name: '湘潭韶山', province: '湖南', lng: 112.50, lat: 27.95, visited: false },
  { name: '湘西矮寨大桥', province: '湖南', lng: 109.55, lat: 28.20, visited: false },
  { name: '广州长隆', province: '广东', lng: 113.30, lat: 23.05, visited: false },
  { name: '深圳华侨城', province: '广东', lng: 114.05, lat: 22.55, visited: false },
  { name: '佛山祖庙', province: '广东', lng: 113.15, lat: 23.05, visited: false },
  { name: '肇庆七星岩', province: '广东', lng: 112.45, lat: 23.05, visited: false },
  { name: '河源万绿湖', province: '广东', lng: 114.65, lat: 23.75, visited: false },
  { name: '桂林两江四湖', province: '广西', lng: 110.28, lat: 25.28, visited: false },
  { name: '南宁青秀山', province: '广西', lng: 108.33, lat: 22.82, visited: false },
  { name: '北海银滩', province: '广西', lng: 109.15, lat: 21.47, visited: false },
  { name: '崇左花山岩画', province: '广西', lng: 107.35, lat: 22.65, visited: false },
  { name: '百色通灵大峡谷', province: '广西', lng: 106.20, lat: 23.10, visited: false },
  { name: '海口骑楼老街', province: '海南', lng: 110.35, lat: 20.03, visited: false },
  { name: '三亚南山', province: '海南', lng: 109.15, lat: 18.25, visited: false },
  { name: '成都天台山', province: '四川', lng: 103.45, lat: 30.35, visited: false },
  { name: '贵阳黔灵山', province: '贵州', lng: 106.70, lat: 26.58, visited: false },
  { name: '黔西南万峰林', province: '贵州', lng: 104.85, lat: 25.05, visited: false },
  { name: '大理崇圣寺三塔', province: '云南', lng: 100.15, lat: 25.60, visited: false },
  { name: '香格里拉普达措', province: '云南', lng: 99.95, lat: 27.85, visited: false },
  { name: '西双版纳野象谷', province: '云南', lng: 101.35, lat: 22.05, visited: false },
  { name: '西安大唐芙蓉园', province: '陕西', lng: 108.95, lat: 34.22, visited: false },
  { name: '宝鸡法门寺', province: '陕西', lng: 107.95, lat: 34.30, visited: false },
  { name: '延安黄帝陵', province: '陕西', lng: 109.25, lat: 35.65, visited: false },
  { name: '咸阳乾陵', province: '陕西', lng: 108.25, lat: 34.50, visited: false },
  { name: '兰州中山桥', province: '甘肃', lng: 103.85, lat: 36.05, visited: false },
  { name: '甘南冶力关', province: '甘肃', lng: 103.35, lat: 34.95, visited: false },
  { name: '固原六盘山', province: '宁夏', lng: 106.25, lat: 36.05, visited: false },
  { name: '乌鲁木齐天山天池', province: '新疆', lng: 88.15, lat: 43.80, visited: false },
  { name: '北京世界公园', province: '北京', lng: 116.25, lat: 39.85, visited: false },
  { name: '北京龙潭公园', province: '北京', lng: 116.45, lat: 39.88, visited: false },
  { name: '北京景山公园', province: '北京', lng: 116.40, lat: 39.92, visited: false },
  { name: '天津杨柳青古镇', province: '天津', lng: 117.05, lat: 39.15, visited: false },
  { name: '天津海昌极地海洋公园', province: '天津', lng: 117.75, lat: 39.05, visited: false },
  { name: '河北白洋淀', province: '河北', lng: 115.90, lat: 38.90, visited: false },
  { name: '内蒙古希拉穆仁草原', province: '内蒙古', lng: 111.85, lat: 40.60, visited: false },
  { name: '辽宁沈阳棋盘山', province: '辽宁', lng: 123.45, lat: 41.85, visited: false },
  { name: '辽宁大连老虎滩', province: '辽宁', lng: 121.62, lat: 38.91, visited: false },
  { name: '吉林雾凇岛', province: '吉林', lng: 126.55, lat: 44.05, visited: false },
  { name: '上海豫园', province: '上海', lng: 121.49, lat: 31.23, visited: false },
  { name: '上海朱家角', province: '上海', lng: 121.05, lat: 31.05, visited: false },
  { name: '江苏无锡梅园', province: '江苏', lng: 120.28, lat: 31.55, visited: false },
  { name: '江苏扬州个园', province: '江苏', lng: 119.43, lat: 32.39, visited: false },
  { name: '福建泉州崇武古城', province: '福建', lng: 118.95, lat: 24.85, visited: false },
  { name: '河南尧山', province: '河南', lng: 112.85, lat: 33.75, visited: false },
  { name: '海南万宁日月湾', province: '海南', lng: 110.15, lat: 18.55, visited: false },
  { name: '云南元谋土林', province: '云南', lng: 101.95, lat: 25.55, visited: false },
  { name: '陕西金丝峡', province: '陕西', lng: 110.35, lat: 33.35, visited: false },
  { name: '甘肃金塔胡杨林', province: '甘肃', lng: 98.95, lat: 40.55, visited: false },
  { name: '甘肃麦积山石窟', province: '甘肃', lng: 106.25, lat: 34.35, visited: false },
  { name: '新疆库车大峡谷', province: '新疆', lng: 83.05, lat: 41.75, visited: false }
];

let chart;
let filterMode = 'all';
const STORAGE_KEY = 'travel_map_visited';

const provinceMap = {
  '北京': '北京市',
  '天津': '天津市',
  '河北': '河北省',
  '山西': '山西省',
  '内蒙古': '内蒙古自治区',
  '辽宁': '辽宁省',
  '吉林': '吉林省',
  '黑龙江': '黑龙江省',
  '上海': '上海市',
  '江苏': '江苏省',
  '浙江': '浙江省',
  '安徽': '安徽省',
  '福建': '福建省',
  '江西': '江西省',
  '山东': '山东省',
  '河南': '河南省',
  '湖北': '湖北省',
  '湖南': '湖南省',
  '广东': '广东省',
  '广西': '广西壮族自治区',
  '海南': '海南省',
  '重庆': '重庆市',
  '四川': '四川省',
  '贵州': '贵州省',
  '云南': '云南省',
  '西藏': '西藏自治区',
  '陕西': '陕西省',
  '甘肃': '甘肃省',
  '青海': '青海省',
  '宁夏': '宁夏回族自治区',
  '新疆': '新疆维吾尔自治区',
  '台湾': '台湾省',
  '香港': '香港特别行政区',
  '澳门': '澳门特别行政区'
};

const reverseProvinceMap = {};
for (const [short, full] of Object.entries(provinceMap)) {
  reverseProvinceMap[full] = short;
}

async function loadVisitedSpots() {
  try {
    const response = await fetch('/api/visited');
    if (response.ok) {
      const visitedNames = await response.json();
      spots.forEach(spot => {
        spot.visited = visitedNames.includes(spot.name);
      });
      console.log('打卡数据加载成功，已打卡景点:', visitedNames.length, '个');
    } else {
      console.log('服务器不可用，使用默认状态');
    }
  } catch (e) {
    console.error('加载打卡数据失败:', e);
    console.log('使用默认状态');
  }
}

async function saveVisitedSpots() {
  try {
    const visitedNames = spots.filter(s => s.visited).map(s => s.name);
    const response = await fetch('/api/visited', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ visitedSpots: visitedNames })
    });
    if (response.ok) {
      const result = await response.json();
      console.log('打卡数据保存成功，已打卡景点:', result.count, '个');
    } else {
      console.error('保存打卡数据失败');
    }
  } catch (e) {
    console.error('保存打卡数据失败:', e);
  }
}

function updateStats() {
  const visitedCount = spots.filter(s => s.visited).length;
  const totalCount = spots.length;
  const percent = totalCount > 0 ? Math.round((visitedCount / totalCount) * 100) : 0;

  document.getElementById('visited-count').textContent = visitedCount;
  document.getElementById('total-count').textContent = totalCount;
  document.getElementById('progress-percent').textContent = `${percent}%`;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

function toggleSpot(name) {
  const spot = spots.find(s => s.name === name);
  if (!spot) return;

  spot.visited = !spot.visited;
  saveVisitedSpots();
  updateStats();
  updateMap();
  updateSpotList();

  const message = spot.visited ? `✓ 已打卡：${name}` : `✗ 取消打卡：${name}`;
  showToast(message);
}

function getProvinceData() {
  const result = [];
  const provinces = [...new Set(spots.map(s => s.province))];

  provinces.forEach(province => {
    const provinceSpots = spots.filter(s => s.province === province);
    const visitedCount = provinceSpots.filter(s => s.visited).length;
    const totalCount = provinceSpots.length;

    const isCompleted = visitedCount === totalCount;
    let value = 0;
    if (visitedCount === 0) {
      value = 0;
    } else if (isCompleted) {
      value = 2;
    } else {
      value = 1;
    }
    result.push({
      name: provinceMap[province] || province,
      value: value
    });
  });

  return result;
}

function initMap() {
  chart = echarts.init(document.getElementById('map'));

  const spotData = spots.map(s => ({
    name: s.name,
    value: [s.lng, s.lat, s.visited ? 1 : 0],
    itemStyle: {
      color: s.visited ? '#ef4444' : '#9ca3af',
      shadowBlur: s.visited ? 10 : 5,
      shadowColor: s.visited ? 'rgba(239, 68, 68, 0.5)' : 'rgba(156, 163, 175, 0.3)'
    }
  }));

  const provinceData = getProvinceData();

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      textStyle: {
        color: '#e2e8f0'
      },
      formatter: function(params) {
        const spot = spots.find(s => s.name === params.name);
        if (spot) {
          const status = spot.visited ? '已打卡' : '未打卡';
          const statusColor = spot.visited ? '#ef4444' : '#9ca3af';
          return `<div style="padding: 8px;">
            <div style="font-weight: 600; margin-bottom: 4px;">${params.name}</div>
            <div style="color: ${statusColor}; font-size: 12px;">${status}</div>
            <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">点击切换状态</div>
          </div>`;
        }
      }
    },
    visualMap: {
      show: false,
      min: 0,
      max: 2,
      inRange: {
        color: ['rgba(71, 85, 105, 0.6)', 'rgba(59, 130, 246, 0.6)', 'rgba(34, 197, 94, 0.7)']
      }
    },
    geo: {
      map: 'china',
      roam: true,
      zoom: 1.2,
      label: {
        show: false
      },
      itemStyle: {
        areaColor: '#1e293b',
        borderColor: '#475569',
        borderWidth: 1
      },
      emphasis: {
        itemStyle: {
          areaColor: '#334155'
        },
        label: {
          color: '#e2e8f0'
        }
      }
    },
    series: [
      {
        name: '省份颜色',
        type: 'map',
        map: 'china',
        geoIndex: 0,
        visualMapIndex: 0,
        data: provinceData,
        z: 1,
        itemStyle: {
          borderColor: '#475569',
          borderWidth: 1
        }
      },
      {
        name: '景点',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: spotData,
        visualMapIndex: -1,
        symbolSize: function(val) {
          return 14;
        },
        animationDuration: 1000,
        animationEasing: 'elasticOut'
      }
    ]
  };

  chart.setOption(option);

  chart.on('click', function(params) {
    if (params.data && params.data.name) {
      toggleSpot(params.data.name);
    } else if (params.name) {
      const provinceShort = reverseProvinceMap[params.name] || params.name;
      scrollToProvince(provinceShort);
    }
  });

  window.addEventListener('resize', function() {
    chart.resize();
  });
}

function updateMap() {
  const spotData = spots.map(s => ({
    name: s.name,
    value: [s.lng, s.lat, s.visited ? 1 : 0],
    itemStyle: {
      color: s.visited ? '#ef4444' : '#9ca3af',
      shadowBlur: s.visited ? 10 : 5,
      shadowColor: s.visited ? 'rgba(239, 68, 68, 0.5)' : 'rgba(156, 163, 175, 0.3)'
    }
  }));

  const provinceData = getProvinceData();

  chart.setOption({
    series: [
      {
        name: '省份颜色',
        data: provinceData
      },
      {
        name: '景点',
        data: spotData
      }
    ]
  });
}

let searchKeyword = '';

function scrollToProvince(province) {
  const list = document.getElementById('spot-list');
  const scrollContainer = document.querySelector('.scroll-container');
  
  const provinceGroup = list.querySelector(`[data-province="${province}"]`);
  
  if (provinceGroup) {
    const parentGroup = provinceGroup.closest('.province-group');
    if (parentGroup) {
      const spotsList = parentGroup.querySelector('.province-spots');
      const progressBar = parentGroup.querySelector('.province-progress');
      const toggleIcon = parentGroup.querySelector('.toggle-icon');
      
      if (spotsList && spotsList.style.display === 'none') {
        spotsList.style.display = 'block';
        if (progressBar) progressBar.style.display = 'block';
        if (toggleIcon) toggleIcon.textContent = '▼';
      }
    }
    
    const elementRect = provinceGroup.getBoundingClientRect();
    const containerRect = scrollContainer.getBoundingClientRect();
    const scrollTop = scrollContainer.scrollTop + elementRect.top - containerRect.top - 20;
    
    scrollContainer.scrollTo({
      top: scrollTop,
      behavior: 'smooth'
    });
  }
}

function updateSpotList() {
  const list = document.getElementById('spot-list');
  const scrollContainer = document.querySelector('.scroll-container');
  const scrollTop = scrollContainer ? scrollContainer.scrollTop : 0;

  let filteredSpots = spots;
  if (filterMode === 'visited') {
    filteredSpots = spots.filter(s => s.visited);
  } else if (filterMode === 'unvisited') {
    filteredSpots = spots.filter(s => !s.visited);
  }
  
  if (searchKeyword) {
    const keyword = searchKeyword.toLowerCase();
    filteredSpots = filteredSpots.filter(s => 
      s.name.toLowerCase().includes(keyword) || 
      s.province.toLowerCase().includes(keyword)
    );
  }

  const groupedSpots = filteredSpots.reduce((groups, spot) => {
    const province = spot.province;
    if (!groups[province]) {
      groups[province] = [];
    }
    groups[province].push(spot);
    return groups;
  }, {});

  const sortedProvinces = Object.keys(groupedSpots).sort((a, b) => a.localeCompare(b, 'zh-CN'));

  list.innerHTML = sortedProvinces.map(province => {
    const provinceSpots = groupedSpots[province];
    const visitedCount = provinceSpots.filter(s => s.visited).length;
    const totalCount = provinceSpots.length;
    const progress = Math.round((visitedCount / totalCount) * 100);
    
    return `
      <li class="province-group">
        <div class="province-header" data-province="${province}">
          <button class="toggle-btn" type="button">
            <span class="toggle-icon">▼</span>
          </button>
          <span class="province-name">${province}</span>
          <span class="province-count">${visitedCount}/${totalCount}</span>
        </div>
        <div class="province-progress">
          <div class="progress-bar" style="width: ${progress}%"></div>
        </div>
        <ul class="province-spots">
          ${provinceSpots.map(spot => `
            <li class="spot-item ${spot.visited ? 'visited' : ''}" data-name="${spot.name}">
              <span class="spot-dot"></span>
              <span class="spot-name">${spot.name}</span>
            </li>
          `).join('')}
        </ul>
      </li>
    `;
  }).join('');

  if (scrollContainer) {
    scrollContainer.scrollTop = scrollTop;
  }
}

function initFilterToggle() {
  const toggle = document.getElementById('filter-toggle');
  const filterOptions = ['all', 'visited', 'unvisited'];
  const filterLabels = ['显示全部', '仅已打卡', '仅未打卡'];

  toggle.addEventListener('click', function() {
    const currentLabel = toggle.textContent;
    const currentIndex = filterLabels.indexOf(currentLabel);
    const nextIndex = (currentIndex + 1) % filterOptions.length;
    filterMode = filterOptions[nextIndex];
    toggle.textContent = filterLabels[nextIndex];
    updateSpotList();
  });

  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  
  searchInput.addEventListener('input', function() {
    searchKeyword = this.value.trim();
    searchClear.style.display = searchKeyword ? 'flex' : 'none';
    updateSpotList();
  });
  
  searchClear.addEventListener('click', function() {
    searchInput.value = '';
    searchKeyword = '';
    searchClear.style.display = 'none';
    updateSpotList();
  });
  
  const listContainer = document.getElementById('spot-list');
  
  listContainer.addEventListener('click', function(event) {
    const target = event.target;
    const spotItem = target.closest('.spot-item');
    const provinceHeader = target.closest('.province-header');
    
    if (spotItem) {
      event.stopPropagation();
      const name = spotItem.dataset.name;
      toggleSpot(name);
    } else if (provinceHeader) {
      const group = provinceHeader.parentElement;
      const spotsList = group.querySelector('.province-spots');
      const progressBar = group.querySelector('.province-progress');
      const toggleIcon = provinceHeader.querySelector('.toggle-icon');
      
      if (spotsList.style.display === 'none') {
        spotsList.style.display = 'block';
        if (progressBar) progressBar.style.display = 'block';
        if (toggleIcon) toggleIcon.textContent = '▼';
      } else {
        spotsList.style.display = 'none';
        if (progressBar) progressBar.style.display = 'none';
        if (toggleIcon) toggleIcon.textContent = '▶';
      }
    }
  });
}

async function init() {
  await loadVisitedSpots();
  updateStats();
  initMap();
  updateSpotList();
  initFilterToggle();
}

document.addEventListener('DOMContentLoaded', init);