<script>
  import Step from "./Step.svelte";

  let steps = [
    {name: 'Project1', icon: 'fa-solid fa-cart-shopping', description: 'Smoljames Store is a a merchanising store created with Next.js, Commerce.js & Stripe! Commerce.js is a CMS for managing project and Stripe is used for all transaction handling.'},
    {name: 'Project2', icon: 'fa-solid fa-list-check', description: 'Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model.'},
    {name: 'Project3', icon: 'fa-solid fa-diagram-project', description: 'Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon).'}
  ]
</script>

<main class="flex flex-col flex-1 p-4">
  <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
    <div class="flex flex-col lg: justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
      <h2 class="font-semibold text-4xl sm:text-5xl md:6xl">
        Hi! I'm <span class="poppins text-violet-400">Nathan</span> Perrine
        <br/>
        Full Stack <span class="poppins text-violet-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400">favorite tech</span> inclues Python, Sveltekit, TailwindCSS, JavaScript, PostgreSQL or Firebase/Firestore!
      </p>

      <a href="https://www.linkedin.com/in/nathan-perrine/" target="_blank" class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer">
        <div class="absolute top-0 right-full w-full h-full bg-slate-950 opacity-20 group-hover:translate-x-full z-10 duration-200"></div>
        <h4 class="relative z-9 poppins">Get in touch &rarr;</h4>
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img src={"images/profile2.png"} alt="Scruffy man working on a computer" class="object-cover z-[2] max-h-[70vh"/>
    </div>
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>
    <a href="#introPage" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200">
      <i class="fa-regular fa-circle-play"/>
      <p>Watch the video</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          Smoljames Store is a a merchanising store created with <strong class="text-violet-400">Next.js, Commerce.js, Stripe & Node.js + Express.js!</strong> Commerce.js is a product CMS and Stripe is used for all transaction handling.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Ultimate Todos is a Full Stack <strong class="text-violet-400">Next.js</strong>, <strong class="text-violet-400">Node.js + Express.js</strong> & <strong class="text-violet-400">Firebase</strong> CRUD application that allows a user to login, manage a tidy and efficacious todo list, and persist this information across devices.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          The Pokédex is a <strong class="text-violet-400">SvelteKit & TailwindCSS</strong> web application, hosted on <strong class="text-violet-400">Netlify</strong>, that consumes and caches the <strong class="text-violet-400">Pokémon API</strong> to display all Pokémon information. Gotta catch them all!
        </p>
      </Step>
    </div>
  </section>

  <section id="about">

  </section>
</main>