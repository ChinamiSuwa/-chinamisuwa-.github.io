Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YWQ3MDUwZS1kYmFlLTQzYzYtOGE3Ni1jYjRlNDdjM2VmYTkiLCJpZCI6MzI2OTQxLCJpYXQiOjE3NTM4NjEzOTZ9.wIOmJpOaZg0wEvK7Kh-D47tg92zo6f2G9uhV9IS-eX0';

const viewer = new Cesium.Viewer('cesiumContainer', {
   
    skyBox: new Cesium.SkyBox({
        sources: {
            positiveX: 'https://cesium.com/public/assets/images/skybox/tycho2t3_80_px.jpg',
            negativeX: 'https://cesium.com/public/assets/images/skybox/tycho2t3_80_nx.jpg',
            positiveY: 'https://cesium.com/public/assets/images/skybox/tycho2t3_80_py.jpg',
            negativeY: 'https://cesium.com/public/assets/images/skybox/tycho2t3_80_ny.jpg',
            positiveZ: 'https://cesium.com/public/assets/images/skybox/tycho2t3_80_pz.jpg',
            negativeZ: 'https://cesium.com/public/assets/images/skybox/tycho2t3_80_nz.jpg'
        }
    }),
    // 添加大气层效果
    skyAtmosphere: new Cesium.SkyAtmosphere(),
});

// 3. 在Viewer初始化之后，再进行其他操作
//    这些代码现在都在正确的位置了。

// 开启地球光照效果
viewer.scene.globe.enableLighting = true;

viewer.imageryLayers.addImageryProvider(
    new Cesium.IonImageryProvider({ assetId: 3812 })
);

// 4. 设置鼠标点击事件 (这段代码本身是正确的，我们保持原样)
// 创建一个事件处理器
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

// 监听鼠标左键单击事件
handler.setInputAction(function(movement) {
    // 通过点击位置的像素坐标，拾取地球上的笛卡尔坐标
    const cartesian = viewer.camera.pickEllipsoid(movement.position, viewer.scene.globe.ellipsoid);
    
    if (cartesian) {
       
        const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        const longitude = Cesium.Math.toDegrees(cartographic.longitude).toFixed(4); // 经度
        const latitude = Cesium.Math.toDegrees(cartographic.latitude).toFixed(4);   // 纬度
        
    
        alert(`你点击的位置：\n经度: ${longitude}\n纬度: ${latitude}`);
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);