const Dom = ({ children }) => {
  return (
    <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        overflow: "hidden"
      }}>
      <main className="flex min-h-screen flex-col items-center justify-top">
        {children}
      </main>

      <footer className="flex h-20 w-full items-center mt-14 justify-center border-t-2">
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
