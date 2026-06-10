import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 0,
      name: '视频流广告-上滑跳过',
      desc: '检测到"上滑继续观看"或倒计时提示后，执行上滑手势跳过广告',
      rules: [
        {
          key: 0,
          name: '上滑跳过广告-正常',
          activityIds: [
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
            'com.phoenix.read.ui.activity.MainActivity',
          ],
          fastQuery: true,
          matchRoot: true,
          matchTime: 10000,
          resetMatch: 'activity',
          actionCd: 5000,
          actionDelay: 1000,
          action: 'swipe',
          swipeArg: {
            start: {
              x: 720,
              y: 2400,
            },
            end: {
              x: 720,
              y: 800,
            },
            duration: 300,
          },
          matches: '[text*="上滑继续观看"]',
          snapshotUrls: [],
        },
        {
          key: 1,
          name: '上滑跳过广告-倒计时',
          activityIds: [
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
            'com.phoenix.read.ui.activity.MainActivity',
          ],
          fastQuery: true,
          matchRoot: true,
          matchTime: 10000,
          resetMatch: 'activity',
          actionCd: 8000,
          actionDelay: 6000,
          action: 'swipe',
          swipeArg: {
            start: {
              x: 720,
              y: 2400,
            },
            end: {
              x: 720,
              y: 800,
            },
            duration: 300,
          },
          matches: '[text*="后可继续上滑观看"]',
          snapshotUrls: [],
        },
      ],
    },
  ],
});
