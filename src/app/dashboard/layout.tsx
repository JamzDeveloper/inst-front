import Nav from "@/components/nav/Nav";
import style from "./Layout.module.css";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
