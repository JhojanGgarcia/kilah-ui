function Test() {
  return (
    <section className="flex min-h-screen flex-col place-content-center items-center space-y-2 bg-background px-4 py-20">
      <div role="alert" className="flex w-full max-w-md bg-background">
        <div className="w-full rounded-xl bg-accent/10 ring-1 ring-inset ring-accent/20">
          <div className="relative flex w-full gap-2 py-5 pl-4 pr-6 max-md:flex-col md:gap-4">
            <div className="absolute right-3 top-2">
              <button className="rounded-xl p-0.5 transition-all ease-in-out hover:bg-foreground/20 active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div>
              <span className="flex h-12 w-12 place-content-center items-center rounded-xl bg-success/20 p-2 text-success/80 ring-1 ring-inset ring-success/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  className="h-full w-full"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                </svg>
              </span>
            </div>
            <div>
              <h6 className="font-bold text-success">Success Alert</h6>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                placeat doloremque molestias voluptatem sint nemo
                necessitatibus, dicta, earum, aut accusamus officiis labore
                dolores? Illum modi a quisquam eveniet quasi impedit?
              </p>
            </div>
          </div>
          <div className="flex justify-end space-x-2 border-t border-accent/10 px-4 py-3">
            <button className="rounded-md bg-accent/10 px-4 py-2 transition-all ease-in-out hover:bg-accent/20 active:scale-[0.98]">
              Secondary
            </button>
            <button className="rounded-md bg-success px-4 py-2 text-success-foreground transition-all ease-in-out hover:brightness-125 active:scale-[0.98]">
              Primary
            </button>
          </div>
        </div>
      </div>

      <div role="alert" className="flex w-full max-w-md bg-background">
        <div className="w-full rounded-xl bg-accent/10 ring-1 ring-inset ring-accent/20">
          <div className="relative flex w-full gap-2 py-5 pl-4 pr-6 max-md:flex-col md:gap-4">
            <div className="absolute right-3 top-2">
              <button className="rounded-xl p-0.5 transition-all ease-in-out hover:bg-foreground/20 active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div>
              <span className="flex h-12 w-12 place-content-center items-center rounded-xl bg-warning/20 p-2 text-warning/80 ring-1 ring-inset ring-warning/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  className="h-full w-full"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
                </svg>
              </span>
            </div>
            <div>
              <h6 className="font-bold text-warning">Warning Alert</h6>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                placeat doloremque molestias voluptatem sint nemo
                necessitatibus, dicta, earum, aut accusamus officiis labore
                dolores? Illum modi a quisquam eveniet quasi impedit?
              </p>
            </div>
          </div>
          <div className="flex justify-end space-x-2 border-t border-accent/10 px-4 py-3">
            <button className="rounded-md bg-accent/10 px-4 py-2 transition-all ease-in-out hover:bg-accent/20 active:scale-[0.98]">
              Secondary
            </button>
            <button className="rounded-md bg-warning px-4 py-2 text-warning-foreground transition-all ease-in-out hover:brightness-125 active:scale-[0.98]">
              Primary
            </button>
          </div>
        </div>
      </div>

      <div role="alert" className="flex w-full max-w-md bg-background">
        <div className="w-full rounded-xl bg-accent/10 ring-1 ring-inset ring-accent/20">
          <div className="relative flex w-full gap-2 py-5 pl-4 pr-6 max-md:flex-col md:gap-4">
            <div className="absolute right-3 top-2">
              <button className="rounded-xl p-0.5 transition-all ease-in-out hover:bg-foreground/20 active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div>
              <span className="flex h-12 w-12 place-content-center items-center rounded-xl bg-danger/20 p-2 text-danger/80 ring-1 ring-inset ring-danger/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  className="h-full w-full"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
                </svg>
              </span>
            </div>
            <div>
              <h6 className="font-bold text-danger">Danger Alert</h6>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                placeat doloremque molestias voluptatem sint nemo
                necessitatibus, dicta, earum, aut accusamus officiis labore
                dolores? Illum modi a quisquam eveniet quasi impedit?
              </p>
            </div>
          </div>
          <div className="flex justify-end space-x-2 border-t border-accent/10 px-4 py-3">
            <button className="rounded-md bg-accent/10 px-4 py-2 transition-all ease-in-out hover:bg-accent/20 active:scale-[0.98]">
              Secondary
            </button>
            <button className="rounded-md bg-danger px-4 py-2 text-danger-foreground transition-all ease-in-out hover:brightness-125 active:scale-[0.98]">
              Primary
            </button>
          </div>
        </div>
      </div>

      <div role="alert" className="flex w-full max-w-md bg-background">
        <div className="w-full rounded-xl bg-accent/10 ring-1 ring-inset ring-accent/20">
          <div className="relative flex w-full gap-2 py-5 pl-4 pr-6 max-md:flex-col md:gap-4">
            <div className="absolute right-3 top-2">
              <button className="rounded-xl p-0.5 transition-all ease-in-out hover:bg-foreground/20 active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div>
              <span className="flex h-12 w-12 place-content-center items-center rounded-xl bg-info/20 p-2 text-info/80 ring-1 ring-inset ring-info/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  className="h-full w-full"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
                </svg>
              </span>
            </div>
            <div>
              <h6 className="font-bold text-info">Info Alert</h6>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                placeat doloremque molestias voluptatem sint nemo
                necessitatibus, dicta, earum, aut accusamus officiis labore
                dolores? Illum modi a quisquam eveniet quasi impedit?
              </p>
            </div>
          </div>
          <div className="flex justify-end space-x-2 border-t border-accent/10 px-4 py-3">
            <button className="rounded-md bg-accent/10 px-4 py-2 transition-all ease-in-out hover:bg-accent/20 active:scale-[0.98]">
              Secondary
            </button>
            <button className="rounded-md bg-info px-4 py-2 text-info-foreground transition-all ease-in-out hover:brightness-125 active:scale-[0.98]">
              Primary
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Test;
