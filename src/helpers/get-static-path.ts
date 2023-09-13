export const getStaticPath = async (
  pngPath: string
): Promise<{ default: string } | undefined> =>
  await import(`../assets/images/${pngPath}.png`);
