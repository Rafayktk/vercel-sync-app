import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Sign In</h1>
      <SignIn />
    </div>
  );
}
