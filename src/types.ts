export interface Equipo {
  pos: number
  nombre: string
  cualidad: string
  imagen: string
  PJ: number
  G: number
  E: number
  P: number
  Ptos: number
}

export interface Liga {
  id: number
  nombre: string
  imagePath: string
  finalizado: boolean
  clasificacion: Equipo[]
}

export interface Mensaje {
  text: string
  botId: number
  time: number
}

export interface Combate {
  id: number
  //ligaId: number;
  finished: boolean
  fighter1: string
  fighter2: string
}
