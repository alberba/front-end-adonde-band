export interface Liga {
  id: number
  nombre: string
  imagePath: string
  finalizado: boolean
}

export interface Mensaje {
  id: number
  texto: string
  imgPath: string
}

export interface Combate {
  id: number
  //ligaId: number;
  finished: boolean
  fighter1: string
  fighter2: string
}
