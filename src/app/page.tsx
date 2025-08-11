import { uniqueNumbers } from "@/utils/array";

export default function Home() {
  const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 6, 3, 5, 8, 7, 5, 3, 2, 9, 5];

  const unique = (() => {
    const r = uniqueNumbers(numbers);
    return Array.isArray(r) ? r : [];
  })();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>Exercice</div>
        <div>
          {unique?.map((number) => (
            <p key={number}>{number}</p>
          ))}
        </div>
      </main>
    </div>
  );
}
