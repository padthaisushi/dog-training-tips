// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// TODO: 実際のGitHubユーザー名・リポジトリ名が決まったら site / base を更新すること
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/affiliate-dog-training-site',
  integrations: [sitemap()]
});