const users = ["Jacob", "Carlos", "Sofia", "Victor"];

function getUser(userName) {
    try {   
        const userIndex = users.indexOf(userName);

        if(!userName) {
            return {
                code: 400,
                body: null,
                msg: "No se envio ningún nombre de usuario",
            }
        }

        if(userIndex>=0) {
            const user = users.at(userIndex);
            return {
                code: 200,
                body: user,
                msg: "Usuario encontrado exitosamente",
            }
        }

        return {
            code: 404,
            body: null,
            msg: "El usuario no se encontró",
        }
        
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

function getUsers() {
    try {
        return {
            code: 200,
            body: users,
            msg: "Usuarios obtenidos exitosamente",
        }
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

function addUser(userName) {
    try {
        if(!userName) {
            return {
                code: 400,
                body: null,
                msg: "No se envió ningun nombre de usuario",
            }
        }

        users.push(userName);
        return {
            code: 201,
            body: userName,
            msg: "Usuario '" + userName +  "' agregado con exito",
        }
        
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}    

function removeUserByIndex(userIndex) {
    try {
        if(userIndex<0) {
            return {
                code: 400,
                body: null,
                msg: "No se ha enviado un indice de usuario valido",
            }
        }

        const user = users.at(userIndex);
        users.splice(userIndex, 1);
        return {
            code: 200,
            body: user,
            msg: "Usuario '" + user +  "' eliminado con exito",
        }
        
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

function removeLastUser() {
    try {
        const lastUser = users.pop();
        return {
            code: 200,
            body: lastUser,
            msg: "El usuario '" + lastUser +  "' se eliminó con exito",
        }
    }  catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

function removeFirstUser() {
    try {
        const firstUser = users.shift();
        return {
            code: 200,
            body: firstUser,
            msg: "El usuario '" + firstUser +  "' se eliminó con exito",
        }
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

function updateUserByIndex(userIndex, userName) {
    try {
        if(userIndex<0) {
            return {
                code: 400,
                body: null,
                msg: "El indice de usuario no es valido",
            }
        }
        if(!userName) {
            return {
                code: 400,
                body: null,
                msg: "No se envió ningun usuario",
            }
        }
        if(userIndex>=users.length) {
            return {
                code: 404,
                body: null,
                msg: "No se encontro el usuario",
            }
        }
        if(users.indexOf(userName)>=0) {
            return {
                code: 409,
                body: null,
                msg: "El usuario ya existe",
            }
        }
        users[userIndex] = userName;
        return {
            code: 200,
            body: userName,
            msg: "El usuario '" + userName +  "' se actualizó con exito",
        }
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

function getUserSize() {
    try {
        const usersSize = users.length;
        return {
            code: 200,
            body: usersSize,
            msg: "El arreglo contiene " + usersSize + "usuarios"
        }
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

console.log("getUser:")
console.log(getUser("Sofia"));
console.log("------ Next method ------")
console.log("getUsers:")
console.log(getUsers());
console.log("------ Next method ------")
console.log("addUser:")
console.log(addUser("Emilio"));
console.log("------ Next method ------")
console.log("Users before remove user:")
console.log(getUsers());
console.log("removeUserByIndex:")
console.log(removeUserByIndex(3));
console.log("Users after remove user:")
console.log(getUsers());
console.log("------ Next method ------")
console.log("Users before remove last user:")
console.log(getUsers());
console.log("removeLastUser:")
console.log(removeLastUser());
console.log("Users after remove user:")
console.log(getUsers());
console.log("------ Next method ------")
console.log("Users before remove first user:")
console.log(getUsers());
console.log("removeFirstUser:")
console.log(removeFirstUser());
console.log("Users after remove first user:")
console.log(getUsers());
console.log("------ Next method ------")
console.log("Users before edit user:")
console.log(getUsers());
console.log("updateUserByIndex:")
console.log(updateUserByIndex(1, "Max"));
console.log("Users after edit user:")
console.log(getUsers());
console.log("------ Next method ------");
console.log(getUserSize());