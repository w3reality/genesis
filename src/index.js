
const SDK = window.requirejs('w3reality-sdk');
// console.log('SDK:', SDK);

class App extends SDK.App {
    // override
    static createWorld() {
        const [world, chunkSize] = super.createWorld();
        world.createFlatWorld(6, BLOCK.CONCRETE);
        world.setSpawnPose([4.0, 1.5, 8, -Math.PI/16, -Math.PI/2, 0]);
        return [world, chunkSize];
    }

    // override
    constructor(data, name="foo") {
        super(data, name);
        this.set_block(0, 0, 6, BLOCK.MODEL_TEST);
        this.say('welcome');
    }

    // override
    update() {
        super.update();
    }

    // override
    free() {
        super.free();
    }
}

export default App;
