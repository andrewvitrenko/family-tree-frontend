const omit = <T extends object, K extends keyof T>(
  data: T,
  keys: K | K[],
): Omit<T, K> => {
  const normalizedKeys = Array.isArray(keys) ? keys : [keys];

  const filteredEntries = Object.entries(data).filter(
    ([key]) => !normalizedKeys.includes(key as K),
  );

  return Object.fromEntries(filteredEntries) as Omit<T, K>;
};

export default omit;
