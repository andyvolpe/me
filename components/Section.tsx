export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="mb-10 font-mono text-sm uppercase tracking-widest text-accent">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
