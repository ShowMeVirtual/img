// register our component
AFRAME.registerComponent('SMVmodel', {

    init: function() {
        const animatedSMV = document.querySelector("#animated-SMV");

        animatedSMV.addEventListener('click', function(ev){
            if (animatedSMV.object3D.visible == true && ev.detail.cursorEl) {
                const entity = document.querySelector('#animated-SMV');
                const scale = entity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                
                // every click, we make our model grow in size
                entity.setAttribute('scale', scale);
            }
        });
}});