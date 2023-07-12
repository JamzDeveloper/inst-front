import style from "./Layout.module.css";
import Nav from "./components/nav-component";
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
