function Test() {
  return (
    <main className="bg-background lg:h-screen">
      <section className="flex h-full w-full p-4">
        <div className="hidden flex-1 place-content-center items-center lg:flex">
          <img
            src="https://res.cloudinary.com/dprty78z0/image/upload/v1721575936/jx5ojulkkpyn54otllqt.png"
            alt=""
          />
        </div>
        <div className="flex-1 p-1 max-lg:min-h-screen">
          <div className="flex min-h-full w-full place-content-center rounded-xl bg-card-background px-10 py-10 md:pt-16 lg:px-32 xl:px-40">
            <div className="flex w-full max-w-md flex-1 flex-col">
              <div className="flex flex-col items-center space-y-5">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-16 w-16 fill-primary"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M13.5 3c5.187 0 9.5 3.044 9.5 7c0 3.017 -2.508 5.503 -6 6.514v3.486a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-4.046a21 21 0 0 1 -2.66 -1.411l-.13 -.082l-1.57 1.308a1 1 0 0 1 -1.634 -.656l-.006 -.113v-2.851l-.31 -.25a47 47 0 0 1 -.682 -.568l-.67 -.582a1 1 0 0 1 0 -1.498a47 47 0 0 1 1.351 -1.151l.311 -.25v-2.85a1 1 0 0 1 1.55 -.836l.09 .068l1.57 1.307l.128 -.08c2.504 -1.553 4.784 -2.378 6.853 -2.453zm-2.499 13.657l-.001 2.343h4l.001 -2.086q -.735 .086 -1.501 .086a9.6 9.6 0 0 1 -2.13 -.252z" />
                  </svg>
                </a>
                <h4 className="text-2xl font-medium">Welcome back!</h4>
              </div>
              <form action="" className="mt-10 w-full max-w-3xl space-y-10">
                <div className="flex flex-col space-y-8">
                  <div className="relative z-0">
                    <input
                      autoComplete="off"
                      name="email"
                      type="email"
                      inputMode="email"
                      className="peer block w-full appearance-none border-0 border-b border-foreground/50 bg-transparent px-0 py-2.5 text-sm text-foreground autofill:bg-transparent focus:border-primary focus:outline-none focus:ring-0 dark:text-white"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-foreground duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      autoComplete="off"
                      name="password"
                      type="password"
                      id="password"
                      className="peer block w-full appearance-none border-0 border-b border-foreground/50 bg-transparent px-0 py-2.5 text-sm text-foreground autofill:bg-transparent focus:border-primary focus:outline-none focus:ring-0 dark:text-white"
                      placeholder=" "
                    />
                    <label
                      htmlFor="password"
                      className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-foreground duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
                    >
                      Password
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <input
                        className="border-input/50 h-4 w-4 cursor-pointer border bg-background text-primary focus:outline-none focus:ring-0"
                        type="checkbox"
                        name="remember"
                        id="remember"
                      />
                      <label className="text-sm" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-foreground/50 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    className="w-full rounded-full bg-primary p-2 font-medium text-primary-foreground transition hover:bg-primary/80"
                    type="submit"
                  >
                    Log in
                  </button>
                  <button className="text-muted-foreground flex w-full place-content-center items-center gap-1 rounded-full bg-muted/80 p-2 font-medium transition-all hover:bg-muted/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                      className="h-6 w-6"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      ></path>
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      ></path>
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                    </svg>
                    <span>Log in with Google</span>
                  </button>
                </div>
              </form>
              <div className="flex h-full flex-1 place-content-center items-end text-sm">
                <p>
                  Don&apos;t have an account?&nbsp;
                  <a
                    href="#"
                    className="text-primary underline transition hover:opacity-90"
                  >
                    Create one for free
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Test;
