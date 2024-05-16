function App() {
  return (
    <main className="w-full h-screen bg-black/5 py-[10vh] px-[10vw]">
      {/* page title */}
      <h1 className="mb-20 text-6xl font-thin transition hover:text-slate-600">
        Members
      </h1>

      <section>
        {/* card */}
        <article className="group w-[300px] px-10 pt-14 pb-0 text-center bg-white rounded-xl shadow-lg transition-all opacity-80 hover:opacity-100 hover:pb-14  relative">
          <div className="absolute top-0 left-0 bg-white opacity-50 size-full group-hover:animate-ping rounded-xl"></div>
          {/* thumbnail */}
          <figure className="relative inline-block mb-6 size-40">
            <img
              className="absolute object-cover translate-y-4 rounded-full size-full blur-xl saturate-150 brightness-150 "
              src="./img/peter.jpg"
              alt="peter"
            />
            <img
              className="absolute object-cover rounded-full size-full"
              src="./img/peter.jpg"
              alt="peter"
            />
          </figure>

          {/* info */}
          <div>
            <h2 className="text-2xl font-bold">David Choi</h2>
            <p className="text-base mb-7">President</p>
            <button className="px-8 py-2 mb-0 text-sm text-white transition delay-150 scale-150 rounded-full opacity-0 bg-gradient-to-br from-slate-900 to-slate-600 drop-shadow-2xl group-hover:opacity-100 group-hover:scale-100">
              View Detail
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
