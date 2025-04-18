import { xai } from "@ai-sdk/xai";
import { customProvider } from "ai";

const languageModels = {
  "grok-3": xai("grok-3-latest")
};

export const model = customProvider({
  languageModels,
});

export type modelID = keyof typeof languageModels;

export const MODELS = Object.keys(languageModels);

export const defaultModel: modelID = "grok-3-latest";
