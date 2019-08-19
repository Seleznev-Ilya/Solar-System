class Core {
    System:Star;
    ContainerId:string;

    constructor(ContainerId:string) {
        this.ContainerId = ContainerId;
        this.initialize();
    }

    initialize(){
        let sun = new Star();
        sun.Name = "Sun";
        sun.Position = new Coord(0, 0);
        sun.Description = "Yellow star";

        let mercury = new Planet();
        mercury.Name = "Mercury";
        mercury.Index = 1;
        mercury.Description = "First planet in Solar System";
        mercury.Distance = 30;

        let venus = new Planet();
        venus.Name = "Venus";
        venus.Index = 2;
        venus.Description = "Second planet in Solar System";
        venus.Distance = 50;

        let earth = new Planet();
        earth.Name = "Earth";
        earth.Index = 3;
        earth.Description = "Third planet in Solar System, our home:)";
        earth.Distance = 80;

        let moon  = new Satellite();
        moon.Index =  1;
        moon.Distance = 5;
        moon.Name = "Moon";
        moon.Description = "Earth' satellite";

        earth.Childs.push(moon);

        sun.Childs.push(mercury);
        sun.Childs.push(venus);
        sun.Childs.push(earth);

        this.System = sun;
    }

    start(){
        this.update()
        this.render();
    }

    update(){

    }

    render(){

    }
}