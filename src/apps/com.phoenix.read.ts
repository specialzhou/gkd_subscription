import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 0,
      name: '视频流广告-上滑跳过',
      desc: '检测到上滑提示后，执行上滑手势跳过广告',
      rules: [
        {
          key: 0,
          name: '上滑跳过广告',
          activityIds: [
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
            'com.phoenix.read.ui.activity.MainActivity',
          ],
          fastQuery: true,
          matchRoot: true,
          matchTime: 10000,
          resetMatch: 'activity',
          actionCd: 8000,
          actionDelay: 1500,
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
          matches: '[vid="alm"][visibleToUser=true]',
          snapshotUrls: [],
        },
      ],
    },
  ],
});
