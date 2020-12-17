function iniciarSesion(user,password) {
    switch (true) {
        case user == null && password == null:
            console.log("debe ingresar datos requeridos");
            break;
        case user =="admin" && password != 1234 :
            console.log("Contraseña incorrecta") ;
            break;
        case user!="admin" && password != 1234 :
            console.log("usuario y contraseña incorrecta");
            break;
        case user != "admin" && password == 1234 :
            console.log("usuario incorrecto");
            break;
            default:
            console.log("Bienvenido a nuestro sitio");
            break;
    }
}
iniciarSesion("jorgue",56546)
iniciarSesion("admin",56546)
iniciarSesion("jorgue",1234)
iniciarSesion("admin",1234)
iniciarSesion()