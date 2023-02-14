let ZhiriMap = new Map<number,number[]>()
ZhiriMap.set(1, [2795862836])
ZhiriMap.set(2, [2847277478])
ZhiriMap.set(3, [3314242197, 2752139375])
ZhiriMap.set(4, [2602917073])
ZhiriMap.set(5, [3347232725, 3337653569])
ZhiriMap.set(6, [1978678141, 2753865017])
ZhiriMap.set(0, [3327628883, 3110463787])

let daymap = new Map<string,string>();
daymap.set("CLEAR_DAY", "晴");
daymap.set("CLEAR_NIGHT", "晴");
daymap.set("PARTLY_CLOUDY_DAY", "多云");
daymap.set("PARTLY_CLOUDY_NIGHT", "多云");
daymap.set("CLOUDY", "阴");
daymap.set("LIGHT_HAZE", "轻度雾霾");
daymap.set("MODERATE_HAZE", "中度雾霾");
daymap.set("HEAVY_HAZE", "重度雾霾");
daymap.set("LIGHT_RAIN", "小雨");
daymap.set("MODERATE_RAIN", "中雨");
daymap.set("HEAVY_RAIN", "大雨");
daymap.set("STORM_RAIN", "暴雨");
daymap.set("FOG", "雾天");
daymap.set("DUST", "浮尘");
daymap.set("WIND", "大风");
export {
    ZhiriMap,
    daymap
}