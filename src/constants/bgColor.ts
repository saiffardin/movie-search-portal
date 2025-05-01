export const BG_COLOR = {
  BLUE: "bgBlue",
  GREY: "bgGrey",
  GREENISH: "bgGreenish",
} as const;

export type bgColorType = (typeof BG_COLOR)[keyof typeof BG_COLOR];
