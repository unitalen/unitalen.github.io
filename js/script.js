/*************************@主要数据 *****************************/

/* 大中华区公司网络数据*/
var markersData = [
  {
    name: "北京总部",
    lat: 39.9042,
    lng: 116.4074,
    address1: "北京市建国门外大街22号",
    address2: "赛特广场七、八层",
    postcode: "100004",
    telephone: ["(010)5920-8888", "(010) 8511-5588"],
    fax: ["(010)5920-8588", "(010) 8511-0966"],
    email: "mail@unitalen.com",
    contact: "",
    url: "index.html",
    direction: "https://maps.google.com/maps?ll=39.906559,116.440499&z=16&t=m&hl=en-US&gl=US&mapclient=embed&daddr=Sai%20Te%20Guang%20Chang%20JianWai%20DaJie%2C%20Chaoyang%20Qu%2C%20Beijing%20Shi%20China%2C%20100600@39.9065676,116.4405049"
   },
   {
     name: "上海-1",
     lat:31.227923,
     lng:121.462469,
     address1: "上海市静安区石门一路211号",
     address2: "旺旺大厦15楼",
     postcode: "200041",
     telephone: ["(021)61220388"],
     fax: ["(021)6122-0388"],
     email: "kan.zu@unitalen.com",
     contact: "祖侃",
     url: "http://www.unitalen.com/shanghai"
   },
   {
     name: "上海-2",
     lat:31.289874,
     lng:121.510347,
     address1: "上海杨浦区国权路43号",
     address2: "财富国际广场银座303室",
     postcode: "200433",
     telephone: ["(021)3362-5068", "(021)3362-5062"],
     fax: ["(021)3362-5166"],
     email: "jun.zhu@unitalen.com",
     contact: "朱军",
     url: "http://www.unitalen.com/shanghai"
   },
   {
     name: "广州",
     lat:23.122913,
     lng:113.325944,
     address1: "广州市天河区珠江东路30号",
     address2: "广州银行大厦52层",
     postcode: "510620",
     telephone: ["13016087050", "（020）3881-3588"],
     fax: ["(020)3880-6446"],
     email: "yuanxin.li@unitalen.com",
     contact: "李远新",
     url: "branch-guangzhou.html"
   },
   {
     name: "深圳",
     lat:22.541479,
     lng:114.119247,
     address1: "深圳市人民南路",
     address2: "国贸大厦15楼1521室",
     postcode: "510814",
     telephone: ["13823156153", "（0755）8221-2852"],
     fax: ["(0755)8221-2318"],
     email: "fan.he@unitalen.com",
     contact: "何凡",
     url: "http://www.unitalen.com/shenzhen"
   },
   {
     name: "福建",
     lat:24.801252,
     lng:118.578505,
     address1: "福建省晋江青阳市标旁",
     address2: "德辉华庭6号电梯3层316室",
     postcode: "362200",
     telephone: ["13788801988", "（0595）8567-8057"],
     fax: ["（0595）8567-8036"],
     email: "",
     contact: "邸杰",
     url: "http://www.unitalen.com/fujian"
   },
   {
     name: "温州",
     lat:27.997887,
     lng:120.685056,
     address1: "温州市车站大道",
     address2: "时代广场公寓30层A2室",
     postcode: "325000",
     telephone: ["13806549188", "(0577)8899-1887"],
     fax: ["(0577)8899-7726"],
     email: "anjing.zhu@unitalen.com",
     contact: "朱安静",
     url: "http://www.unitalen.com/wenzhou"
   },
   {
     name: "成都",
     lat:30.666099,
     lng:104.084885,
     address1: "高新区天府大道中段天府叁街口吉泰五路118号",
     address2: "凯旋广场3栋405室",
     postcode: "610041",
     telephone: ["(028)-8339-4043"],
     fax: ["(028)-8517-1736"],
     email: "",
     contact: "宋罡",
     url: "http://www.unitalen.com/chengdu"
   },
   {
     name: "重庆",
     lat:29.557184,
     lng:106.576941,
     address1: "重庆市渝中区解放碑",
     address2: "时代豪苑D座37-1",
     postcode: "400010",
     telephone: ["15808025557"],
     fax: ["023-63819368"],
     email: "junde.luo@unitalen.com",
     contact: "罗俊德",
     url: "http://www.unitalen.com/chongqing"
   },
   {
     name: "青岛",
     lat:36.101895,
     lng:120.374705,
     address1: "山东省青岛市山东路177号",
     address2: "鲁邦广场B805室",
     postcode: "266071",
     telephone: ["0532--86675066", "86675073"],
     fax: ["0532-86675072"],
     email: "huaqiang.wang@unitalen.com",
     contact: "王华强",
     url: "http://www.unitalen.com/qingdao"
   },
   {
     name: "湖南",
     lat:28.162347,
     lng:112.986155,
     address1: "湖南省长沙市芙蓉中路380号",
     address2: "汇金国际银座2719-2728",
     postcode: "410015",
     telephone: ["0731-85810158", "85123159", "85123148", "85123178"],
     fax: ["0731-8512315"],
     email: "daliang.tian@unitalen.com",
     contact: "田达良",
     url: "http://www.unitalen.com/hunan"
   },
   {
     name: "河南",
     lat:34.768209,
     lng:113.726546,
     address1: "郑州市郑东新区CBD商务外环路19号",
     address2: "农信大厦六层",
     postcode: "450046",
     telephone: ["0371-66781818","69523218"],
     fax: ["0371-65710869"],
     email: "haiyan.zhang@unitalen.com",
     contact: "张海燕",
     url: "http://www.unitalen.com/henan"
   },
   {
     name: "海南",
     lat:20.028489,
     lng:110.358824,
     address1: "海南省海口市海府路69号",
     address2: "艺苑大厦504房",
     postcode: "570203",
     telephone: ["13876379676", "0898-68277519"],
     fax: ["0898--65357186"],
     email: "",
     contact: "史琴姣",
     url: "http://www.unitalen.com/hainan"
   },
   {
     name: "杭州",
     lat:30.186916,
     lng:120.165953,
     address1: "浙江省杭州市滨江区火炬大道581号",
     address2: "三维大厦B座10B",
     postcode: "310053",
     telephone: ["0571-28888282"],
     fax: ["0571-8723948", "87239477"],
     email: "changjiang.zhang@unitalen.com",
     contact: "张长江",
     url: "http://www.unitalen.com/taipei"
   },
   {
     name: "吉林",
     lat:43.893321,
     lng:125.306137,
     address1: "吉林省长春市西安大路1688号",
     address2: "太平金融大厦（新润天国际大厦）2203室",
     postcode: "130061",
     telephone: ["0431-87069123"],
     fax: ["0431-87069121"],
     email: "hongying.run@unitalen.com",
     contact: "闫鸿鹰",
     url: "http://www.unitalen.com/jilin"
   },
   {
     name: "东莞",
     lat:23.009526,
     lng:113.756818,
     address1: "广东省东莞市南城区鸿福路200号",
     address2: "第一国际F座1508号",
     postcode: "",
     telephone: ["0769-22020278"],
     fax: ["0769-22020248"],
     email: "zilong.hou@unitalen.com",
     contact: "侯子龙",
     url: "http://www.unitalen.com/dongguan"
   },
   {
     name: "保定",
     lat:38.903061,
     lng:115.466782,
     address1: "河北省保定市云杉路86号",
     address2: "A座302室",
     postcode: "071000",
     telephone: ["0312-8943000"],
     fax: ["0312-7517801"],
     email: "zhesheng.lin@unitalen.com",
     contact: "林哲生",
     url: "http://www.unitalen.com/baoding"
   },
   {
     name: "苏州",
     lat:31.296414,
     lng:120.667155,
     address1: "苏州工业园区金鸡湖大道1355号",
     address2: "国际科技园二期E501-3",
     postcode: "215021",
     telephone: ["0512-86669518", "86669519"],
     fax: ["0512-86669516"],
     email: "liang.chang@unitalen.com",
     contact: "常亮",
     url: "http://www.unitalen.com/suzhou"
   },
   {
     name: "大连",
     lat:38.923723,
     lng:121.648361,
     address1: "大连市中山区人民路26号",
     address2: "人寿大厦2106室",
     postcode: "116001",
     telephone: ["0411-82563430"],
     fax: ["0411-82560747"],
     email: "yue.jiang@unitalen.com",
     contact: "姜越",
     url: "http://www.unitalen.com/dalian"
   },
   {
     name: "香港",
     lat:22.318431,
     lng:114.172009,
     address1: "香港九龙旺角洗衣街39-55号",
     address2: "金鸡广场12层1201室",
     postcode: "",
     telephone: ["00852-2782-2781"],
     fax: ["00852-2782-1102"],
     email: "shaowei.gao@unitalen.com",
     contact: "高少尉",
     url: "http://www.unitalen.com/hongkong"
   },
   {
     name: "台北",
     lat:25.022146,
     lng:121.548299,
     address1: "台北市大安区敦化南路2段",
     address2: "216号11楼A2",
     postcode: "",
     telephone: ["(02)2737-2996"],
     fax: ["(02)2735-1560"],
     email: "jiajing.zhou@unitalen.com",
     contact: "周佳静",
     url: "http://www.unitalen.com/taipei"
   }

 ];

 var markersData_overseas = [
   {
     name: "日本东京",
     address1: "东京港区西新桥1-6-12",
     address2: "AIOS虎之门805室",
     postcode: "",
     telephone: ["03-6457-9868"],
     fax: ["03-6457-9885"],
     email: "zhiqiang.jing@unitalen.com",
     contact: "经志强",
     url: "http://www.unitalen.com/tokyo"
    },
    {
      name: "美国加州",
      address1: "5674 STONERIDGE DRIVE, SUITE 100",
      address2: "PLEASANTON, CA",
      postcode: "94588",
      telephone: ["01-925-789-7213"],
      fax: [],
      email: "dan.chen@unitalen.com",
      contact: "陈丹",
      url: "http://www.unitalen.com/us"
    },
    {
      name: "德国慕尼黑",
      address1: "Massmann Strasse 4",
      address2: "80333 Munich, Germany",
      postcode: "",
      telephone: ["49-89-74038522"],
      fax: [],
      email: "Junfeng.tian@unitalen.com",
      contact: "田俊峰",
      url: "http://www.unitalen.com/munich"
    },
  ];



/*****************@大中华区公司网络Google Map********************/

// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(){

   // this variable sets the map bounds and zoom level according to markers position
   var bounds = new google.maps.LatLngBounds();

   // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var address2 = markersData[i].address2;
      var postcode = markersData[i].postcode;
      var url = markersData[i].url;
      var direction = markersData[i].direction;

      createMarker(latlng, name, address1, address2, postcode, url, direction);

      // Marker’s Lat. and Lng. values are added to bounds variable
      bounds.extend(latlng);
   }

   // Finally the bounds variable is used to set the map bounds
   // with API’s fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and sets their Info Window content
function createMarker(latlng, name, address1, address2, postcode, url, direction){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   // This event expects a click on a marker
   // When this event is fired the infowindow content is created
   // and the infowindow is opened
   google.maps.event.addListener(marker, 'click', function() {

      // Variable to define the HTML content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
      '<div class="iw_title">' + name + '</div>' +
      '<div class="iw_content">' + address1 + '<br />' +
      address2 + '<br />' +
      postcode + '<br />' +
      '<a href="' + url + '">' + url + '</a>'+ '<br />' +
      '<a href="' + direction + '" target="_blank">' + '获得地图指南 </a>'+
      '</div></div>';

      // including content to the infowindow
      infoWindow.setContent(iwContent);

      // opening the infowindow in the current map and at the current marker location
      infoWindow.open(map, marker);
   });
}

function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(39.9042, 116.4074),
      zoom: 10,
      mapTypeId: 'roadmap',
   };

   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   // a new Info Window is created
   infoWindow = new google.maps.InfoWindow();

   // Event that closes the InfoWindow with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers();
}

google.maps.event.addDomListener(window, 'load', initialize);
