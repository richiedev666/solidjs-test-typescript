import type { Component } from "solid-js";

import { createSignal, For } from "solid-js";

interface NavItem {
  title: string;
  path: string;
}

const [navItems, setNavItems] = createSignal<Array<NavItem>>([
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
]);

const App: Component = () => {
  return (
    <header className="container mx-auto p-4 xl bg-white dark:bg-slate-800 flex justify-between">
      <div className="flex items-center gap-4">
        <img
          src="/src/images/logo.png"
          alt=""
          width={50}
          className="object-contain"
        />

        <span className="text-black dark:text-white">Todo Listius</span>
      </div>

      <ul className="flex items-center gap-4">
        <For each={navItems()}>
          {(navItem, index) => (
            <li className="hover:text-gray-500 transition-colors">
              <a href={navItem.path}>{navItem.title}</a>
            </li>
          )}
        </For>
      </ul>
    </header>
  );
};

export default App;
