export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface ChatResponse {
  reply: string;
}

export interface SuggestedQuestion {
  id: number;
  text: string;
}