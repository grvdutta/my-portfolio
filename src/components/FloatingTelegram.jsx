import { FaTelegramPlane } from "react-icons/fa";

function FloatingTelegram() {
  return (
    <a
      href="https://t.me/xenongrv"
      target="_blank"
      rel="noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      w-14
      h-14
      rounded-full
      bg-cyan-500
      text-black
      flex
      items-center
      justify-center
      text-2xl
      shadow-[0_0_25px_rgba(34,211,238,0.7)]
      hover:scale-110
      transition
      "
    >
      <FaTelegramPlane />
    </a>
  );
}

export default FloatingTelegram;