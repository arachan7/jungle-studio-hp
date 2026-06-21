export type SlotNumber = 1 | 2 | 3;

export type SlotCommit = {
  sha: string;
  date: string;
  message: string;
};

export type SlotInfo = {
  slot: SlotNumber;
  exists: boolean;
  lastCommit: SlotCommit | null;
};

export type CurrentSlot = { slot: SlotNumber; branch: string } | null;

export const SLOT_NUMBERS: SlotNumber[] = [1, 2, 3];

export function slotBranch(slot: SlotNumber): string {
  return `draft-slot-${slot}`;
}

export function isValidSlot(value: unknown): value is SlotNumber {
  return value === 1 || value === 2 || value === 3;
}
