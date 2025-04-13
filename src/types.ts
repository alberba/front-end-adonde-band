export interface Participation {
  botId: number
  name: string
  points: number
  position: number
  nWins: number
  nDraws: number
  nLosses: number
  nMatches?: number
}

export interface Bot {
  botId: number
  name: string
  description: string
  urlImage: string
  PJ?: number
  nWins: number
  nLosses: number
  nDraws: number
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

// Interfaz para la gestión de los bots:
// - id: Es el identificador del bot
export interface BotSummary{
  id: number
  name: string
  description: string
}

export interface BotLeagueSummary {
  botId: number;
  league: League;
  classification: Participation[]; // [Pos - 1][Pos][Pos + 1]
}
