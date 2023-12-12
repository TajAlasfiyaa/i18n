import * as m from "@/paraglide/messages"; //use nextjs's default alias for src folder

export default function Home() {
  return (
    <div>
      <h1>{m.hello_world()}</h1>
    </div>
  );
}
