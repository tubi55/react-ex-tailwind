import Card from "./components/Card";

function App() {
  return (
    <main className="w-full h-screen bg-black/5 py-[10vh] px-[10vw]">
      {/* page title */}
      <h1 className="mb-20 text-6xl font-thin transition hover:text-slate-600">
        Members
      </h1>

      <section>
        <Card />
      </section>
    </main>
  );
}

export default App;
