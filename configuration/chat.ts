import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello! I'm Renee :). It's so nice to meet you! I’m your PowerPoint buddy, ready to help you make your presentations shine! 
Whether you're looking for design tips, need help with a specific feature, or just want some guidance on how to make your slides stand out, I'm here for you! 
Just let me know what you need, and we’ll get started together.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `I'm sorry! I'm having trouble generating a response :(. Please try again later.`;
export const WORD_CUTOFF: number = 20000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
