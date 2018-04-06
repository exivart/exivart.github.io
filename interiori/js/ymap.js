ymaps.ready(init);
    var myMap,
        myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [43.25011171, 76.96369711],
        zoom: 17
    });

    myPlacemark = new ymaps.Placemark([43.25011171, 76.96369711], {
        hintContent: 'Interiori',
        balloonContentHeader: 'Interiori',
        balloonContentBody: 'г. Алматы, пр. Кабанбай-Батыра, 12',
        balloonContentFooter: 'Тел.: 87019955604'
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add(new ymaps.control.ZoomControl());
}
