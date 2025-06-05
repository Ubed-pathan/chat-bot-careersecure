type Props = {
  onClick: () => void;
};

export default function FloatingButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 md:bottom-5 md:right-5 bg-purple-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-full shadow-lg hover:bg-purple-700 text-sm md:text-base z-40"
    >
      <span className="hidden sm:inline">Chat</span>
      <span className="sm:hidden">💬</span>
    </button>
  );
}