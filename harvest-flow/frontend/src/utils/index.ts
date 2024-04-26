import { format } from "date-fns";
import { BLOCK_TIME } from "./constants";

export const formatDate = (dateISO: string | Date): string => {
  const date = new Date(dateISO);
  return format(date, "yyyy-MM-dd, HH:mm:ss");
};



export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * @returns human readable time from blocks in format "1h 30m" (either component omitted if 0)
 */
export const blocksToTime = (blocks: number): string => {
  const seconds = blocks * BLOCK_TIME;
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(seconds / 3600);

  if (hours === 0) return `${minutes}m`;

  if (minutes === 0) return `${hours}h`;

  return `${hours}h ${minutes}m`;
};

export const blocksToSeconds = (blocks: number): number => blocks * BLOCK_TIME;

export * from "./utils"