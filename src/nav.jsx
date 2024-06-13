import { A } from "@solidjs/router";
import { createSignal, For } from "solid-js";

//
// Only edit this file from here
const buttonList = [
  { href: "/blog", text: "/blog" },
  { href: "/blog/foo", text: "/blog/foo" },
  { href: "/blog/foo/baz", text: "/blog/foo/baz" },
];
// to here
//

function Button(props) {
  return (
    <A
      activeClass="btn-active"
      inactiveClass="btn-inactive"
      href={props.href}
    >
      {props.children}
    </A>
  );
}

export default function Nav() {
  const [buttons, setButtons] = createSignal(buttonList);
  return (
    <nav>
      <For each={buttons()}>
        {(button) => <Button href={button.href}>{button.text}</Button>}
      </For>
    </nav>
  );
}
