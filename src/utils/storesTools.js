var StoresTools = {

  ReturnAddress: ReturnAddress,

  SetCityInfo: SetCityInfo,

  SetLocations: SetLocations,

  AddSvgMarker: AddSvgMarker,

  GetFillColor: GetFillColor,

  GetLabel: GetLabel

}

function ReturnAddress (status, result) {
  if (status === 'complete' && result.regeocode) {
    const addressComponent = result.regeocode.addressComponent
    const province = addressComponent.province
    const city = addressComponent.city
    const district = addressComponent.district
    return province + ' ' + city + ' ' + district
  } else {
    return '未知位置'
  }
}

function SetCityInfo (options) {
  // 展示各个城市的门店数量
  const cityInfo = options.cityInfo
  const vData = options.vData
  const bounds = vData.map.getBounds()

  if (cityInfo === undefined) {
    return
  }

  vData.map.remove(vData.markers)
  vData.nearbyStores = []
  vData.markers = []

  for (let i = 0; i < cityInfo.length; i++) {
    const lng = parseFloat(cityInfo[i].CenterLon)
    const lat = parseFloat(cityInfo[i].CenterLat)
    const lnglat = [lng, lat]
    const label = cityInfo[i].StoreNum
    if (bounds.contains(lnglat)) {
      vData.addMarker(lng, lat, label, '#00A862')
    }
  }
}

function SetLocations (options) {
  const stores = options.stores
  const vData = options.vData
  const disLeval = options.distance

  if (stores === undefined) {
    return
  }

  const len = stores.length
  let label = 0
  const bounds = vData.map.getBounds()

  vData.map.remove(vData.markers)
  vData.nearbyStores = []
  vData.markers = []

  for (let i = 0; i < len; i++) {
    try {
      const lng = parseFloat(stores[i].Longitude)
      const lat = parseFloat(stores[i].Latitude)
      const dis = stores[i].Distance
      const lnglat = [lng, lat]
      if (bounds.contains(lnglat) && dis >= disLeval) {
        label += 1
        vData.nearbyStores.push(stores[i])
        vData.addMarker(lng, lat, label, '#B0B0B0')
        if (label === 90) {
          break
        }
      }
    } catch (err) {
      console.log('Error: ' + err, 'Item: ' + JSON.stringify(stores[i]))
    }
  }

  /*
        // 如果当前视图中没有门店，则自动缩小地图级别进行门店展示
        if(vData.nearbyStores.length === 0){
    	    let zoom = vData.map.getZoom();
    	    vData.map.setZoom(--zoom)
        }
    */
}

function AddSvgMarker (options) {
  const lng = options.lng
  const lat = options.lat
  const label = options.label
  const Marker = options.Marker
  const color = options.color
  const vData = options.vData

  const shape = new Marker.Shape.WaterDrop({
    height: 28,
    width: 21,
    fillColor: color
  })

  const marker = new Marker(
    shape,
    {
      showPositionPoint: false,
      iconLabel: {
        innerHTML: label,
        style: {
          color: '#fff'
        }
      },
      containerClassNames: 'my-font-style',
      map: vData.map,
      position: [lng, lat]
    }
  )
  vData.markers.push(marker)
}

function GetFillColor (options) {
  const item = options.item
  const vData = options.vData
  return vData.markers[item].opts.svgShape.opts.fillColor
}

function GetLabel (options) {
  const item = options.item
  const vData = options.vData
  return vData.markers[item].opts.iconLabel.innerHTML
}

export default StoresTools
