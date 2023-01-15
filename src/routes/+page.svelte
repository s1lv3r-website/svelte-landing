<script lang="ts">
  import Asd from '../components/asd.svelte';
  import { Github, Twitter, Link, AtSign, MessageSquare } from 'lucide-svelte';
  import type { ComponentType } from 'svelte';

  const links: Array<{ title: string; link: string; icon: ComponentType }> = [
    { title: 'GitHub', link: 'https://github.com/theS1LV3R', icon: Github },
    { title: 'Twitter (not in use)', link: 'https://twitter.com/@theS1LV3R', icon: Twitter },
    { title: 'Matrix (@s1lv3r:matrix.org)', link: 'https://matrix.to/#/@s1lv3r:matrix.org', icon: MessageSquare },
    { title: 'Email', link: 'mailto:me@s1lv3r.codes', icon: AtSign },
    { title: 'Discord server', link: 'https://s1lv3r.codes/discord', icon: Link },
    { title: 'Pronouns.page', link: 'https://pronouns.page/u/s1lv3r', icon: Link },
    { title: 'Fediverse', link: 'https://snug.moe/@zoe', icon: Link },
  ];

  const miscLinks: Array<{ title: string; link: string; description: string; icon?: ComponentType }> = [
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
</script>

<div class="md:max-w-3xl px-6">
  <h1>S1LV3R</h1>
  <div class="px-5">
    <p class="pb-2">Autistic transfem nerd, in school to become a developer and systems engineer.</p>

    <ul class="pl-4">
      <li>🏳️‍🌈 I am bisexual</li>
      <li>🏳‍⚧ I am trans and use she/they pronouns</li>
      <li>
        <span class="h-4 w-7 py-1 pr-2 inline-block"><Asd /></span>I am neurodivergent (autistic). Highly interested in
        everything computers, servers, and generally technical
      </li>
    </ul>
  </div>

  <div>
    <h2>Contact and links</h2>
    <div class="px-5 flex gap-3 flex-wrap">
      {#each links as link}
        <a
          href={link.link}
          title={link.title}
          target="_blank"
          rel="noopener noreferrer"
          class="bg-neutral-800 p-1 rounded-md hover:bg-neutral-700 hover:shadow-md transition-all"
        >
          <span class="inline-block align-middle p-[2px]">
            <svelte:component this={link.icon} />
          </span>
          {link.title}
        </a>
      {/each}
    </div>
  </div>

  <div>
    <h2>Misc links</h2>
    <div class="px-5 grid grid-cols-2 gap-4">
      {#each miscLinks as link}
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          class="bg-neutral-800 p-3 rounded-md hover:bg-neutral-700 hover:shadow-md transition-all"
        >
          <h3>
            <span class="inline-block align-middle pb-[2px] mr-[-4px]">
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
