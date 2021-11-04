import { initialState } from '../store/initialState';

export const reducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case "DATOS_ENVIADOS":
            return { ...state, img: action.payload.img, texto: action.payload.texto }

        case "LISTAR_EQUIPOS":
            return { ...state, equipos: action.payload }

        case "LISTAR_ALBUMS":
            return { ...state, albums: action.payload }

        case "LISTAR_DEPORTES":
            return { ...state, deportes: action.payload }

        case "EQUIPOS_ELEGIDOS":
            return { ...state, equipo1: action.payload }

        case "SOCIA_VITALICIA":
            return { ...state, sociaVitalicia: { "fotoMain": action.payload.fotoMain, "fotoFondo": action.payload.fotoFondo, "nombre": action.payload.nombre, "profesion": action.payload.profesion, "fecha": action.payload.fecha, "spCode": action.payload.spCode, "frase": action.payload.frase } }

        default:
            return state
    }

}
