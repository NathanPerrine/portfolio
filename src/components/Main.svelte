<script>
  import Step from "./Step.svelte";

  let steps = [
    {name: 'Project1', icon: 'fa-solid fa-cart-shopping', description: 'Smoljames Store is a a merchanising store created with Next.js, Commerce.js & Stripe! Commerce.js is a CMS for managing project and Stripe is used for all transaction handling.'},
    {name: 'Project2', icon: 'fa-solid fa-list-check', description: 'Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model.'},
    {name: 'Project3', icon: 'fa-solid fa-diagram-project', description: 'Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon).'}
  ]

  let benefits = [
    {
      name: "developer",
      description: "I am an ambitious full-stack developer with a strong foundation in Python and JavaScript, along with expertise in HTML, CSS, and various frameworks. I am on the lookout for a role that not only challenges me but also allows me to leverage the latest technologies. Having taught myself to code through free online resources, I discovered a profound passion for the creative problem-solving involved in crafting innovative online experiences. I further honed my skills through a rigorous bootcamp, where I delved into full-stack development."
    },
    {
      name: "curious",
      description: "My approach is characterized by quiet confidence and an insatiable curiosity, propelling me to continually enhance my skill set. I thrive on learning about new technologies and seamlessly integrating them into my toolkit. I am excited about the prospect of contributing my technical expertise to a dynamic and forward-thinking team, driving impactful projects and pushing the boundaries of what's possible in web development."
    },
    {
      name: "designer",
      description: "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.",
    },
    {
      name: "communicator",
      description: "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
    },
  ];
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

      <a href="https://www.linkedin.com/in/nathan-perrine/" target="_blank" class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer">
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
    <!-- <a href="#introPage" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200">
      <i class="fa-regular fa-circle-play"/>
      <p>Watch the video</p>
    </a> -->
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

  <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        Want to know more?
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
            0{index+1}
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
      The <span class="text-violet-400 poppins">complete</span> package
    </h5>
    <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full">
      <table class="bg-white text-slate-700 rounded text-center">
        <thead class="border-b border-xolid border-slate-200">
          <tr class="">
            <th/>
            <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
            <th class="whitespace-nowrap bg-violet-700 text-white p-4 px-8">Me</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-slate-200">
            <td class="border-r border-solid whitespace-nowrap border-white pl-4 pr-8 py-4 font-semibold text-sm">Dedication</td>
            <td><i class="fa-solid fa-check text-slate-500"/></td>
            <td><i class="fa-solid fa-check text-slate-500"/></td>
            <td><i class="fa-solid fa-xmark text-slate-500"/></td>
            <td><i class="fa-solid fa-check text-green-500"/></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td class="border-r border-solid whitespace-nowrap border-white pl-4 pr-8 py-4 font-semibold text-sm">Critical Thought</td>
            <td><i class="fa-solid fa-xmark text-slate-500"/></td>
            <td><i class="fa-solid fa-check text-slate-500"/></td>
            <td><i class="fa-solid fa-check text-slate-500"/></td>
            <td><i class="fa-solid fa-check text-green-500"/></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td class="border-r border-solid whitespace-nowrap border-white pl-4 pr-8 py-4 font-semibold text-sm">Interpersonal Skills</td>
            <td><i class="fa-solid fa-check text-slate-500"/></td>
            <td><i class="fa-solid fa-xmark text-slate-500"/></td>
            <td><i class="fa-solid fa-check text-slate-500"/></td>
            <td><i class="fa-solid fa-check text-green-500"/></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td class="border-r border-solid whitespace-nowrap border-white pl-4 pr-8 py-4 font-semibold text-sm">Programming Skills</td>
            <td><i class="fa-solid fa-xmark text-slate-500"/></td>
            <td><i class="fa-solid fa-xmark text-slate-500"/></td>
            <td><i class="fa-solid fa-check text-slate-500"/></td>
            <td><i class="fa-solid fa-check text-green-500"/></td>
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