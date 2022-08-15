const nombre = {
    name: "daniel",
    age: 25,
    cursosaprobado: [
        "curso 1",
        "curso 2"
    ],
    
    aprobarcurso(valor){
        this.cursosaprobado.push(valor);
    }

};



function Estudiante(name, age, cursos){
    this.name = name,
    this.age = age,
    this.cursosaprobado = cursos;
}

Estudiante.prototype.aprobarcurso = function(curso){
    this.cursosaprobado.push(curso);
}

const daniel = new Estudiante(
    "Daniel",
    25,
    ["matemáticas", "ingeniería"]
);

//clases
class Estudiante{
    constructor(name, age, curso){
        this.name = name,
        this.age = age,
        this.cursosaprobado = curso;
    }

    aprobar(nuevoCurso){
        this.cursosaprobado.push(nuevoCurso);
    }
}

class Estudiante2{
    constructor({name, age, curso=[]}){
        this.name = name,
        this.age = age,
        this.cursosaprobado = curso;
    }

    aprobar(nuevoCurso){
        this.cursosaprobado.push(nuevoCurso);
    }
}