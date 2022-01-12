import Letter from "./GridLetter";

export default function Word({ word, info, size }) {
  if (word === undefined) {
    word = "";
  }
  const sizeCls = size ? "max-w-[225px]" : "w-full";

  return (
    <div className={`grid grid-cols-5 gap-1 ${sizeCls}`}>
      <Letter letter={word.charAt(0)} state={info ? info[0] : null} />
      <Letter letter={word.charAt(1)} state={info ? info[1] : null} />
      <Letter letter={word.charAt(2)} state={info ? info[2] : null} />
      <Letter letter={word.charAt(3)} state={info ? info[3] : null} />
      <Letter letter={word.charAt(4)} state={info ? info[4] : null} />
    </div>
  );
}
