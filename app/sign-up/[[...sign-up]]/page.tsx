import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12 px-4">
      <SignUp
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
