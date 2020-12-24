
        ymaps.ready(init);

        function init() {
            var myMap = new ymaps.Map("map", {
                    center: [60.023284,30.235214],
                    zoom: 13,
                controls: ['zoomControl']
                }),
                
        // Создадим собственный макет выпадающего списка.
                ListBoxLayout = ymaps.templateLayoutFactory.createClass(


"<div class='dropdown mb-1'>"+
"  <a class='btn btn-light btn-sm border dropdown-toggle' href='#' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true'  aria-expanded='false'>"+
"    2020"+
"  </a>"+
"  <div class='dropdown-menu' aria-labelledby='dropdownMenuLink'>"+
"    <a class='dropdown-item' href='/2016-2020/'>2016–2020</a>"+
"    <a class='dropdown-item' href='/2016/'>2016</a>"+
"    <a class='dropdown-item' href='/2017/'>2017</a>"+
"    <a class='dropdown-item' href='/2018/'>2018</a>"+
"    <a class='dropdown-item' href='/2019/'>2019</a>"+
"    <a class='dropdown-item' href='/2020/'>2020</a>"+
"  </div>"+
"</div>"


, {

                    build: function() {
                        // Вызываем метод build родительского класса перед выполнением
                        // дополнительных действий.
                        ListBoxLayout.superclass.build.call(this);

                        this.childContainerElement = $('#my-listbox').get(0);
                        // Генерируем специальное событие, оповещающее элемент управления
                        // о смене контейнера дочерних элементов.
                        this.events.fire('childcontainerchange', {
                            newChildContainerElement: this.childContainerElement,
                            oldChildContainerElement: null
                        });
                    },

                    // Переопределяем интерфейсный метод, возвращающий ссылку на
                    // контейнер дочерних элементов.
                    getChildContainerElement: function () {
                        return this.childContainerElement;
                    },

                    clear: function () {
                        // Заставим элемент управления перед очисткой макета
                        // откреплять дочерние элементы от родительского.
                        // Это защитит нас от неожиданных ошибок,
                        // связанных с уничтожением dom-элементов в ранних версиях ie.
                        this.events.fire('childcontainerchange', {
                            newChildContainerElement: null,
                            oldChildContainerElement: this.childContainerElement
                        });
                        this.childContainerElement = null;
                        // Вызываем метод clear родительского класса после выполнения
                        // дополнительных действий.
                        ListBoxLayout.superclass.clear.call(this);
                    }
                }),

            
               

                // Теперь создадим список, содержащий 2 пункта.
                listBox = new ymaps.control.ListBox({
                        options: {
                            // С помощью опций можно задать как макет непосредственно для списка,
                            layout: ListBoxLayout
                        }
                    }),
                    ListBoxLayout1 = ymaps.templateLayoutFactory.createClass(

"<div class='dropdown'>"+
"  <a class='btn btn-light btn-sm border dropdown-toggle' href='#' role='button' id='dropdownMenuLink1' data-toggle='dropdown' aria-haspopup='true'  aria-expanded='false'>"+
"    Все ДТП"+
"  </a>"+
"  <div class='dropdown-menu' aria-labelledby='dropdownMenuLink1'>"+
"    <a class='dropdown-item' href='/2020/'>Все ДТП</a>"+
"    <a class='dropdown-item' href='/2020/deaths/'>С погибшими</a>"+
"    <a class='dropdown-item' href='/2020/townsfolks/'>С пострадавшими пешеходами</a>"+
"    <a class='dropdown-item' href='/2020/motorists/'>С пострадавшими без пешеходов</a>"+
"  </div>"+
"</div>"


, {

                    build: function() {
                        // Вызываем метод build родительского класса перед выполнением
                        // дополнительных действий.
                        ListBoxLayout1.superclass.build.call(this);

                        this.childContainerElement = $('#my-listbox1').get(0);
                        // Генерируем специальное событие, оповещающее элемент управления
                        // о смене контейнера дочерних элементов.
                        this.events.fire('childcontainerchange', {
                            newChildContainerElement: this.childContainerElement,
                            oldChildContainerElement: null
                        });
                    },

                    // Переопределяем интерфейсный метод, возвращающий ссылку на
                    // контейнер дочерних элементов.
                    getChildContainerElement: function () {
                        return this.childContainerElement;
                    },

                    clear: function () {
                        // Заставим элемент управления перед очисткой макета
                        // откреплять дочерние элементы от родительского.
                        // Это защитит нас от неожиданных ошибок,
                        // связанных с уничтожением dom-элементов в ранних версиях ie.
                        this.events.fire('childcontainerchange', {
                            newChildContainerElement: null,
                            oldChildContainerElement: this.childContainerElement
                        });
                        this.childContainerElement = null;
                        // Вызываем метод clear родительского класса после выполнения
                        // дополнительных действий.
                        ListBoxLayout1.superclass.clear.call(this);
                    }
                }),

            
               

                // Теперь создадим список, содержащий 2 пункта.
                listBox1 = new ymaps.control.ListBox({
                        options: {
                            // С помощью опций можно задать как макет непосредственно для списка,
                            layout: ListBoxLayout1
                        }
                    })
                    
                    
                    
                    ;

                
                ;
                myMap.controls.add(listBox1, {float: 'left'}).add(listBox, {float: 'left'});


                ;

                
                ;
            //    myMap.controls.add(listBox1, {float: 'left'});

              // Создаем ломаную с помощью вспомогательного класса Polyline.
                var myPolyline = new ymaps.Polyline([
                        // Указываем координаты вершин ломаной.
                
[60.005664,30.187901],
[60.006201,30.187708],
[60.006706,30.188115],
[60.007243,30.188995],
[60.007625,30.189907],
[60.008458,30.191473],
[60.008946,30.192149],
[60.009489,30.192782],
[60.009806,30.193458],
[60.010198,30.194070],
[60.010719,30.194832],
[60.011337,30.195625],
[60.012062,30.196570],
[60.012374,30.197106],
[60.012712,30.197492],
[60.012970,30.197900],
[60.013179,30.198554],
[60.013373,30.199198],
[60.013609,30.199638],
[60.013915,30.200035],
[60.014382,30.200496],
[60.014715,30.200947],
[60.014973,30.201237],
[60.015247,30.201194],
[60.015446,30.200926],
[60.015639,30.200786],
[60.016004,30.200893],
[60.016133,30.201140],
[60.016305,30.201387],
[60.016504,30.201516],
[60.016719,30.201419],
[60.016960,30.200968],
[60.017003,30.200475],
[60.016955,30.200110],
[60.016703,30.199724],
[60.016606,30.199338],
[60.016665,30.198597],
[60.016821,30.197567],
[60.016928,30.197138],
[60.017186,30.196666],
[60.017395,30.196462],
[60.017583,30.196441],
[60.017847,30.196537],
[60.018169,30.196784],
[60.018459,30.196945],
[60.018615,30.197106],
[60.018743,30.197449],
[60.018905,30.197739],
[60.019066,30.197825],
[60.019248,30.197782],
[60.019431,30.197535],
[60.019592,30.197160],
[60.019694,30.196752],
[60.019764,30.196280],
[60.019748,30.195851],
[60.019775,30.195518],
[60.019882,30.195121],
[60.019995,30.194681],
[60.020070,30.194252],
[60.020193,30.193887],
[60.020483,30.193533],
[60.020940,30.193093],
[60.021149,30.192739],
[60.021595,30.191827],
[60.021821,30.191388],
[60.022078,30.190851],
[60.022255,30.190669],
[60.022422,30.190486],
[60.022562,30.190240],
[60.022803,30.190079],
[60.022991,30.189864],
[60.023496,30.189478],
[60.023748,30.189360],
[60.023931,30.189295],
[60.024103,30.189145],
[60.024221,30.189102],
[60.024334,30.189199],
[60.024363,30.189360],
[60.024393,30.189558],
[60.024479,30.189703],
[60.024699,30.189751],
[60.024838,30.189886],
[60.025010,30.189945],
[60.025099,30.189859],
[60.025158,30.189735],
[60.025182,30.189542],
[60.025279,30.189403],
[60.025456,30.189215],
[60.025735,30.188909],
[60.025979,30.188695],
[60.026280,30.188426],
[60.026642,30.188164],
[60.026887,30.188029],
[60.027228,30.187750],
[60.027496,30.187536],
[60.027888,30.187236],
[60.028105,30.187075],
[60.028664,30.186608],
[60.029042,30.186291],
[60.029351,30.186002],
[60.029746,30.185632],
[60.029869,30.185594],
[60.029950,30.185540],
[60.030041,30.185396],
[60.030137,30.185213],
[60.030210,30.185186],
[60.030350,30.185159],
[60.030583,30.184961],
[60.030731,30.184789],
[60.030857,30.184693],
[60.030967,30.184666],
[60.031421,30.184290],
[60.031775,30.184022],
[60.031952,30.183824],
[60.032177,30.183625],
[60.032314,30.183668],
[60.032502,30.183765],
[60.032752,30.183920],
[60.032929,30.183947],
[60.033077,30.183969],
[60.033179,30.183990],
[60.033329,30.184205],
[60.033581,30.184065],
[60.033844,30.184205],
[60.034174,30.184269],
[60.034260,30.184344],
[60.034534,30.184290],
[60.034668,30.184344],
[60.034770,30.184317],
[60.034920,30.184237],
[60.035124,30.184274],
[60.035280,30.184280],
[60.035412,30.184087],
[60.035522,30.183947],
[60.035630,30.183955],
[60.035734,30.184006],
[60.035973,30.184124],
[60.036142,30.184221],
[60.036292,30.184333],
[60.036415,30.184435],
[60.036533,30.184650],
[60.036625,30.184682],
[60.036713,30.184602],
[60.036775,30.184714],
[60.036850,30.184972],
[60.036893,30.185353],
[60.036882,30.185573],
[60.036901,30.185975],
[60.036955,30.186173],
[60.037089,30.186270],
[60.037258,30.186340],
[60.037247,30.186560],
[60.037231,30.186785],
[60.037371,30.186865],
[60.037505,30.186839],
[60.037553,30.186710],
[60.037604,30.186425],
[60.037803,30.186152],
[60.037948,30.186206],
[60.038007,30.186377],
[60.038034,30.186495],
[60.038297,30.186307],
[60.038345,30.186442],
[60.038431,30.186452],
[60.038463,30.186656],
[60.038503,30.187053],
[60.038458,30.187187],
[60.038409,30.187182],
[60.038372,30.187037],
[60.038326,30.187101],
[60.038315,30.187252],
[60.038227,30.187418],
[60.038232,30.187804],
[60.038286,30.187954],
[60.038342,30.188067],
[60.038195,30.188367],
[60.038176,30.188561],
[60.038230,30.188700],
[60.038369,30.188748],
[60.038519,30.188630],
[60.038554,30.188400],
[60.038788,30.188378],
[60.038844,30.188341],
[60.038915,30.188416],
[60.038970,30.188609],
[60.038965,30.188786],
[60.039002,30.188856],
[60.039120,30.188770],
[60.039220,30.188794],
[60.039341,30.189022],
[60.039617,30.189242],
[60.039649,30.189435],
[60.039673,30.189735],
[60.039625,30.190004],
[60.039453,30.190299],
[60.039397,30.190540],
[60.039413,30.190776],
[60.039504,30.191076],
[60.039163,30.191790],
[60.039110,30.192139],
[60.039102,30.193249],
[60.039040,30.193523],
[60.038742,30.194451],
[60.038399,30.195722],
[60.038028,30.196194],
[60.037382,30.196494],
[60.036316,30.197331],
[60.035184,30.200142],
[60.035124,30.203189],
[60.035425,30.206397],
[60.035951,30.210496],
[60.036177,30.214787],
[60.036037,30.217899],
[60.035769,30.219508],
[60.035167,30.221332],
[60.033568,30.224829],
[60.031871,30.227833],
[60.030723,30.230365],
[60.030261,30.232318],
[60.030132,30.233241],
[60.027748,30.235966],
[60.036799,30.266500],
[60.037529,30.267122],
[60.038152,30.267401],
[60.038624,30.267358],
[60.037969,30.268979],
[60.037400,30.270942],
[60.037261,30.273367],
[60.036509,30.275813],
[60.037288,30.275942],
[60.037298,30.276242],
[60.037384,30.276210],
[60.037470,30.275963],
[60.037669,30.276006],
[60.037795,30.276119],
[60.037857,30.276467],
[60.037669,30.276939],
[60.037449,30.276757],
[60.037261,30.276778],
[60.037073,30.277014],
[60.036826,30.277433],
[60.036676,30.277937],
[60.036482,30.279074],
[60.036466,30.279868],
[60.036343,30.280244],
[60.036273,30.280845],
[60.036155,30.281209],
[60.036241,30.281703],
[60.036144,30.283001],
[60.035382,30.283645],
[60.033825,30.284546],
[60.032977,30.282958],
[60.032720,30.285254],
[60.030819,30.285941],
[60.017234,30.278752],
[60.018464,30.269375],
[60.018711,30.267981],
[60.019066,30.266994],
[60.019366,30.266339],
[60.020983,30.264311],
[60.014474,30.242135],
[60.014313,30.241427],
[60.012239,30.234281],
[60.007426,30.236363],
[60.008608,30.227394],
[60.008855,30.224068],
[60.011552,30.202975],
[60.009972,30.200743],
[60.009016,30.199327],
[60.007727,30.196666],
[60.006470,30.193769],
[60.005653,30.192074],
[60.005041,30.190529],
[60.005105,30.189113],
[60.005395,30.188341],
[60.005664,30.187911]
                    ], {
                        // Описываем свойства геообъекта.
                        // Содержимое балуна.
                        balloonContent: "Ломаная линия"
                    }, {
                        hasBalloon: false,
                        hasHint: false,
                        interactivityModel: "default#silent",
                        // Цвет линии.
                        strokeColor: "#0000FF",
                        cursor: 'INHERIT',
                        // Ширина линии.
                        strokeWidth: 4,
                        strokeStyle: "shortdashdot",
                        // Коэффициент прозрачности.
                        strokeOpacity: 0.4
                    }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: false
        });


    //    objectManager.objects.options.set('preset', 'islands#greenDotIcon');
  //      objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
        myMap.geoObjects.add(myPolyline).add(myPolyline).add(objectManager);

/*        $.ajax({
            url: "data.json"
        }).done(function(data) {
            objectManager.add(data);
        });
*/
        
        
        
        objectManager.add(
            
            {
                "type": "FeatureCollection",
                "features":

[{"geometry":{"coordinates":["60.023204","30.282097"],"type":"Point"},"id":"220384451","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"09.01.2020, 13:45","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.025991","30.2474"],"type":"Point"},"id":"220387747","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"05.01.2020, 12:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.020913","30.264979"],"type":"Point"},"id":"220387415","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"01.01.2020, 04:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.021794","30.227283"],"type":"Point"},"id":"220387331","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"16.01.2020, 08:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.025262","30.239117"],"type":"Point"},"id":"220382707","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"13.01.2020, 17:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.019054","30.257764"],"type":"Point"},"id":"220386779","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"28.01.2020, 10:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.013253","30.233088"],"type":"Point"},"id":"220389065","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"07.02.2020, 14:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.027663","30.246692"],"type":"Point"},"id":"220394491","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"07.02.2020, 17:12","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.016025","30.229837"],"type":"Point"},"id":"220390315","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"02.02.2020, 17:55","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.031705","30.254803"],"type":"Point"},"id":"220388131","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"20.02.2020, 12:20","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.026254","30.258343"],"type":"Point"},"id":"220389823","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"28.02.2020, 17:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023423","30.219119"],"type":"Point"},"id":"220381467","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"22.02.2020, 19:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.020244","30.261701"],"type":"Point"},"id":"220393495","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"21.02.2020, 20:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022839","30.241692"],"type":"Point"},"id":"220392695","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"09.03.2020, 19:20","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.01891","30.257163"],"type":"Point"},"id":"220395547","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"18.03.2020, 20:45","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022164","30.281539"],"type":"Point"},"id":"220392207","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"13.03.2020, 16:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.019242","30.25726"],"type":"Point"},"id":"220451738","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"31.03.2020, 12:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.021381","30.224134"],"type":"Point"},"id":"220393807","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Опрокидывание<br>Один пострадавший<br>","balloonContentHeader":"22.03.2020, 19:50","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023064","30.282247"],"type":"Point"},"id":"220454244","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"02.04.2020, 14:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.025219","30.23916"],"type":"Point"},"id":"220454277","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"02.04.2020, 09:55","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023327","30.241102"],"type":"Point"},"id":"220527327","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"06.05.2020, 12:35","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.026248","30.237958"],"type":"Point"},"id":"220583150","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"27.05.2020, 14:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.025133","30.228882"],"type":"Point"},"id":"220559711","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"25.05.2020, 18:25","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0294","30.2547"],"type":"Point"},"id":"220555090","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"24.05.2020, 13:35","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.027063","30.23695"],"type":"Point"},"id":"220608092","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"09.06.2020, 14:37","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023906","30.273149"],"type":"Point"},"id":"220605593","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"08.06.2020, 20:19","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.019108","30.256906"],"type":"Point"},"id":"220642226","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"18.06.2020, 18:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0233","30.251884"],"type":"Point"},"id":"220627272","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"17.06.2020, 16:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.02255","30.269566"],"type":"Point"},"id":"220618889","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"12.06.2020, 18:55","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022968","30.252271"],"type":"Point"},"id":"220650031","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"25.06.2020, 13:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.028473","30.214258"],"type":"Point"},"id":"220650129","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"25.06.2020, 20:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.020899","30.234096"],"type":"Point"},"id":"220650027","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"25.06.2020, 11:35","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.026093","30.246896"],"type":"Point"},"id":"220692889","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"09.07.2020, 17:50","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023911","30.273235"],"type":"Point"},"id":"220767948","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"07.07.2020, 18:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.032648","30.250404"],"type":"Point"},"id":"220738542","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"20.07.2020, 08:45","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.019998","30.276099"],"type":"Point"},"id":"220800829","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"10.08.2020, 18:44","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.015398","30.245157"],"type":"Point"},"id":"220784589","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"05.08.2020, 16:43","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.033082","30.249803"],"type":"Point"},"id":"220834597","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"20.08.2020, 09:35","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.026173","30.242186"],"type":"Point"},"id":"220824287","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"17.08.2020, 17:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.021362","30.233687"],"type":"Point"},"id":"220824484","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"17.08.2020, 22:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022496","30.221586"],"type":"Point"},"id":"220815506","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"15.08.2020, 15:45","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.032889","30.222391"],"type":"Point"},"id":"220841874","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"24.08.2020, 08:35","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.018926","30.257227"],"type":"Point"},"id":"220892113","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"10.09.2020, 17:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023038","30.231628"],"type":"Point"},"id":"220891038","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Трое пострадавших<br>","balloonContentHeader":"10.09.2020, 07:55","iconContent":3},"type":"Feature"},{"geometry":{"coordinates":["60.033266","30.248994"],"type":"Point"},"id":"220877377","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"06.09.2020, 21:29","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.02583","30.238184"],"type":"Point"},"id":"220877351","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"06.09.2020, 13:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.026731","30.237036"],"type":"Point"},"id":"220908990","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"03.09.2020, 23:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023311","30.282118"],"type":"Point"},"id":"220909745","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"18.09.2020, 06:50","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.02427","30.250726"],"type":"Point"},"id":"220901140","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Один пострадавший<br>","balloonContentHeader":"15.09.2020, 08:46","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022266","30.252571"],"type":"Point"},"id":"220901171","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на стоящее ТС<br>Двое пострадавших<br>","balloonContentHeader":"15.09.2020, 09:50","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.029368","30.219462"],"type":"Point"},"id":"220938237","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"29.09.2020, 09:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.025575","30.259124"],"type":"Point"},"id":"220934742","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"28.09.2020, 07:14","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.016631","30.244439"],"type":"Point"},"id":"220934015","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"27.09.2020, 21:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.025262","30.238881"],"type":"Point"},"id":"220980775","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Трое пострадавших<br>","balloonContentHeader":"07.10.2020, 07:40","iconContent":3},"type":"Feature"},{"geometry":{"coordinates":["60.027974","30.283867"],"type":"Point"},"id":"220958523","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"05.10.2020, 16:10","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.021874","30.253558"],"type":"Point"},"id":"220957067","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"03.10.2020, 09:53","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.028553","30.246241"],"type":"Point"},"id":"220947322","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"01.10.2020, 22:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022223","30.221994"],"type":"Point"},"id":"221013108","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"17.10.2020, 19:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.019848","30.255961"],"type":"Point"},"id":"221029925","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"28.10.2020, 09:50","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.026356","30.24284"],"type":"Point"},"id":"221052190","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Наезд на велосипедиста<br>Один пострадавший<br>","balloonContentHeader":"09.11.2020, 15:25","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.020995","30.264158"],"type":"Point"},"id":"221044714","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"08.11.2020, 12:45","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.017494","30.228066"],"type":"Point"},"id":"221056054","options":{"preset":"islands#orangeIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один пострадавший<br>","balloonContentHeader":"13.11.2020, 21:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.029411","30.254298"],"type":"Point"},"id":"221088232","options":{"preset":"islands#redIcon"},"properties":{"balloonContentBody":"Наезд на пешехода<br>Один погибший<br>","balloonContentHeader":"28.11.2020, 16:56","iconContent":1},"type":"Feature"}]
     

            }
        );
        
        }
     

