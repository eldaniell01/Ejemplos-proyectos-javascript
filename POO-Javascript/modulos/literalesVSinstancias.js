class Comentario{
    constructor({
        contenido,
        nombreEstudiante,
        rolEstudiante = "estudiante",

    }){
        this.contenido = contenido,
        this.nombreEstudiante = nombreEstudiante,
        this.rolEstudiante = rolEstudiante,
        this.like = 0;
    }

    publicar(){
        console.log(this.nombreEstudiante + " "+this.rolEstudiante);
        console.log(this.like + "likes");
        console.log(this.contenido);
    }
}



/*function videoplay(id){
    const url = "https://secreta"+id;
    console.log("url secreta")
}

function videostop(id){
    const url = "https://secreta"+id;
    console.log("url pausa")
}

export class escuelaClass{
    constructor({
        name,
        videoid,
    }){
        this.name = name;
        this.videoid =videoid;
    }
    reproducir(){
        videoplay(this.videoid);
    }
    pausar(){
        videostop(this.videoid);
    }
}*/


class Curso{
    constructor({name, clases = [], esGratis = false, lang ="espanish"}){
        this._name = name,
        this.clases = clases,
        this.esGratis= esGratis,
        this.lang = lang
    }

    get name(){
        return this._name;
    }
    set name(newnombre){
        if(newnombre ==="curso malo"){
            console.error("no actualizar")
        }else{
            this._name = newnombre;
        }
    }
}

const curso1 = new Curso({
    name: "programación gratis",
    isGratis: true,
})
const curso2 = new Curso({
    name: "programación gratis2",
    lang: "english"
})
const curso3 = new Curso({
    name: "programación gratis3"
})


class Aprendizaje{
    constructor({name, curso = []}){
        this.name = name;
        this.curso = curso;
    }
}

const web = new Aprendizaje({
    name: "desarrollo web",
    curso: [curso2, curso3]
})

const datos = new Aprendizaje({
    name: "ciencia de datos",
    curso: [curso1, curso2]
})

const node = new Aprendizaje({
    name: "node",
    curso: [curso1,  curso3]
})


class Estudiante{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        facebook = undefined,
        cursoAprobado =[],
        aprendizaje = []
    }){
        this.name = name
        this.email = email
        this.username = username
        this.socialmedia = {
            twitter,
            facebook
        }
        this.cursoAprobado = cursoAprobado 
        this.aprendizaje = aprendizaje   
    }

    publicarComentario(comentario){
        const coment = new Comentario({
            contenido: comentario,
            nombreEstudiante: this.name,

        });
        coment.publicar();
    }
}

class Gratis extends Estudiante{
    constructor(props){
        super(props)
    }
    aprovado(newCurso){
        if(newCurso.esGratis){
            this.cursoAprobado.push(newCurso);
        }else{
            console.warn("lo siento, "+this.name);
        }
    }
}

class Basic extends Estudiante{
    constructor(props){
        super(props)
    }
    aprovado(newCurso){
        if(newCurso.lang !== "english"){
            this.cursoAprobado.push(newCurso);
        }else{
            console.warn("lo siento, "+this.name);
        }
    }
}

class Expert extends Estudiante{
    constructor(props){
        super(props)
    }
    aprovado(newCurso){
        this.cursoAprobado.push(newCurso);
    }
}

class Teacher extends Estudiante{
    constructor(props){
        super(props);
    }
    aprovado(newCurso){
        this.cursoAprobado.push(newCurso);
    }

    publicarComentario(comentario){
        const coment = new Comentario({
            contenido: comentario,
            nombreEstudiante: this.name,
            rolEstudiante: "profesor"

        });
        coment.publicar();
    }
}


const juan2 = new Basic({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    aprendizaje: [
        web,
        datos,
    ],
});

const maestro1 = new Teacher({
    name: "Daniel",
    username: "eldaniell01",
    email: "eldaniell01",
    twitter: "eldaniell01",
    
});
  
/*const miguelito2 = new Estudiante({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
});*/
  
