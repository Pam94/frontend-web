import { createAction, props } from '@ngrx/store'
import { User } from 'src/app/shared/models/User'
import { UserType } from 'src/app/shared/models/UserType'

/**
 * Acción para realizar una petición de registro de un 
 * usuario nuevo en el sistema
 * Se cargan los datos necesarios para llamar al servicio
 */
export const addUser = createAction(
    '[SignUp] Add User',
    props<{ name: string, surname: string, userType: UserType, email: string, password: string }>()
)

/**
 * Acción que indica que el resgistro del usuario nuevo
 * se ha completado con éxito, devolviendo el nuevo usuario
 */
export const addUserSuccess = createAction(
    '[SignUp] Add User Success',
    props<{ newUserInformation: User }>()
)

/**
 * Acción que indica que se ha producido un error al registrar
 * un nuevo usuario por parte del backend
 * Devolverá la información de error
 */
export const addUserError = createAction(
    '[SignUp] Add User Error',
    props<{ payload: any }>()
)