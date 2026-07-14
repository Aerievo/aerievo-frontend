import { NextResponse } from "next/server";

// Stub email endpoint — validates the payload and logs it to the server
// console, but does not actually send mail. This keeps the ContactSection
// form functional locally without requiring SMTP credentials. Wire up a real
// mail provider here (nodemailer, Resend, etc.) when ready to go live.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formName, formValues } = body || {};

    if (!formValues || typeof formValues !== "object") {
      return NextResponse.json(
        { success: false, message: "Missing form values." },
        { status: 400 },
      );
    }

    console.log(`[send-email stub] New submission for "${formName || "Unnamed Form"}":`, formValues);

    return NextResponse.json({
      success: true,
      message: "Submission received (stub — no email actually sent).",
    });
  } catch (error: unknown) {
    console.error("Error handling form submission:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { success: false, message: "Error processing submission: " + errorMessage },
      { status: 500 },
    );
  }
}
