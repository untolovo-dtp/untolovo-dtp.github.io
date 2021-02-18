
        ymaps.ready(init);

        function init() {
            var myMap = new ymaps.Map("map", {
                    center: [60.023284,30.235214],
                    zoom: 13,
                controls: ['zoomControl']
                },{suppressMapOpenBlock: true}),
                
        // Создадим собственный макет выпадающего списка.
                ListBoxLayout = ymaps.templateLayoutFactory.createClass(


"<div class='dropdown mb-1'>"+
"  <a class='btn btn-light btn-sm border dropdown-toggle' href='#' role='button' id='dropdownMenuLink' data-bs-toggle='dropdown' aria-haspopup='true'  aria-expanded='false'>"+
"    2016–2020"+
"  </a>"+
"  <div class='dropdown-menu' aria-labelledby='dropdownMenuLink'>"+
"    <a class='dropdown-item' href='/2016-2020/motorists/'>2016–2020</a>"+
"    <a class='dropdown-item' href='/2016/motorists/'>2016</a>"+
"    <a class='dropdown-item' href='/2017/motorists/'>2017</a>"+
"    <a class='dropdown-item' href='/2018/motorists/'>2018</a>"+
"    <a class='dropdown-item' href='/2019/motorists/'>2019</a>"+
"    <a class='dropdown-item' href='/2020/motorists/'>2020</a>"+
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
"  <a class='btn btn-light btn-sm border dropdown-toggle' href='#' role='button' id='dropdownMenuLink1' data-bs-toggle='dropdown' aria-haspopup='true'  aria-expanded='false'>"+
"    С пострадавшими без пешеходов"+
"  </a>"+
"  <div class='dropdown-menu' aria-labelledby='dropdownMenuLink1'>"+
"    <a class='dropdown-item' href='/2016-2020/'>Все ДТП</a>"+
"    <a class='dropdown-item' href='/2016-2020/children/'>Все ДТП с детьми до 16 лет</a>"+
"    <a class='dropdown-item' href='/2016-2020/deaths/'>С погибшими</a>"+
"    <a class='dropdown-item' href='/2016-2020/townsfolks/'>С пострадавшими пешеходами</a>"+
"    <a class='dropdown-item' href='/2016-2020/motorists/'>С пострадавшими без пешеходов</a>"+
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

[{"geometry":{"coordinates":["60.0206","30.235"],"type":"Point"},"id":"190933951","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"10 января 2016, 00:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.025","30.219"],"type":"Point"},"id":"190881791","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Съезд с дороги<br>Двое пострадавших<br>Среди них по крайней мере один ребёнок до 16 лет<br>","balloonContentHeader":"23 января 2016, 17:30","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0283","30.2139"],"type":"Point"},"id":"191108131","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"10 февраля 2016, 17:45","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0169","30.2489"],"type":"Point"},"id":"191350908","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"1 марта 2016, 02:20","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0194","30.2458"],"type":"Point"},"id":"191418640","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший<br>","balloonContentHeader":"17 марта 2016, 17:50","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0192","30.2569"],"type":"Point"},"id":"191485916","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Четверо пострадавших<br>Среди них по крайней мере один ребёнок до 16 лет<br>","balloonContentHeader":"25 марта 2016, 16:15","iconContent":4},"type":"Feature"},{"geometry":{"coordinates":["60.0194","30.2461"],"type":"Point"},"id":"191485106","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"24 марта 2016, 08:25","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0322","30.2517"],"type":"Point"},"id":"191480814","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"23 марта 2016, 23:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0214","30.2639"],"type":"Point"},"id":"191480753","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"22 марта 2016, 18:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0322","30.2517"],"type":"Point"},"id":"192531969","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"17 апреля 2016, 15:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0231","30.2814"],"type":"Point"},"id":"193175548","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"10 мая 2016, 07:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0211","30.2631"],"type":"Point"},"id":"193980591","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"3 июня 2016, 19:50","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.025117","30.22821"],"type":"Point"},"id":"194285067","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"20 июня 2016, 13:40","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0172","30.2792"],"type":"Point"},"id":"194724845","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"2 июля 2016, 15:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0214","30.2639"],"type":"Point"},"id":"194872820","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"1 июля 2016, 18:10","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0164","30.2492"],"type":"Point"},"id":"195835598","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"26 июля 2016, 11:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0211","30.2625"],"type":"Point"},"id":"195753335","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"25 июля 2016, 07:55","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0322","30.2514"],"type":"Point"},"id":"196346427","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"9 августа 2016, 19:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0211","30.2631"],"type":"Point"},"id":"196130029","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"4 августа 2016, 17:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.017148","30.279078"],"type":"Point"},"id":"197162409","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"18 августа 2016, 17:20","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0322","30.2519"],"type":"Point"},"id":"196958840","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"15 августа 2016, 09:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0214","30.225"],"type":"Point"},"id":"198294783","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший<br>","balloonContentHeader":"13 августа 2016, 10:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.024541","30.23974"],"type":"Point"},"id":"198575101","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший<br>","balloonContentHeader":"2 сентября 2016, 14:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0164","30.2292"],"type":"Point"},"id":"198905713","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"12 сентября 2016, 07:20","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0283","30.2119"],"type":"Point"},"id":"199605525","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"23 сентября 2016, 02:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0253","30.2508"],"type":"Point"},"id":"201209290","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"19 октября 2016, 07:17","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0328","30.2508"],"type":"Point"},"id":"200747617","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"11 октября 2016, 08:10","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0144","30.2417"],"type":"Point"},"id":"201488557","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"28 октября 2016, 22:10","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0175","30.2769"],"type":"Point"},"id":"201342654","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"27 октября 2016, 11:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0186","30.2569"],"type":"Point"},"id":"201261897","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"25 октября 2016, 17:35","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0264","30.2247"],"type":"Point"},"id":"202188895","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший<br>","balloonContentHeader":"9 декабря 2016, 14:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0239","30.2564"],"type":"Point"},"id":"201687184","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"2 декабря 2016, 16:00","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0322","30.2514"],"type":"Point"},"id":"202154895","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"1 декабря 2016, 18:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0172","30.2353"],"type":"Point"},"id":"202423196","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"28 декабря 2016, 07:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0211","30.2444"],"type":"Point"},"id":"202356370","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший<br>","balloonContentHeader":"25 декабря 2016, 00:50","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0247","30.2392"],"type":"Point"},"id":"202339557","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>Среди них по крайней мере один ребёнок до 16 лет<br>","balloonContentHeader":"22 декабря 2016, 07:50","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0181","30.2719"],"type":"Point"},"id":"202809600","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"16 ноября 2016, 16:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023353","30.220785"],"type":"Point"},"id":"202970196","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Трое пострадавших<br>","balloonContentHeader":"27 ноября 2016, 21:10","iconContent":3},"type":"Feature"},{"geometry":{"coordinates":["60.0181","30.2539"],"type":"Point"},"id":"202906977","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"25 ноября 2016, 23:45","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0164","30.2492"],"type":"Point"},"id":"202910106","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"24 ноября 2016, 15:30","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0194","30.2558"],"type":"Point"},"id":"202910105","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"23 ноября 2016, 00:05","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0164","30.2483"],"type":"Point"},"id":"202909881","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"21 ноября 2016, 15:45","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0147","30.2414"],"type":"Point"},"id":"203254743","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"5 января 2017, 11:45","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0175","30.2789"],"type":"Point"},"id":"203419656","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"17 января 2017, 20:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0231","30.2211"],"type":"Point"},"id":"203419524","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"16 января 2017, 17:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0169","30.2489"],"type":"Point"},"id":"203893370","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"12 февраля 2017, 14:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.01422","30.241818"],"type":"Point"},"id":"204369550","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"16 марта 2017, 09:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0211","30.2639"],"type":"Point"},"id":"204498681","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"8 апреля 2017, 02:45","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0175","30.2775"],"type":"Point"},"id":"205044887","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"6 мая 2017, 16:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0264","30.2456"],"type":"Point"},"id":"205074664","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"20 мая 2017, 22:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0211","30.2539"],"type":"Point"},"id":"205057334","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"17 мая 2017, 21:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0292","30.2342"],"type":"Point"},"id":"205044913","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший<br>","balloonContentHeader":"13 мая 2017, 20:25","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0172","30.279007"],"type":"Point"},"id":"205044916","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"12 мая 2017, 10:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0125","30.2349"],"type":"Point"},"id":"205044915","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"12 мая 2017, 14:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0264","30.225"],"type":"Point"},"id":"205379942","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"8 июня 2017, 14:37","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0231","30.2311"],"type":"Point"},"id":"205354961","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"5 июня 2017, 23:45","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0206","30.2644"],"type":"Point"},"id":"205480837","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший — ребёнок до 16 лет<br>","balloonContentHeader":"20 июня 2017, 17:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0211","30.2439"],"type":"Point"},"id":"205455441","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"16 июня 2017, 22:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0275","30.2353"],"type":"Point"},"id":"205434403","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Опрокидывание<br>Один пострадавший<br>","balloonContentHeader":"15 июня 2017, 20:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0208","30.2644"],"type":"Point"},"id":"205693728","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"5 июля 2017, 20:00","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0192","30.28"],"type":"Point"},"id":"205972072","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"26 июля 2017, 17:38","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0189","30.2564"],"type":"Point"},"id":"206188615","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"14 августа 2017, 20:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0211","30.2628"],"type":"Point"},"id":"206372541","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"29 августа 2017, 11:40","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.03","30.2539"],"type":"Point"},"id":"206656673","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"5 сентября 2017, 09:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0197","30.2661"],"type":"Point"},"id":"206740229","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на препятствие<br>Один пострадавший<br>","balloonContentHeader":"11 сентября 2017, 23:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0203","30.2247"],"type":"Point"},"id":"206919414","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"25 сентября 2017, 14:50","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0325","30.2508"],"type":"Point"},"id":"206889840","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"23 сентября 2017, 17:00","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0169","30.2492"],"type":"Point"},"id":"206889841","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Трое пострадавших<br>","balloonContentHeader":"23 сентября 2017, 17:45","iconContent":3},"type":"Feature"},{"geometry":{"coordinates":["60.0175","30.2792"],"type":"Point"},"id":"206855281","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"21 сентября 2017, 17:50","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0194","30.28"],"type":"Point"},"id":"207138395","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"10 октября 2017, 19:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0203","30.225"],"type":"Point"},"id":"207098546","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Трое пострадавших<br>Среди них по крайней мере один ребёнок до 16 лет<br>","balloonContentHeader":"9 октября 2017, 13:35","iconContent":3},"type":"Feature"},{"geometry":{"coordinates":["60.024562","30.24003"],"type":"Point"},"id":"207476262","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Трое пострадавших<br>","balloonContentHeader":"16 октября 2017, 15:10","iconContent":3},"type":"Feature"},{"geometry":{"coordinates":["60.0169","30.2492"],"type":"Point"},"id":"207195900","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"14 октября 2017, 18:30","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0211","30.2644"],"type":"Point"},"id":"207643240","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"3 декабря 2017, 11:30","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0189","30.2572"],"type":"Point"},"id":"207486578","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"1 декабря 2017, 08:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0247","30.26"],"type":"Point"},"id":"208018210","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"4 ноября 2017, 09:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0175","30.2486"],"type":"Point"},"id":"208169141","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Двое пострадавших<br>","balloonContentHeader":"15 ноября 2017, 19:30","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0169","30.2492"],"type":"Point"},"id":"208314614","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"25 ноября 2017, 23:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0233","30.2414"],"type":"Point"},"id":"208653755","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"20 января 2018, 22:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023085","30.220198"],"type":"Point"},"id":"208916782","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"31 января 2018, 07:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0261","30.2481"],"type":"Point"},"id":"208906479","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"5 февраля 2018, 10:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0211","30.2642"],"type":"Point"},"id":"208949479","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"13 февраля 2018, 18:05","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0311","30.2861"],"type":"Point"},"id":"209117086","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"10 марта 2018, 17:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0164","30.2492"],"type":"Point"},"id":"209125439","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>5 пострадавших<br>","balloonContentHeader":"10 марта 2018, 01:00","iconContent":5},"type":"Feature"},{"geometry":{"coordinates":["60.0208","30.2631"],"type":"Point"},"id":"209073049","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"2 марта 2018, 20:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0275","30.275"],"type":"Point"},"id":"209166335","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"17 марта 2018, 00:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0203","30.2619"],"type":"Point"},"id":"209139794","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший — ребёнок до 16 лет<br>","balloonContentHeader":"14 марта 2018, 18:50","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0203","30.2647"],"type":"Point"},"id":"209378494","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"17 апреля 2018, 13:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0169","30.2492"],"type":"Point"},"id":"209269348","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"17 апреля 2018, 11:57","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0208","30.2642"],"type":"Point"},"id":"209255158","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"16 апреля 2018, 13:45","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0206","30.2628"],"type":"Point"},"id":"209380574","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший<br>","balloonContentHeader":"24 апреля 2018, 00:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0247","30.2497"],"type":"Point"},"id":"209319281","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на препятствие<br>Один пострадавший<br>","balloonContentHeader":"23 апреля 2018, 19:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.032127","30.251472"],"type":"Point"},"id":"209477960","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Трое пострадавших<br>","balloonContentHeader":"15 мая 2018, 09:30","iconContent":3},"type":"Feature"},{"geometry":{"coordinates":["60.0197","30.2589"],"type":"Point"},"id":"209893990","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший<br>","balloonContentHeader":"17 июня 2018, 17:05","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0194","30.2456"],"type":"Point"},"id":"210058566","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"30 июня 2018, 18:45","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.017135","30.2789"],"type":"Point"},"id":"209900293","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"21 июня 2018, 11:12","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0208","30.2639"],"type":"Point"},"id":"210282518","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>Среди них по крайней мере один ребёнок до 16 лет<br>","balloonContentHeader":"13 июля 2018, 18:40","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0175","30.2481"],"type":"Point"},"id":"210487657","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"29 июля 2018, 14:50","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.025241","30.238838"],"type":"Point"},"id":"210437313","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"23 июля 2018, 20:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.021842","30.222659"],"type":"Point"},"id":"210609864","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"10 августа 2018, 20:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.032573","30.250854"],"type":"Point"},"id":"210652431","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший — ребёнок до 16 лет<br>","balloonContentHeader":"17 августа 2018, 11:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022818","30.241982"],"type":"Point"},"id":"210668495","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"16 августа 2018, 08:10","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.0172","30.2786"],"type":"Point"},"id":"210580796","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"11 августа 2018, 21:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.032123","30.251198"],"type":"Point"},"id":"210850007","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"10 сентября 2018, 08:10","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.018926","30.257163"],"type":"Point"},"id":"210844187","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"8 сентября 2018, 12:30","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.017199","30.278986"],"type":"Point"},"id":"210813946","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"5 сентября 2018, 17:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.019129","30.256777"],"type":"Point"},"id":"211435221","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Трое пострадавших<br>","balloonContentHeader":"14 сентября 2018, 20:20","iconContent":3},"type":"Feature"},{"geometry":{"coordinates":["60.0211","30.2644"],"type":"Point"},"id":"212864016","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"27 сентября 2018, 08:45","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.020051","30.254846"],"type":"Point"},"id":"212866019","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший<br>","balloonContentHeader":"10 октября 2018, 12:31","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0242","30.2503"],"type":"Point"},"id":"213396533","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"20 октября 2018, 11:10","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.032348","30.251176"],"type":"Point"},"id":"212864277","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"15 октября 2018, 18:42","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022448","30.252324"],"type":"Point"},"id":"212864018","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"12 октября 2018, 14:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.019076","30.256798"],"type":"Point"},"id":"213604584","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший — ребёнок до 16 лет<br>","balloonContentHeader":"8 декабря 2018, 00:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0231","30.2819"],"type":"Point"},"id":"213592069","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"6 декабря 2018, 16:42","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.017135","30.278943"],"type":"Point"},"id":"213908512","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"16 декабря 2018, 20:45","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.021081","30.264341"],"type":"Point"},"id":"213908878","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"15 декабря 2018, 08:55","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.017119","30.27891"],"type":"Point"},"id":"213794198","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"13 декабря 2018, 14:43","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.03208","30.251005"],"type":"Point"},"id":"213816279","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"13 декабря 2018, 22:07","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.025927","30.248237"],"type":"Point"},"id":"213865036","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший — ребёнок до 16 лет<br>","balloonContentHeader":"22 декабря 2018, 12:05","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023054","30.2315"],"type":"Point"},"id":"213863638","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на препятствие<br>Двое пострадавших<br>","balloonContentHeader":"21 декабря 2018, 02:20","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.025166","30.238967"],"type":"Point"},"id":"214427761","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"13 ноября 2018, 18:00","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.023263","30.251048"],"type":"Point"},"id":"214536370","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"28 ноября 2018, 09:20","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.022614","30.268793"],"type":"Point"},"id":"214428198","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"22 ноября 2018, 12:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.027256","30.209441"],"type":"Point"},"id":"214444900","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"22 ноября 2018, 22:51","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.026098","30.274801"],"type":"Point"},"id":"214906959","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"23 января 2019, 16:12","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.018969","30.256981"],"type":"Point"},"id":"215444944","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"7 февраля 2019, 16:25","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.025176","30.228217"],"type":"Point"},"id":"216233304","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"20 февраля 2019, 15:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.017371","30.279093"],"type":"Point"},"id":"216551767","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"12 февраля 2019, 12:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.02464","30.236939"],"type":"Point"},"id":"215706311","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"11 февраля 2019, 15:55","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.019687","30.235373"],"type":"Point"},"id":"216276659","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"24 февраля 2019, 20:55","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.019151","30.256863"],"type":"Point"},"id":"216823965","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший<br>","balloonContentHeader":"5 марта 2019, 14:35","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.02063","30.24431"],"type":"Point"},"id":"217481184","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший<br>","balloonContentHeader":"19 марта 2019, 11:13","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.026399","30.274791"],"type":"Point"},"id":"217622530","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на препятствие<br>Один пострадавший — ребёнок до 16 лет<br>","balloonContentHeader":"31 марта 2019, 20:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022818","30.220599"],"type":"Point"},"id":"217566869","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Один пострадавший<br>","balloonContentHeader":"24 марта 2019, 18:05","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0283","30.2681"],"type":"Point"},"id":"217376707","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"24 марта 2019, 12:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.016518","30.249052"],"type":"Point"},"id":"217620768","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"10 апреля 2019, 16:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.020127","30.265499"],"type":"Point"},"id":"217947391","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>5 пострадавших<br>","balloonContentHeader":"20 апреля 2019, 22:18","iconContent":5},"type":"Feature"},{"geometry":{"coordinates":["60.013441","30.233442"],"type":"Point"},"id":"217842929","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на лицо, не являющееся участником дорожного движения, осуществляющее несение службы<br>Один пострадавший<br>","balloonContentHeader":"27 апреля 2019, 22:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.017113","30.2789"],"type":"Point"},"id":"217947610","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"25 апреля 2019, 20:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022518","30.280981"],"type":"Point"},"id":"218886602","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"31 мая 2019, 13:25","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.017162","30.278932"],"type":"Point"},"id":"219544383","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"5 июня 2019, 16:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.027599","30.25667"],"type":"Point"},"id":"219544231","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на препятствие<br>Один пострадавший<br>","balloonContentHeader":"14 июня 2019, 22:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.016609","30.24931"],"type":"Point"},"id":"219545986","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"30 июня 2019, 12:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.0281","30.275"],"type":"Point"},"id":"219545915","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"26 июня 2019, 11:03","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.025225","30.238903"],"type":"Point"},"id":"219626144","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"5 июля 2019, 10:58","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.014315","30.241424"],"type":"Point"},"id":"219941427","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"30 августа 2019, 01:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.027851","30.221382"],"type":"Point"},"id":"220084409","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"22 августа 2019, 07:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023225","30.282032"],"type":"Point"},"id":"220068461","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"3 сентября 2019, 22:17","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.02375","30.233989"],"type":"Point"},"id":"220025701","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"11 сентября 2019, 12:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023093","30.281565"],"type":"Point"},"id":"220084901","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"21 сентября 2019, 22:10","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.01944","30.245748"],"type":"Point"},"id":"220089241","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"17 октября 2019, 13:30","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.01543","30.240598"],"type":"Point"},"id":"220073545","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"10 декабря 2019, 15:57","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.024876","30.237808"],"type":"Point"},"id":"220094161","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"14 декабря 2019, 10:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.012282","30.234311"],"type":"Point"},"id":"220098678","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на препятствие<br>Один пострадавший<br>","balloonContentHeader":"8 ноября 2019, 02:50","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.032443","30.250267"],"type":"Point"},"id":"220098762","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"8 ноября 2019, 19:00","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.018039","30.227601"],"type":"Point"},"id":"220099582","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"14 ноября 2019, 03:17","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.029225","30.216507"],"type":"Point"},"id":"220102238","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"26 ноября 2019, 19:12","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023204","30.282097"],"type":"Point"},"id":"220384451","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"9 января 2020, 13:45","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.020913","30.264979"],"type":"Point"},"id":"220387415","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"1 января 2020, 04:20","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.021794","30.227283"],"type":"Point"},"id":"220387331","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"16 января 2020, 08:00","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.031705","30.254803"],"type":"Point"},"id":"220388131","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"20 февраля 2020, 12:20","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.020244","30.261701"],"type":"Point"},"id":"220393495","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"21 февраля 2020, 20:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022839","30.241692"],"type":"Point"},"id":"220392695","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>Среди них по крайней мере один ребёнок до 16 лет<br>","balloonContentHeader":"9 марта 2020, 19:20","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.022164","30.281539"],"type":"Point"},"id":"220392207","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"13 марта 2020, 16:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.021381","30.224134"],"type":"Point"},"id":"220393807","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Опрокидывание<br>Один пострадавший<br>","balloonContentHeader":"22 марта 2020, 19:50","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.025219","30.23916"],"type":"Point"},"id":"220454277","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"2 апреля 2020, 09:55","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.026248","30.237958"],"type":"Point"},"id":"220583150","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"27 мая 2020, 14:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.025133","30.228882"],"type":"Point"},"id":"220559711","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"25 мая 2020, 18:25","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023906","30.273149"],"type":"Point"},"id":"220605593","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"8 июня 2020, 20:19","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.019108","30.256906"],"type":"Point"},"id":"220642226","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"18 июня 2020, 18:40","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022968","30.252271"],"type":"Point"},"id":"220650031","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"25 июня 2020, 13:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.028473","30.214258"],"type":"Point"},"id":"220650129","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"25 июня 2020, 20:15","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.032648","30.250404"],"type":"Point"},"id":"220738542","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"20 июля 2020, 08:45","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.032889","30.222391"],"type":"Point"},"id":"220841874","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"24 августа 2020, 08:35","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023038","30.231628"],"type":"Point"},"id":"220891038","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Трое пострадавших<br>","balloonContentHeader":"10 сентября 2020, 07:55","iconContent":3},"type":"Feature"},{"geometry":{"coordinates":["60.02583","30.238184"],"type":"Point"},"id":"220877351","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший — ребёнок до 16 лет<br>","balloonContentHeader":"6 сентября 2020, 13:10","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.026731","30.237036"],"type":"Point"},"id":"220908990","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"3 сентября 2020, 23:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.023311","30.282118"],"type":"Point"},"id":"220909745","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"18 сентября 2020, 06:50","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.02427","30.250726"],"type":"Point"},"id":"220901140","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"15 сентября 2020, 08:46","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.022266","30.252571"],"type":"Point"},"id":"220901171","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Наезд на стоящее ТС<br>Двое пострадавших<br>","balloonContentHeader":"15 сентября 2020, 09:50","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.025262","30.238881"],"type":"Point"},"id":"220980775","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Трое пострадавших<br>Среди них по крайней мере один ребёнок до 16 лет<br>","balloonContentHeader":"7 октября 2020, 07:40","iconContent":3},"type":"Feature"},{"geometry":{"coordinates":["60.027974","30.283867"],"type":"Point"},"id":"220958523","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"5 октября 2020, 16:10","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.020995","30.264158"],"type":"Point"},"id":"221044714","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Двое пострадавших<br>","balloonContentHeader":"8 декабря 2020, 12:45","iconContent":2},"type":"Feature"},{"geometry":{"coordinates":["60.024855","30.228217"],"type":"Point"},"id":"221236819","options":{"preset":"islands#violetIcon"},"properties":{"balloonContentBody":"Тип ДТП: Падение пассажира<br>Один пострадавший<br>","balloonContentHeader":"24 декабря 2020, 15:30","iconContent":1},"type":"Feature"},{"geometry":{"coordinates":["60.017725","30.227841"],"type":"Point"},"id":"221161289","options":{"preset":"islands#yellowIcon"},"properties":{"balloonContentBody":"Тип ДТП: Столкновение<br>Один пострадавший<br>","balloonContentHeader":"25 ноября 2020, 21:00","iconContent":1},"type":"Feature"}]
     

            }
        );
        
        }
     

