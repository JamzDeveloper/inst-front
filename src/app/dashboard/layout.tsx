import Nav from "@/components/nav/Nav";
import style from "./Layout.module.css";
import NavUser from "@/components/nav-user/nav-user";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavUser/>
      <Nav />
      {children}
    </div>
  );
}
