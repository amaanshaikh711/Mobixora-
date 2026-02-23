import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-xl border border-gray-200 rounded-2xl",
          },
        }}
      />
    </div>
  );
}
