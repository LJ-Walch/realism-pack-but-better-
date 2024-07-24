//consistency
 document.addEventListener("keydown", function(e) {

	if (e.keyCode == 220) {

weather.contrailTemperatureThreshold = 100;

weather.contrailAltitude = 0;

let whiteSmokeEmitter = new geofs.fx.ParticleEmitter({

            anchor: {

                        worldPosition: [0, 0, 0]

                    },

            duration: 1E10,

            rate: .05,

            life: 4E4,

            easing: "easeOutQuart",

            startScale: .01,

            endScale: .01,

            randomizeStartScale: .05,

            randomizeEndScale: .15,

            startOpacity: 0.9,

            endOpacity: 1E-5,

            startRotation: "random",

            texture: "whitesmoke"

        })

   document.addEventListener("keydown", function(e) {

	   if (e.keyCode == 191) {

	whiteSmokeEmitter.destroy()

	weather.contrailTemperatureThreshold = -30;

   weather.contrailAltitude = 1E4;

		}

	})

	}

})

ui.notification.show("Apply full throttle, then press Q to activate catapult.")

setTimeout(() => {ui.notification.show("You must be in a carrier-capable aircraft and on the ground to use catapult.")}, 6900);

if (geofs.aircraft.instance.id == 7){

   document.addEventListener("keydown", function(e) {

	   if (e.keyCode == 81) {

	   if (geofs.animation.values.groundContact == 1){

	   geofs.aircraft.instance.parts.engine.afterBurnerThrust = (geofs.aircraft.instance.parts.engine.afterBurnerThrust * 4)

		let whiteSmokeEmitter = new geofs.fx.ParticleEmitter({

            anchor: {

                        worldPosition: [0, 0, -1]

                    },

            duration: 1E5,

            rate: .05,

            life: 4E4,

            easing: "easeOutQuart",

            startScale: .0005,

            endScale: .0005,

            randomizeStartScale: .05,

            randomizeEndScale: .15,

            startOpacity: 0.9,

            endOpacity: 1E-5,

            startRotation: "random",

            texture: "whitesmoke"

        })

	   setTimeout(() => {geofs.aircraft.instance.parts.engine.afterBurnerThrust = (geofs.aircraft.instance.parts.engine.afterBurnerThrust / 4)}, 2000);

		setTimeout(() => {whiteSmokeEmitter.destroy()}, 2250);

	   }

	   }

   })

}

