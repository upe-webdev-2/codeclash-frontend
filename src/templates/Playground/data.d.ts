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

