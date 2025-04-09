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
  matchId: number
  state: "pendiente" | "en curso" | "finalizado"
  result: 1 | 2 | 3
  fighters: [string, string]
  roundNumber: number
}
