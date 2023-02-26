import posts from "../data/posts.json";
import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  try {
    return posts;
  } catch (error: any) {
    return sendError(
      event,
      createError({
        statusCode: 500,
        message: error.message,
      })
    );
  }
});
