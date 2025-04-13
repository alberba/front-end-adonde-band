export interface Participation {
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

export interface Bot {
  pos: number
  nombre: string
  cualidad: string
  imagen: string
  PJ?: number
  G: number
  E: number
  P: number
}

export interface League {
  leagueId: number
  state: "pendiente" | "en curso" | "finalizado"
  name: string
  urlImagen: string
  user: number
  rounds: number
  matchTime: number
  bots: number[]
}

export interface Message {
  text: string
  botId: number
  time: number
}

export interface Match {
  matchId: number
  state: "pendiente" | "en curso" | "finalizado"
  result: 1 | 2 | 3
  fighters: [string, string]
  roundNumber: number
}
