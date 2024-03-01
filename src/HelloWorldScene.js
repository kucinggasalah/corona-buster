import Phaser from 'phaser'

export default class CoronaBusterScene extends Phaser.Scene {
	constructor() {
		super('corona-buster-scene')
	}

	init(){
		this.clouds = undefined;
		this.nav.left = false;
		this.nav.right = false;
		this.shoot = false;
	}

	preload() {
		this.load.image('background','images/bg_layer1.png')
		this.load.images('cloud','images/cloud.png')
	}

	create() {
	const gameWidht = this.scale.widht*0.5;
	const gameHeight = this.scale.height*0.5;
	this.add.image(gameWidht, gameHeight,"background")

	this.clouds = this.physics.add.group({
		key : 'cloud',
		repeat : 10,
	})

	Phaser.Actions.RandomRectangle(
		this.clouds.getChildren(),
		this.physics.world.bounds
	)

	}

	update(time){
		this.clouds.children.iterate((child) =>{
			child.setVelocityY(20)
			if (child.y > this.scale.height){
				//@ts-ignore
				child.x = Phaser.Math.Between(10, 400)
				//@ts-ignore
				child.y = 0
			}
		})

	}
}
