export async function subscribeToWaitlist(email: string): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    console.error("Missing KIT_API_KEY or KIT_FORM_ID environment variables");
    return { success: false, error: "Email service not configured" };
  }

  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        email,
      }),
    }
  );

  if (!response.ok) {
    const text = await response.text();
    console.error("Kit API error:", response.status, text);
    return { success: false, error: "Failed to subscribe" };
  }

  return { success: true };
}
