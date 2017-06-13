// --------
// Change these values to move where the map is centered & where the star is located
// --------
const breakfastCoor = [-77.0171797, 38.9022986]
const isUpcoming = true

// --------
// Map code
// --------
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwdGltZWRjIiwiYSI6ImNqMGJjYTBmdzAyeWIyd3JyMjFrcG9udGQifQ.YyGehvpe0E1DzjSWi2TeDQ'

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/maptimedc/cj0to2bhs00842rqrb370qzgd',
  center: breakfastCoor,
  zoom: 14
})

function addStarIcon () {
  var location = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: breakfastCoor
      }
    }]
  }

  map.addLayer({
    'id': 'whereWeBreakfasting',
    'type': 'symbol',
    'source': {
      'type': 'geojson',
      'data': location
    },
    'layout': {
      'icon-image': 'star-empty',
      'icon-size': 0.75,
      'icon-ignore-placement': true
    }
  })
}

if (isUpcoming) {
  map.on('load', () => {
    addStarIcon()
  })

  drawConnector()
}

// --------
// Point the arrow to center of the map
// --------
function drawConnector () {
  let arrowLeft = document.querySelector('#arrowLeft')
  let pa = document.querySelector('.point_a')
  let pb = document.querySelector('.point_b')
  let pc = document.querySelector('.page-content')

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

// --------
// Remove the arrow when the map moves.
// --------
map.on('movestart', function (e) {
  document.querySelector('#arrowLeft').style.display = 'none'
})
