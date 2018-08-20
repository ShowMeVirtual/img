// register our component
AFRAME.registerComponent('markerhandler1', {

    init: function() {
        const animatedMarker1 = document.querySelector("#animated-marker1");

        animatedMarker1.addEventListener('click', function(ev){
            if (animatedMarker1.object3D.visible == true && ev.detail.cursorEl) {
                const entity = document.querySelector('#animated-model1');
                const scale = entity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                
                // every click, we make our model grow in size
                entity.setAttribute('scale', scale);
            }
        });
}});