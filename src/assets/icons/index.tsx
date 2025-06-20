import {
  IoBookSharp,
  IoDocumentText,
} from "react-icons/io5";
import { IoIosEye, IoMdLock } from "react-icons/io";
import { MdPayments } from "react-icons/md";
import { FaCheckCircle, FaCalendarAlt } from "react-icons/fa";

export const iconMap: Record<string, React.ReactNode> = {
  form: <IoDocumentText color="orange" size={20} />,
  cover: <IoBookSharp color="blue" size={20} />,
  ending: <FaCheckCircle color="red" size={20} />,
  review: <IoIosEye color="purple" size={20} />,
  payment: <MdPayments color="pink" size={20} />,
  login: <IoMdLock color="green" size={20} />,
  scheduling: <FaCalendarAlt color="black" size={20} />,
};
