<script>
	import Project from './Project.svelte';
	import benefits from '../lib/data/benefits.json';
	import projects from '../lib/data/projects.json';

	const projectFilters = ['All', 'React', 'Sveltekit', 'Web dev'];
	$: active = 'All';
	$: filteredProjects = projects.filter((project) => project.tags.includes(active));
</script>

<main class="flex flex-col flex-1 p-4">
	<section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
		<div class="flex flex-col lg: justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
			<h2 class="font-semibold text-4xl sm:text-5xl md:6xl">
				Hi! I'm <span class="poppins text-violet-400">Nathan</span> Perrine
				<br />
				Full Stack <span class="poppins text-violet-400">Developer</span>
			</h2>
			<p class="text-base sm:text-lg md:text-xl">
				My <span class="text-violet-400">favorite tech</span> inclues Python, Sveltekit, SCSS,
				JavaScript, PostgreSQL or Firebase/Firestore!
			</p>

			<a
				href="https://www.linkedin.com/in/nathan-perrine/"
				target="_blank"
				class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
			>
				<div
					class="absolute top-0 right-full w-full h-full bg-slate-950 opacity-20 group-hover:translate-x-full z-10 duration-200"
				/>
				<h4 class="relative z-9 poppins">Get in touch &rarr;</h4>
			</a>
		</div>
		<div class="relative shadow-2xl grid place-items-center">
			<img
				src={'images/profile2.png'}
				alt="Scruffy man working on a computer"
				class="object-cover z-[2] max-h-[70vh"
			/>
		</div>
	</section>

	<section id="projects" class="lg:min-h-screen lg:max-h-screen overflow-hidden pt-20 lg:pt-16 flex flex-col gap-12">
		<div class="flex flex-col gap-2 text-center">
			<h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				Curious to <span class="poppins text-violet-400">see</span> my work?
			</h3>
		</div>

		<div class="flex flex-wrap flex-row justify-center gap-4">
			{#each projectFilters as filter}
			<button
			on:click={() => (active = filter)}
			class={'btn bg-slate-950 hover:border-violet-400 w-24 duration-500 ' +
					(active === filter
					? 'poppins text-violet-400 border border-violet-400'
					: 'border border-violet-700')}
			>
			{filter}
		</button>
		{/each}
	</div>

		<div class="flex flex-1 flex-row">
			<div class="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-12 lg:gap-10 mx-8">
				{#each filteredProjects as project}
					<Project project={project} bind:active />
				{/each}
			</div>
		</div>
	</section>

	<section
		id="about"
		class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-8 sm:gap-10 md:gap-12 relative"
	>
		<div
			class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
		>
			<h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				A bit <span class="poppins text-violet-400">about</span> me.
			</h3>
		</div>
		<p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
			{#each benefits as benefit, index}
				<div class="flex gap-6 sm:gap-8">
					<p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
						0{index + 1}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:text-3xl md:text-5xl">
							{benefit.name}
						</h3>
						<p>
							{benefit.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
		<h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">
			. . . the <span class="text-violet-400 poppins">complete</span> package.
		</h5>
		<div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full">
			<table class="bg-white text-slate-700 rounded text-center">
				<thead class="border-b border-solid border-slate-400">
					<tr class="">
						<th />
						<th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
						<th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
						<th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
						<th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">Me</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid whitespace-nowrap border-white pl-4 pr-8 py-4 font-semibold text-sm"
							>Dedication</td
						>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid whitespace-nowrap border-white pl-4 pr-8 py-4 font-semibold text-sm"
							>Critical Thought</td
						>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid whitespace-nowrap border-white pl-4 pr-8 py-4 font-semibold text-sm"
							>Interpersonal Skills</td
						>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
					<tr class="border-b border-solid border-slate-200">
						<td
							class="border-r border-solid whitespace-nowrap border-white pl-4 pr-8 py-4 font-semibold text-sm"
							>Programming Skills</td
						>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-xmark text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-slate-500" /></td>
						<td><i class="fa-solid fa-check text-green-500" /></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="mx-auto -mt-12 italic sm:hidden opacity-50">
			<p>Scroll to see more &rarr;</p>
		</div>
		<p class="mx-auto">So why not invest?</p>
	</section>
</main>
