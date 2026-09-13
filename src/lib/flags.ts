export function isProAiEnabled(): boolean {
  return process.env.FEATURE_PRO_AI === "true";
}
