import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kylin.read',
  name: '红果免费漫剧',
  groups: [
    {
      key: 0,
      name: '视频流广告-上滑跳过',
      desc: '检测到上滑提示后，执行上滑手势跳过广告',
      rules: [
        {
          key: 0,
          name: '上滑跳过-普通广告(ana)',
          activityIds: [
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          ],
          fastQuery: true,
          matchRoot: true,
          matchTime: 15000,
          resetMatch: 'activity',
          actionCd: 10000,
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
          matches: '[vid="ana"][visibleToUser=true]',
          snapshotUrls: [],
        },
        {
          key: 1,
          name: '上滑跳过-直播广告(alm)正常状态',
          activityIds: [
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          ],
          fastQuery: true,
          matchRoot: true,
          matchTime: 15000,
          resetMatch: 'activity',
          actionCd: 10000,
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
          matches: '[vid="alm"][text="上滑继续观看短剧"][visibleToUser=true]',
          snapshotUrls: [],
        },
        {
          key: 2,
          name: '上滑跳过-直播广告(alm)倒计时状态',
          activityIds: [
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          ],
          fastQuery: true,
          matchRoot: true,
          matchTime: 15000,
          resetMatch: 'activity',
          actionCd: 15000,
          actionDelay: 7000,
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
          matches: '[vid="alm"][text*="后可继续上滑观看"][visibleToUser=true]',
          snapshotUrls: [],
        },
      ],
    },
  ],
});
