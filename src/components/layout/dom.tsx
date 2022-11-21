const Dom = ({ children }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        overflow: "hidden"
      }}
    >
      <main className="flex flex-col items-center min-h-screen justify-top">
        {children}
      </main>

      <footer className="flex items-center justify-center w-screen h-20 border-t-2 mt-14">
        <a
          className="flex items-center justify-center gap-2 cursor-pointer"
          href="https://upe.cs.fiu.edu/sparkdev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <strong className="text-pink-500">SparkDev</strong> |
          Copyright &copy; 2022
        </a>
      </footer>
    </div>
  );
};
export default Dom;
