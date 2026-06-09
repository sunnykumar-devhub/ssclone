import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: config.googleSheetsWebhookUrl || "/" }),
  endpoints: () => ({}),
});

apiSlice.googleSheetsWebhookUrl = config.googleSheetsWebhookUrl;
