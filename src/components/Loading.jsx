export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-black px-4">
      <div className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-12 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl">
        {/* Animated Loader */}
        <div className="relative mb-8 flex size-24 items-center justify-center">
          {/* Outer Glow */}
          <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-400/10 blur-xl" />

          {/* Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/10 border-t-cyan-400 animate-spin" />

          {/* Inner Ring */}
          <div className="absolute inset-3 rounded-full border-2 border-indigo-400/20 border-b-indigo-400 animate-[spin_1.5s_linear_infinite_reverse]" />

          {/* Center Icon */}
          <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-6 text-white"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8 10h8M8 14h5" strokeLinecap="round" />
              <path
                d="M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6l-5 3v-3H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Loading Tickets
        </h2>

        <p className="mt-2 text-center text-sm leading-6 text-slate-400">
          Please wait while we fetch your support data.
        </p>

        {/* Animated Dots */}
        <div className="mt-6 flex items-center gap-2">
          <span className="size-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:0ms]" />
          <span className="size-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:150ms]" />
          <span className="size-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:300ms]" />
        </div>

        <p className="mt-5 text-xs font-medium tracking-widest text-slate-500 uppercase">
          CS — Ticket System
        </p>
      </div>
    </div>
  );
}
