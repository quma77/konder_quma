function scrollToDiv() {
  var targetDiv = document.getElementById("targetDiv");
  targetDiv.scrollIntoView({ behavior: "smooth" });
}

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.739795, 52.405649],
    zoom: 15,
  });

  var myPlacemark = new ymaps.Placemark([55.739795, 52.405649], {
    balloonContent: "Проспект Мира, дом 49а, Набережные Челны",
  });
  myMap.geoObjects.add(myPlacemark);

  // Отслеживаем события мыши на карте
  myMap.events.add(["wheel", "mousedown"], function (e) {
    // Предотвращаем стандартное поведение браузера
    e.preventDefault();
  });
}
