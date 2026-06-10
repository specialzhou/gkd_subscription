import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 123456789,
  name: '红果短剧广告跳过订阅',
  version: 1,
  author: 'MiMo',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/specialzhou/gkd_subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
