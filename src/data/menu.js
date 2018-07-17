// 主管和普通员工两个权限,1为主管，0为普通员工,2为超级管理员
const menu = [
  [
    {
      title: '工作台',
      index: '/Workbench',
      icon: 'el-icon-setting'
    },
    {
      title: '双链管理',
      index: '/slgl',
      icon: 'el-icon-setting'
    },
    {
      title: '诊改数据平台',
      index: '/zgrepository',
      icon: 'el-icon-setting'
    },
    {
      title: '计划与督办',
      index: '/zgLore',
      icon: 'el-icon-setting'
    },
    {
      title: '自我诊断',
      index: '/zytbb',
      icon: 'el-icon-setting'
    },
    {
      title: '系统设置',
      index: '1',
      icon: 'el-icon-setting',
      children: [
        {
          title: '个人中心',
          index: '1-1',
          icon: 'el-icon-setting'
        },
        {
          title: '数据权限',
          index: '/sjqx',
          icon: 'el-icon-setting'
        }
      ]
    },
    {
      title: '画像',
      index: '2',
      icon: 'el-icon-setting',
      children: [
        {
          title: '个人画像',
          index: '2-1',
          icon: 'el-icon-setting'
        },
        {
          title: '群体画像',
          index: '2-2',
          icon: 'el-icon-setting'
        }
      ]
    },
    {
      title: '主题分析',
      index: '3',
      icon: 'el-icon-setting',
      children: [
        {
          title: '专业建设分析',
          index: '3-1',
          icon: 'el-icon-setting'
        },
        {
          title: '培养方案分析',
          index: '3-2',
          icon: 'el-icon-setting'
        },
        {
          title: '教学质量分析',
          index: '3-3',
          icon: 'el-icon-setting'
        },
        {
          title: '教学过程分析',
          index: '3-4',
          icon: 'el-icon-setting'
        },
        {
          title: '学生成绩分析',
          index: '3-5',
          icon: 'el-icon-setting'
        },
        {
          title: '学生就业分析',
          index: '3-6',
          icon: 'el-icon-setting'
        },
        {
          title: '招生分析',
          index: '3-7',
          icon: 'el-icon-setting'
        }
      ]
    },
    {
      title: '第三方分析',
      index: '4',
      icon: 'el-icon-setting',
      children: [
        {
          title: '蓝墨云课堂',
          index: '4-1',
          icon: 'el-icon-setting'
        },
        {
          title: '课堂抬头率分析',
          index: '4-2',
          icon: 'el-icon-setting'
        },
        {
          title: '学生轨迹分析',
          index: '4-3',
          icon: 'el-icon-setting'
        },
        {
          title: '慕课',
          index: '4-4',
          icon: 'el-icon-setting'
        },
        {
          title: '实习管理',
          index: '4-5',
          icon: 'el-icon-setting'
        },
        {
          title: '网络学习空间',
          index: '4-6',
          icon: 'el-icon-setting'
        },
        {
          title: '随堂评测',
          index: '4-7',
          icon: 'el-icon-setting'
        },
        {
          title: '签到',
          index: '4-8',
          icon: 'el-icon-setting'
        }
      ]
    },
    {
      title: '驾驶舱',
      index: '/xgmm1',
      icon: 'el-icon-setting'
    },
    {
      title: '核心指标库',
      index: '/xgmm2',
      icon: 'el-icon-setting'
    },
    {
      title: '专家答疑与建议',
      index: '/xgmm3',
      icon: 'el-icon-setting'
    },
    {
      title: '诊改知识库',
      index: '/xgmm4',
      icon: 'el-icon-setting'
    },
    {
      title: '诊改数据平台',
      index: '/xgmm5',
      icon: 'el-icon-setting'
    }
  ]
]

export default menu
