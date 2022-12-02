export type Problem = {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  objectives: string[];
  examples: {
    output: string;
    input: string;
    explanation?: string;
  }[];
  starterCode: string;
  timeLimit: number;
}

export type UserInfo = {
  username: string
  profilePicture: string
  achievements: number
}

export type PlayerInfo = {
  id: string
  name: string
  emailVerified: boolean | null
  xp: number
  image: string
  Account: null
  MatchHistory_MatchHistory_player1IdToUser: null
  MatchHistory_MatchHistory_player2IdToUser: null
  Session: null
}

export type GameInfo = {
  wonPlayer: string,
  lostPlayer: string
  wonPlayerInfo: PlayerInfo,
  lostPlayerInfo: PlayerInfo
}