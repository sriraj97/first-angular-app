class Student{
    private sno:number=-1
    private name:string="Noname"

    constructor(sno:number,name:string){
        this.sno=sno
        this.name=name
    }

    display():void {
        console.log("sno:",this.sno,"name:",this.name)
    }
}

var obj=new Student(1,"Roger")