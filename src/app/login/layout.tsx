import style from "./Layout.module.css";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={style.div}>{children}</div>;
}
