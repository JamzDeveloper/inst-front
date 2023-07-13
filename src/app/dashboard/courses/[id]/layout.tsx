import style from "./Layout.module.css";
import MenuCourse from "./menu-course/menu-course";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
