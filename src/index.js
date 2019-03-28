
const SDK = window.requirejs('w3reality-sdk');

class App extends SDK.App {
    // override
    static createWorld() {
        const world = new World(8, 8, 8);
        world.createFlatWorld(4, BLOCK.CONCRETE);
        world.setSpawnPose([4, 1.5, 8, 0, -Math.PI/2, 0]);
        return world;
    }

    // override
    constructor(data, name="foo") {
        super(data, name);
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
