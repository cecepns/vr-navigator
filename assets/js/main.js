var scene = document.querySelectorAll('.scene');
        var parallaxInstance = []

        scene.forEach((data, i) => {
            parallaxInstance[i] = new Parallax(data);
        })

        var data = [
            {
                text: "Street View"
        }, {
                text: "Real Estate"
        }, {
                text: "Arhitecture"
        }
    ];

    var tx_conf = {
           infinit: true,
        timer: 2
            
        }