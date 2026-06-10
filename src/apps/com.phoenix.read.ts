import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 0,
      name: '视频流广告-上滑跳过',
      desc: '检测到"上滑继续观看"提示后，执行上滑手势跳过广告',
      rules: [
        {
          key: 0,
          name: '上滑跳过广告',
          activityIds: [
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
            'com.phoenix.read.ui.activity.MainActivity',
          ],
          fastQuery: true,
          actionMaximum: 1,
          actionDelay: 500,
          action: 'swipe',
          swipeArg: {
            start: {
              x: 'width * 0.5',
              y: 'height * 0.8',
            },
            end: {
              x: 'width * 0.5',
              y: 'height * 0.3',
            },
            duration: 300,
          },
          matches: '[text*="上滑继续观看"][visibleToUser=true]',
          snapshotUrls: [],
        },
        {
          key: 1,
          name: '上滑跳过广告-vid',
          activityIds: [
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
            'com.phoenix.read.ui.activity.MainActivity',
          ],
          fastQuery: true,
          actionMaximum: 1,
          actionDelay: 500,
          action: 'swipe',
          swipeArg: {
            start: {
              x: 'width * 0.5',
              y: 'height * 0.8',
            },
            end: {
              x: 'width * 0.5',
              y: 'height * 0.3',
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
      name: '开屏广告',
      desc: '点击跳过开屏广告',
      rules: [
        {
          key: 0,
          name: '开屏广告跳过按钮',
          matches: [
            '[text*="跳过"][text.length<=10]',
            '[text*="skip"][text.length<=10]',
            '[id*="skip"][visibleToUser=true]',
            '[desc*="跳过"][desc.length<=10]',
          ],
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 2,
      name: '弹窗广告',
      desc: '关闭弹窗广告',
      rules: [
        {
          key: 0,
          name: '弹窗广告关闭按钮',
          matches: [
            '[text*="关闭"][visibleToUser=true]',
            '[id*="close"][visibleToUser=true]',
            '[desc*="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 3,
      name: '更新弹窗',
      desc: '关闭应用更新弹窗',
      rules: [
        {
          key: 0,
          name: '更新弹窗取消按钮',
          matches: [
            '[text*="取消"][visibleToUser=true]',
            '[text*="以后再说"][visibleToUser=true]',
            '[text*="暂不更新"][visibleToUser=true]',
          ],
          snapshotUrls: [],
        },
      ],
    },
  ],
});
