<script lang="ts">
  import Asd from '$lib/components/asd.svelte';
  import { Github, Twitter, Link, AtSign, MessageSquare, Hash } from 'lucide-svelte';
  import type { ComponentType } from 'svelte';

  const links: Array<{ title: string; link: string; icon: ComponentType; rel?: string }> = [
    { title: 'GitHub [theS1LV3R]', link: 'https://github.com/theS1LV3R', icon: Github },
    // { title: 'Twitter (inactive) [theS1LV3R]', link: 'https://twitter.com/@theS1LV3R', icon: Twitter },
    { title: 'Pronouns [theS1LV3R]', link: 'https://en.pronouns.page/@theS1LV3R', icon: Link, rel: 'me' },
    { title: 'Fediverse [@zoe@snug.moe]', link: 'https://snug.moe/@zoe', icon: Link },
    { title: 'Matrix [@s1lv3r:matrix.org]', link: 'https://matrix.to/#/@s1lv3r:matrix.org', icon: MessageSquare },
    { title: 'Discord [theS1LV3R]', link: 'https://discord.com/users/279692618391093248', icon: Hash },
    { title: 'Email', link: 'mailto:me@s1lv3r.codes', icon: AtSign },
  ];

  const miscLinks: { title: string; link: string; description: string; icon?: ComponentType }[] = [
    {
      icon: Github,
      title: 'dotfiles',
      link: 'https://github.com/theS1LV3R/dotfiles',
      description: 'All my dotfiles. There are a lot.',
    },
    {
      title: 'nerd',
      link: 'https://nerd.s1lv3r.codes',
      description: 'nerd',
    },
    {
      title: 'Team Corax',
      link: 'https://corax.team',
      description: "The CTF team I'm a member of",
    },
  ];

  const url = 'https://s1lv3r.codes';
  const title = 'S1LV3R';
  const bio = 'Autistic transfem nerd, studying to become a devops and systems engineer.';
</script>

<svelte:head>
  <meta name="description" content={bio} />
  <meta name="title" content="S1LV3R" />

  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={bio} />
  <meta name="theme-color" content="#ee34ff" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={bio} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary" />
</svelte:head>

<div class="p-2 px-6 md:max-w-3xl">
  <h1>S1LV3R</h1>
  <div class="px-5">
    <p class="pb-2">{bio}</p>
    <br />
    <p>
      <span class="inline-block h-4 w-7 py-1 pr-2">
        <Asd />
      </span>I am neurodivergent (autistic). Highly interested in everything computers, servers, and generally
      technical. I'm also super interested in old mechanical equipment and old technology, and everything
      <a
        href="https://youtube.com/@TechnologyConnections"
        rel="noopener noreferrer"
        target="_blank"
        class="underline hover:font-bold"
      >
        Technology Connections
      </a> has posted.
    </p>
    <br />
    <p>
      I speak both Norwegian and English, but even though I live in Norway and Norwegian is my native language, I tend
      to speak more English
    </p>
  </div>

  <div>
    <h2>Contact and links</h2>
    <div class="flex flex-wrap gap-3 px-5">
      {#each links as link}
        <a
          href={link.link}
          title={link.title}
          target="_blank"
          rel="noopener noreferrer {link.rel ?? ''}"
          class="rounded-md bg-neutral-800 p-1 transition-all hover:bg-neutral-700 hover:shadow-md"
        >
          <span class="inline-block p-[2px] align-middle">
            <svelte:component this={link.icon ?? Link} />
          </span>
          {link.title}
        </a>
      {/each}
    </div>
  </div>

  <div>
    <h2>Misc links</h2>
    <div class="grid grid-cols-2 gap-4 px-5">
      {#each miscLinks as link}
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-md bg-neutral-800 p-3 transition-all hover:bg-neutral-700 hover:shadow-md"
        >
          <h3>
            <span class="mr-[-4px] inline-block pb-[2px] align-middle">
              <svelte:component this={link.icon ?? Link} />
            </span>
            {link.title}
          </h3>
          {link.description}
        </a>
      {/each}
    </div>
  </div>
</div>
