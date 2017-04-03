let arrowLeft = document.querySelector('#arrowLeft')
let pa = document.querySelector('.point_a')
let pb = document.querySelector('.point_b')
let pc = document.querySelector('.page-content')

var drawConnector = function () {
  let pos_aLeft = {
    x: pa.getBoundingClientRect().left - pc.getBoundingClientRect().left,
    y: pa.getBoundingClientRect().top - pc.getBoundingClientRect().top
  }
  let pos_bLeft = {
    x: pb.getBoundingClientRect().left - pc.getBoundingClientRect().left,
    y: pb.getBoundingClientRect().top - pc.getBoundingClientRect().top
  }

  let dStrLeft =
    'M' +
    (pos_aLeft.x) + ',' + (pos_aLeft.y) + ' ' +
    'C' +
    (pos_aLeft.x) + ',' + (pos_aLeft.y) + ' ' +
    (pos_bLeft.x) + ',' + (pos_bLeft.y) + ' ' +
    (pos_bLeft.x) + ',' + (pos_bLeft.y)

  arrowLeft.setAttribute('d', dStrLeft)
}

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwdGltZWRjIiwiYSI6ImNqMGJjYTBmdzAyeWIyd3JyMjFrcG9udGQifQ.YyGehvpe0E1DzjSWi2TeDQ'
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/maptimedc/cj0to2bhs00842rqrb370qzgd', //stylesheet location
    center: [-77.032182, 38.8970177], // starting position
    zoom: 15 // starting zoom
})

// map.on('load', function() {  
// }

map.on('movestart', function(e) {
  document.querySelector('#arrowLeft').style.display = 'none'
})

drawConnector()
