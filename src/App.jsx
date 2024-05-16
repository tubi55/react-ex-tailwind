function App() {
  return (
    <main className="w-full h-screen bg-black/5 py-[10vh] px-[10vw]">
      {/* page title */}
      <h1 className="mb-20 text-6xl font-thin">Members</h1>

      <section>
        {/* card */}
        <article className="w-[300px] px-10 py-14 text-center bg-white rounded-xl">
          {/* thumbnail */}
          <figure className="inline-block mb-6">
            <img
              className="object-cover rounded-full size-40"
              src="./img/peter.jpg"
              alt="peter"
            />
          </figure>

          {/* info */}
          <div>
            <h2 className="mb-1 text-2xl font-bold ">David Choi</h2>
            <p className="mb-8 text-base">President</p>
            <button className="px-8 py-2 text-sm text-white rounded-full bg-gradient-to-br from-slate-900 to-slate-600">
              View Detail
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
