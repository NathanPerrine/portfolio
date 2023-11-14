<script>
  export let y;
  import { base } from "$app/paths";

  let tabs = [
    {name: 'Home', link: '/'},
    {name: 'Projects', link: '#projects'},
    {name: 'About me', link: '#about'},
  ]
</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " +
  (
    y > 0
    ? ' py-4 bg-slate-950 border-violet-950'
    : ' py-6 bg-transparent border-transparent'
  )}
>
  <h1 class="font-medium">
    <b class="font-bold poppins">Nathan</b> Perrine
  </h1>

  <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
    {#each tabs as tab, index}
      <a data-sveltekit-replacestate href="{base}{tab.link}" class="duration-200 hover:text-violet-400">
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>
  <a href="https://www.linkedin.com/in/nathan-perrine/" target="_blank" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
    <div class="absolute top-0 right-full w-full h-full bg-slate-950 opacity-20 group-hover:translate-x-full z-10 duration-200"></div>
    <h4 class="relative z-9 poppins">Get in touch</h4>
  </a>
  <div class="dropdown dropdown-end">
        <button class="btn btn-ghost sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </button>

        <ul class="dropdown-content z-[1] bg-slate-950 border border-solid border-violet-950 rounded-box w-52">
          {#each tabs as tab, index}
            <a data-sveltekit-replacestate href="{base}{tab.link}" class="duration-200 text-lg hover:text-violet-400">
              <p class="py-4">{tab.name}</p>
            </a>
          {/each}
        </ul>
</header>