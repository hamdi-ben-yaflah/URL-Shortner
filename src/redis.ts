import { createClient } from "redis";

export const createCacheClient = async () => {
  const connection = createClient({ url: "redis://cache:6379" });
  await connection.connect();

  return connection;
};
