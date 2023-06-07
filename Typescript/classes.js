var Student = /** @class */ (function () {
    function Student(sno, name) {
        this.sno = -1;
        this.name = "Noname";
        this.sno = sno;
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log("sno:", this.sno, "name:", this.name);
    };
    return Student;
}());
var obj = new Student(1, "Roger");