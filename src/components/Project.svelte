<script>
	import { fly } from 'svelte/transition';
	import { OnMount } from 'fractils';
	export let project;
	export let active;
</script>

{#key active}

<div out:fly={{ x: 200, duration: 300 }} class="lg:h-full ">
<OnMount>
			<a
				href={project.href}
				target="_blank"
				in:fly={{ x: -200, duration: 300, delay: 300 }}
				class="max-h-full h-full p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"
			>
				<div
					class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-14 mx-auto duration-100"
				>
					<i class={project.icon} />
				</div>

				<h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{project.name}</h3>
				<div class="max-h-[100px] lg:max-h-[275px] overflow-auto px-1">
					<p class="lg:line-clamp-[11] group-hover:line-clamp-none group-hover:bg-slate-950">
						{@html project.description}
					</p>
          <a href={project.repo} target="_blank" class="inline-block mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" class=" hover:text-violet-400">
              <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
          </a>
				</div>
				<div class="flex flex-1 justify-between gap-4 items-end">
					<div
						class="ml-auto cursor-pointer group-hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:right-full after:w-full after:h-full rounded-lg after:bg-violet-400 after:duration-200 group-hover:after:translate-x-full after:z-[-1] overflow-hidden"
					>
						<p class="mx-2 z-4">Go to &rarr;</p>
					</div>
				</div>
			</a>
		</OnMount>
	</div>
{/key}
