export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-violet-600 hover:bg-violet-500 transition-colors rounded px-2 py-1 disabled:opcity-30 disabled:cursor-not-allowed">
      {children}
    </button>
  );
}
