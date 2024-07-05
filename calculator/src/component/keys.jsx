function Keys({ click }) {
  const keysnames = [
    "AC",
    "/",
    "*",
    "+",
    "-",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    "=",
  ];
  return (
    <>
      {keysnames.map((keysname) => (
        <button
          type="button"
          key={Math.random() * 10}
          className="btn btn-info"
          onClick={() => click(keysname)}
        >
          {keysname}
        </button>
      ))}
    </>
  );
}
export default Keys;
