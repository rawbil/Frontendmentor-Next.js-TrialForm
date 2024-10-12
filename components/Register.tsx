import RegisterForm from "./RegisterForm";

export default function Register() {
  return (
    <div className="text-white background">
        <section className=" px-3 flex gap-[5%] max-580px:gap-[3%] max-580px:flex-col  max-580px:justify-between max-580px:py-10 max-580px:overflow-y-auto max-900px:gap-[2%] items-center justify-around h-screen max-w-5xl mx-auto">
          <div className="flex flex-col gap-4 flex-1 max-580px:mt-10">
            <h1 className="font-bold text-4xl max-680px:text-3xl max-680px:font-semibold max-580px:text-2xl">Learn to code by watching others</h1>
            <p className="text-base max-580px:text-sm">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </div>
        <RegisterForm />
        </section>
    </div>
  );
}
