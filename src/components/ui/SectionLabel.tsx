export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold tracking-widest uppercase text-[#CB8530] mb-4">
      {children}
    </p>
  );
}
