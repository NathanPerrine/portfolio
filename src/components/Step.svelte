<script>
	import { fade, fly } from 'svelte/transition';
	import { OnMount } from 'fractils';
	export let step;
	export let active;
</script>

{#key active}
	<div out:fly={{ x: 200, duration: 300 }}>
		<OnMount>
			<a
				href={step.href}
				target="_blank"
				in:fly={{ x: -200, duration: 300, delay: 300 }}
				out:fade={{ duration: 300 }}
				class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"
			>
				<div
					class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:mt-16 mx-auto duration-100"
				>
					<i class={step.icon} />
				</div>

				<h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{step.name}</h3>
				<p>{@html step.description}</p>
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
