# mapbox

> mapbox官网 [国内](http://www.mapbox.cn/) | [国外](https://www.mapbox.com/)
> mapbox是一款基于webgl开发打造的高效地图框架，提供了大量api为你的应用添加丰富的功能。

备注：国外网站访问速度稍微慢一些，国外官网可以申请账号，提供一定额度的免费API服务，国内官网部分中文，文档不全，更新速度慢很多

## 安装使用

1. `npm i mapbox-gl`
2. `import mapboxgl from 'mapbox-gl';`
3. 初始化 `const map = new mapboxgl.Map(option)` option 初始化配置
4. 全局或者局部导入基本样式 `@import "~mapbox-gl/dist/mapbox-gl.css";`

```html
<template>
  <div class="map-box">
    <div id="map"></div>
  </div>
</template>
```

```javascript
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = '<your access token here>';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});
```

```scss
.map-box {
  position: relative;
  height: 100%;

  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
}
```

## 静态资源部署

### 方案一：在线方式

使用官网提供的accessToken可以享受官方提供的静态服务  
使用`option`对象的`style`可以使用很多官方提供的基础服务  
官方还提供了在线的自定义工具满足您的定制需求

### 方案二：离线方式

本地化开发[官方文档](https://docs.mapbox.com/mapbox-gl-js/style-spec/)

> style对象如下

```json
{
  "version": 8,
  "name": "Mapbox Streets",
  "sprite": "mapbox://sprites/mapbox/streets-v8",
  "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
  "sources": {},
  "layers": []
}
```

> 参数说明：

* version：样式版本，当前必须必须设置8。
* name：样式名称，设置一个可读的名称描述即可。
* sprite：mapbox地图使用的图标。
* glyphs：mapbox地图使用的标注字体。
* sources： mapbox地图使用的地图服务资源定义。
* layers： mapbox地图使用的图层定义。

## GeoJson数据讲解(地图图层最重要的部分数据来源)

### 前言

> 技术标准[点击这里](https://geojson.org/)

GeoJSON是一种对各种地理数据结构进行编码的格式，基于Javascript对象表示法的地理空间信息数据交换格式。  
GeoJSON对象可以表示几何、特征或者特征集合。GeoJSON支持下面几何类型：点、线、面、多点、多线、多面和几何集合。GeoJSON里的特征包含一个几何对象和其他属性，特征集合表示一系列特征。  
一个完整的GeoJSON数据结构总是一个（JSON术语里的）对象。在GeoJSON里，对象由名/值对--也称作成员的集合组成。对每个成员来说，名字总是字符串。成员的值要么是字符串、数字、对象、数组，要么是下面文本常量中的一个："true"
,"false"和"null"。数组是由值是上面所说的元素组成。  
GeoJSON总是由一个单独的对象组成。这个对象（指的是下面的GeoJSON对象）表示几何、特征或者特征集合。  
GeoJSON对象可能有任何数目成员（名/值对）。  
GeoJSON对象必须有一个名字为"type"的成员。这个成员的值是由GeoJSON对象的类型所确定的字符串。 type成员的值必须是下面之一："Point", "MultiPoint", "LineString", "
MultiLineString", "Polygon", "MultiPolygon", "GeometryCollection", "Feature", 或者 "FeatureCollection"。  
GeoJSON对象可能有一个可选的"crs"成员，它的值必须是一个坐标参考系统的对象。  
GeoJSON对象可能有一个"bbox"成员，它的值必须是边界框数组。

> GeoJSON特征集合：

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          102.0,
          0.5
        ]
      },
      "properties": {
        "prop0": "value0"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            102.0,
            0.0
          ],
          [
            103.0,
            1.0
          ],
          [
            104.0,
            0.0
          ],
          [
            105.0,
            1.0
          ]
        ]
      },
      "properties": {
        "prop0": "value0",
        "prop1": 0.0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            100.0,
            0.0
          ],
          [
            101.0,
            0.0
          ],
          [
            101.0,
            1.0
          ],
          [
            100.0,
            1.0
          ],
          [
            100.0,
            0.0
          ]
        ]
      },
      "properties": {
        "prop0": "value0",
        "prop1": {
          "this": "that"
        }
      }
    }
  ]
}
```

### 点要素Point

> 点要素是最简单的，类型type对应Point，然后坐标是一个1维的数组，里面有两个元素（如果是立体的坐标就是三维x,y,z），分别为经度和纬度。properties里面可以封装各种属性，例如名称、标识颜色等等。

```json
{
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [
      105.380859375,
      31.57853542647338
    ]
  }
}
```

> 点坐标

```
[105.380859375,31.57853542647338]
```

### 多点要素MultiPoint

```json
{
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "MultiPoint",
    "coordinates": [
      [
        105.380859375,
        31.57853542647338
      ],
      [
        105.580859375,
        31.52853542647338
      ]
    ]
  }
}
```

> 点坐标

```
105.380859375,31.57853542647338
105.580859375,31.52853542647338
```

### 线要素LineString

> 线要素就是指线段，记录的是线的端点坐标，可视化时会按照记录顺序联结。对于曲线（如贝塞尔曲线）目前还没有很好地表达，但是在地理数据中，曲线一般会用LineString去拟合，现实地理世界中也没有标准的曲线地理要素。

> 线要素的坐标coordinates里的二维数组和多点要素基本一样，区别就在type上了。

```json
{
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        105.6005859375,
        30.65681556429287
      ],
      [
        107.95166015624999,
        31.98944183792288
      ],
      [
        109.3798828125,
        30.031055426540206
      ],
      [
        107.7978515625,
        29.935895213372444
      ]
    ]
  }
}
```

对应的Kml表达：

```xml

<Placemark>
  <ExtendedData></ExtendedData>
  <LineString>
    <coordinates>108.65753173828125,34.1873818599505 108.72413635253905,34.25154099726973
      108.77151489257812,34.16977214177208 108.88481140136719,34.229970811273084
    </coordinates>
  </LineString>
</Placemark>
```

### 多线要素MultiLineString

> 也是一个三维数组（和多边形一样）：

```json
{
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "MultiLineString",
    "coordinates": [
      [
        [
          105.6005859375,
          30.65681556429287
        ],
        [
          107.95166015624999,
          31.98944183792288
        ],
        [
          109.3798828125,
          30.031055426540206
        ],
        [
          107.7978515625,
          29.935895213372444
        ]
      ],
      [
        [
          109.3798828125,
          30.031055426540206
        ],
        [
          107.1978515625,
          31.235895213372444
        ]
      ]
    ]
  }
}
```

### 多边形Polygon

> 注：单个多边形是一个3维数组，可以包含多个二维数组，这种情况和MultiPolygon效果很像。

```json
{
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [
          106.10595703125,
          33.33970700424026
        ],
        [
          106.32568359375,
          32.41706632846282
        ],
        [
          108.03955078125,
          32.2313896627376
        ],
        [
          108.25927734375,
          33.15594830078649
        ],
        [
          106.10595703125,
          33.33970700424026
        ]
      ]
    ]
  }
}
```

### 多多边形MultiPolygon

> type 1 两个不会相交的多边形

```json
{
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [
            109.2041015625,
            30.088107753367257
          ],
          [
            115.02685546875,
            30.088107753367257
          ],
          [
            115.02685546875,
            32.7872745269555
          ],
          [
            109.2041015625,
            32.7872745269555
          ],
          [
            109.2041015625,
            30.088107753367257
          ]
        ]
      ],
      [
        [
          [
            112.9833984375,
            26.82407078047018
          ],
          [
            116.69677734375,
            26.82407078047018
          ],
          [
            116.69677734375,
            29.036960648558267
          ],
          [
            112.9833984375,
            29.036960648558267
          ],
          [
            112.9833984375,
            26.82407078047018
          ]
        ]
      ]
    ]
  }
}
```

> type 2 两个镶套的多边形  
> 小的在前面，范围大的在后面，用上4个中括号，但效果不是有洞的

```json
    {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [
            101.6455078125,
            27.68352808378776
          ],
          [
            114.78515624999999,
            27.68352808378776
          ],
          [
            114.78515624999999,
            35.209721645221386
          ],
          [
            101.6455078125,
            35.209721645221386
          ],
          [
            101.6455078125,
            27.68352808378776
          ]
        ]
      ],
      [
        [
          [
            104.2822265625,
            30.107117887092357
          ],
          [
            108.896484375,
            30.107117887092357
          ],
          [
            108.896484375,
            33.76088200086917
          ],
          [
            104.2822265625,
            33.76088200086917
          ],
          [
            104.2822265625,
            30.107117887092357
          ]
        ]
      ]
    ]
  }
}
```

> type 3 有孔洞的多边形

```json
{
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": [
      [
        [
          [
            101.6455078125,
            27.68352808378776
          ],
          [
            114.78515624999999,
            27.68352808378776
          ],
          [
            114.78515624999999,
            35.209721645221386
          ],
          [
            101.6455078125,
            35.209721645221386
          ],
          [
            101.6455078125,
            27.68352808378776
          ]
        ],
        [
          [
            104.2822265625,
            30.107117887092357
          ],
          [
            108.896484375,
            30.107117887092357
          ],
          [
            108.896484375,
            33.76088200086917
          ],
          [
            104.2822265625,
            33.76088200086917
          ],
          [
            104.2822265625,
            30.107117887092357
          ]
        ]
      ]
    ]
  }
}
```

### 要素的集合GeometryCollection

> GeometryCollection是多种基本地理要素的集合，就是里面可以包含点、线、面要素。

```json
{
  "type": "GeometryCollection",
  "geometries": [
    {
      "type": "Point",
      "coordinates": [
        108.62,
        31.02819
      ]
    },
    {
      "type": "LineString",
      "coordinates": [
        [
          108.896484375,
          30.1071178870
        ],
        [
          108.2184375,
          30.91717870
        ],
        [
          109.5184375,
          31.2175780
        ]
      ]
    }
  ]
}
```

> GeometryCollection不需要放在FeatureCollection里：

```json
{
  "type": "FeatureCollection",
  "features": []
}
```

> geojson里面还有其他标签表达其他的属性，如外包矩形等，其中特别重要的是坐标系统，一般里面的坐标默认为WGS84，当然也可以是其他坐标系统的坐标，但是要标识。暂时并无这方面需求先不说明  