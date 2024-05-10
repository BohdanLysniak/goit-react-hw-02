import clsx from "clsx";
import css from "./Notification.module.css";

export default function Notification() {
  return <p className={clsx(css.text)}>No feedback yet</p>;
}
