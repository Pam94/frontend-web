import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/User';

/**
 * Esta acción indicará a la aplicación que un usuario
 * requiere iniciar sesión en el sistema
 * Se cargan las credenciales para hacer la peticion
 * correspondiente al servicio
 */
export const login = createAction(
    '[Login] LogIn',
    props<{ email: string, password: string }>()
)

/**
 * Esta acción indicará que un usuario ha iniciado sesión
 * con éxito en el sistema, cargando la información
 * del usuario en cuestión cuando la petición del backend
 * se realice correctamente
 */
export const logInSucess = createAction(
    '[Login] Login Success',
    props<{ user: User }>()
)

/**
 * Acción para indicar que se ha producido algún error
 * al hacer la petición de inicio de sesión
 * Devolverá la iformación del error correspondiente
 */
export const logInError = createAction(
    '[Login] Login Error',
    props<{ payload: any }>()
)

/**
 * Acción que indica que el usuario desea
 * salir de la sesión
 */
export const logOut = createAction(
    '[Login] LogOut'
)