/**
 * Created by zelong on 2017/8/6.
 */

var checkMe;
var option2,option3,option4,seriesType;
var jsonFile = './test.json';
//展示所有数据
function showAllData (){
    var myChart2 = echarts.init(document.getElementById('temperature'));
    var myChart3 = echarts.init(document.getElementById('humidity'));
    var myChart4 = echarts.init(document.getElementById('wind'));
    $.get(jsonFile, function (data) {
        function showItem(index,name,yName){
             option2 = {
                    title: {
                        text: name
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
//                获取json中第二个数据作为横坐标
                        data: data.map(function (item) {
                            return item[1];
                        })
                    },
                    yAxis: {
                        name:yName,
                        splitLine: {
                            show: true
                        }
                    },
                    toolbox: {
                        left: 'center',
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    dataZoom: [{
                        startValue: '2017-08-08  12:17:54'
                    }, {
                        type: 'inside'
                    },{
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }],
                    visualMap: {
                        top: 10,
                        right: 10,
                        pieces: [
                            {
                               lte:0,
                                color:'#3FC221'
                        },
                            {
                            gt: 0,
                            lte: 10,
                            color: '#096'
                        }, {
                            gt: 10,
                            lte: 25,
                            color: '#ffde33'
                        }, {
                            gt: 25,
                            lte: 28,
                            color: '#ff9933'
                        },{
                            gte:28,
                            color:'red'
                        }
                        ]
                    },
                    series: {
                        name: name,
                        type: seriesType,
                        data: data.map(function (item) {
                            return item[index];
                        })
                    }
            };
             option3 = {
                title: {
                    text: name
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
//                获取json中第一个数据作为横坐标
                    data: data.map(function (item) {
                        return item[1];
                    })
                },
                yAxis: {
                    name:yName,
                    splitLine: {
                        show: true
                    }
                },
                toolbox: {
                    left: 'center',
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                dataZoom: [{
                    startValue: '2014-06-01'
                }, {
                    type: 'inside'
                },{
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }
                ],
                visualMap: {
                    top: 10,
                    right: 10,
                    pieces: [
                        {
                            lte:10,
                            color:'#3FC221'
                        },
                        {
                            gt: 10,
                            lte: 30,
                            color: '#096'
                        }, {
                            gt: 30,
                            lte: 50,
                            color: '#ffde33'
                        }, {
                            gt: 50,
                            lte: 70,
                            color: '#ff9933'
                        },{
                            gte:70,
                            color:'red'
                        }
                    ]
                },
                series: {
                    name: name,
                    type: seriesType,
                    data: data.map(function (item) {
                        return item[index];
                    })
                }
            };
             option4 = {
                title: {
                    text: name
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
//                获取json中第一个数据作为横坐标
                    data: data.map(function (item) {
                        return item[1];
                    })
                },
                yAxis: {
                    name:yName,
                    splitLine: {
                        show: true
                    }
                },
                toolbox: {
                    left: 'center',
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                dataZoom: [{
                    startValue: '2014-06-01'
                }, {
                    type: 'inside'
                },{
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }
                ],
                visualMap: {
                    top: 10,
                    right: 10,
                    pieces: [
                        {
                            lte:0,
                            color:'#3FC221'
                        },
                        {
                            gt: 0,
                            lte: 4,
                            color: '#096'
                        }, {
                            gt: 4,
                            lte: 8,
                            color: '#ffde33'
                        }, {
                            gt: 8,
                            lte: 12,
                            color: '#ff9933'
                        },{
                            gte:12,
                            color:'red'
                        }
                    ]
                },
                series: {
                    name: name,
                    type: seriesType,
                    data: data.map(function (item) {
                        return item[index];
                    })
                }
            };
            var myChart = eval("myChart" + index);
            myChart.setOption(eval("option"+index));
        }
        showItem(2,'温度','℃');
        showItem(3,'湿度','%');
        showItem(4,'风速','m/s');
    });
}

//实时切换按钮
function turn(){
    var btn = $('.realTimeBtn');
    var btnStatus = btn.attr("class") == "btn btn-default realTimeBtn";
    if (btnStatus){
        btn.addClass('btn-success');
        checkMe=true;
        realTime();
    }else{
        checkMe=false;
        btn.removeClass('btn-success');
    }
}

//实时显示数据
function realTime(){
    showAllData();
    //alert(checkMe);
    if (checkMe){
        setTimeout(function(){
            realTime();
        },180000);
    }
}

//切换图表类型
function turnSeriesType(){
    var first = $('.series0');
    var last = $('.series1');
    if (seriesType == 'line'){
        seriesType = 'bar';
        showAllData() ;
        first.removeClass('aActive').attr("onclick","turnSeriesType()");
        last.addClass('aActive').attr("onclick"," ");
    }else {
        seriesType = 'line';
        showAllData() ;
        first.addClass('aActive').attr("onclick"," ");
        last.removeClass('aActive').attr("onclick","turnSeriesType()");
        //last.;
    }
}





