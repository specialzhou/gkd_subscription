import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 0,
      name: '普通广告-上滑跳过(ana)',
      desc: '检测到普通视频广告上滑提示后，执行上滑手势跳过广告',
      rules: [
        {
          key: 0,
          name: '上滑跳过-普通广告(ana)',
          activityIds: [
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
            'com.phoenix.read.ui.activity.MainActivity',
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
      ],
    },
    {
      key: 1,
      name: '直播广告-正常态-上滑跳过(alm)',
      desc: '检测到直播广告上滑提示后，执行上滑手势跳过广告',
      rules: [
        {
          key: 1,
          name: '上滑跳过-直播广告(alm)正常状态',
          activityIds: [
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
            'com.phoenix.read.ui.activity.MainActivity',
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
      ],
    },
    {
      key: 2,
      name: '直播广告-倒计时态-上滑跳过(alm)',
      desc: '检测到直播广告倒计时上滑提示后，等待倒计时结束上滑跳过广告',
      rules: [
        {
          key: 2,
          name: '上滑跳过-直播广告(alm)倒计时状态',
          activityIds: [
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
            'com.phoenix.read.ui.activity.MainActivity',
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
