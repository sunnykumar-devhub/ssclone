import { apiSlice } from "../../../api/apiSlice";

export const leadsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitLeadForm: builder.mutation({
      async queryFn(formData) {
        const url = apiSlice.googleSheetsWebhookUrl;
        try {
          if (!url) {
            throw new Error("Webhook URL is missing. Please set NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL in environment variables.");
          }
          await fetch(url, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(formData),
          });
          return { data: { success: true } };
        } catch (error) {
          return { error: error.message || "Failed to submit form" };
        }
      },
    }),
  }),
});

export const { useSubmitLeadFormMutation } = leadsApi;
