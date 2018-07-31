import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import store from '../store/store'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/swdt',
      meta: {
        title: '人才培养质量状态数据',
        isshowSubTitle: true,
        requireAuth: true
      }
    },
    {
      path: '/zgjhydb',
      redirect: '/zgjhydb/2',
      meta: {
        title: '诊改计划与督办',
        isshowSubTitle: false,
        requireAuth: true
      }
    },
    {
      path: '/slgl',
      redirect: '/slgl/1',
      meta: {
        title: '双链管理',
        isshowSubTitle: false,
        requireAuth: true
      }
    },
    {
      path: '*',
      redirect: '/swdt',
      meta: {
        title: '人才培养质量状态数据',
        isshowSubTitle: true,
        requireAuth: true
      }
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve),
      meta: {
        title: '登录',
        requireAuth: true
      }
    },
    {
      path: '/data-v',
      component: resolve => require(['../components/page/data-v/data-show.vue'], resolve),
      meta: {
        title: '数据展示',
        requireAuth: true
      }
    },
    {
      path: '/zggzt',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/page/Workbench/WorkbenchNew.vue'], resolve),
          meta: {
            isshowSubTitle: false,
            title: '诊改工作台',
            requireAuth: true
          }
        },
        // 重点关注
        // 疑似不在校学生
        {
          path: '/ysbzxxs',
          component: resolve => require(['../components/page/zdgz/ysbzxxs.vue'], resolve),
          meta: {
            isshowSubTitle: false,
            title: '疑似不在校学生',
            requireAuth: true
          }
        },
        // 困难学生
        {
          path: '/knxs',
          component: resolve => require(['../components/page/zdgz/knxs.vue'], resolve),
          meta: {
            isshowSubTitle: false,
            title: '困难学生',
            requireAuth: true
          }
        },
        // 资源利用率
        {
          path: '/zylyl',
          component: resolve => require(['../components/page/zdgz/zylyl.vue'], resolve),
          meta: {
            isshowSubTitle: false,
            title: '资源利用率',
            requireAuth: true
          }
        },
        {
          path: '/swdt',
          component: resolve => require(['../components/page/swdt/swdt.vue'], resolve),
          meta: {
            title: '人才培养质量状态数据',
            isshowSubTitle: false,
            requireAuth: true
          }
        },
        {
          path: '/pgsj',
          component: resolve => require(['../components/page/swdt/nl/LanMo.vue'], resolve),
          meta: {
            title: '适应社会需求能力评估数据',
            isshowSubTitle: false,
            requireAuth: true
          }
        },
        {
          path: '/zgzdk',
          component: resolve => require(['../components/page/zgRepository/zz_zhidu.vue'], resolve),
          meta: {
            title: '诊改制度库',
            isshowSubTitle: false,
            requireAuth: true
          }
        },
        {
          path: '/glfwjx',
          component: resolve => require(['../components/page/glfwjx/glfwjx.vue'], resolve),
          meta: {
            title: '管理服务绩效',
            isshowSubTitle: true,
            requireAuth: true
          }
        },
        {
          path: '/swdtDetail/:th/:table',
          component: resolve => require(['../components/page/swdt/detail.vue'], resolve),
          meta: {
            title: '人才培养质量状态数据-详情',
            isshowSubTitle: false,
            requireAuth: true
          }
        },
        {
          // path: '/slgl-wfzd',
          path: '/slgl/:type',
          component: resolve => require(['../components/page/slgl/Slgl.vue'], resolve),
          meta: {
            title: '双链管理',
            requireAuth: true,
            isshowSubTitle: false,
          }
        },
        {
          path: '/addTarget',
          component: resolve => require(['../components/page/slgl/AddTarget.vue'], resolve),
          meta: {
            title: '双链管理-添加目标',
            requireAuth: true
          }
        },
        {
          path: '/editTarget/:id',
          component: resolve => require(['../components/page/slgl/EditTarget.vue'], resolve),
          meta: {
            title: '双链管理-编辑目标',
            requireAuth: true
          }
        },
        {
          path: '/splitTarget/:id',
          component: resolve => require(['../components/page/slgl/SplitTarget.vue'], resolve),
          meta: {
            title: '双链管理-分解目标',
            requireAuth: true
          }
        },
        {
          path: '/zdPlan/:id',
          component: resolve => require(['../components/page/slgl/zdjh/AddPlan.vue'], resolve),
          meta: {
            title: '双链管理-制定计划',
            requireAuth: true
          }
        },
        {
          path: '/childList/:id',
          component: resolve => require(['../components/page/slgl/ChildList.vue'], resolve),
          meta: {
            title: '双链管理-子目标列表',
            requireAuth: true,
            isshowSubTitle: false
          }
        },
        {
          path: '/editChildTarget/:id/:fatherId', // 编辑子目标
          component: resolve => require(['../components/page/slgl/EditChildTarget.vue'], resolve),
          meta: {
            title: '双链管理-编辑子目标',
            requireAuth: true
          }
        },
        {
          path: '/targetDetail/:id', // 目标详情
          component: resolve => require(['../components/page/slgl/TargetDetail.vue'], resolve),
          meta: {
            title: '双链管理-目标详情',
            requireAuth: true
          }
        },
        {
          path: '/slgl-wshd', // 我审核的目标
          component: resolve => require(['../components/page/slgl/wsh/Slgl.vue'], resolve),
          meta: {
            title: '我审核的目标',
            requireAuth: true
          }
        },
        {
          path: '/shTargetDetail/:id', // 我审核的目标详情
          component: resolve => require(['../components/page/slgl/wsh/TargetDetail.vue'], resolve),
          meta: {
            title: '双链管理-我审核的目标详情',
            requireAuth: true
          }
        },
        // 计划
        {
          // path: '/zgjhydb-wfzd', // 我负责的计划列表
          path: '/zgjhydb/:type', //
          component: resolve => require(['../components/page/jhgl/wfz/PlanList.vue'], resolve),
          meta: {
            title: '诊改计划与督办',
            requireAuth: true,
            isshowSubTitle: false
          }
        },
        {
          path: '/addPlan', // 添加计划
          component: resolve => require(['../components/page/jhgl/wfz/AddPlan.vue'], resolve),
          meta: {
            title: '诊改计划与督办-添加计划',
            requireAuth: true
          }
        },
        {
          path: '/editPlan/:id', // 编辑计划
          component: resolve => require(['../components/page/jhgl/wfz/EditPlan.vue'], resolve),
          meta: {
            title: '诊改计划与督办-编辑计划',
            requireAuth: true
          }
        },
        {
          path: '/wfzPlanDetail/:id', // 我负责的计划详情
          component: resolve => require(['../components/page/jhgl/wfz/PlanDetail.vue'], resolve),
          meta: {
            title: '诊改计划与督办-我负责的计划详情',
            requireAuth: true
          }
        },
        {
          path: '/zgjhydb-wjdd', // 我监督的计划
          component: resolve => require(['../components/page/jhgl/wjd/PlanList.vue'], resolve),
          meta: {
            title: '我监督的计划',
            requireAuth: true
          }
        },
        {
          path: '/wjdPlanDetail/:id', // 我监督的计划详情
          component: resolve => require(['../components/page/jhgl/wjd/PlanDetail.vue'], resolve),
          meta: {
            title: '我监督的计划详情',
            requireAuth: true
          }
        },
        {
          path: '/zgjhydb-wcyd', // 我参与的计划
          component: resolve => require(['../components/page/jhgl/wcy/PlanList.vue'], resolve),
          meta: {
            title: '我参与的计划',
            requireAuth: true
          }
        },
        {
          path: '/wcyPlanDetail/:id', // 我参与的计划详情
          component: resolve => require(['../components/page/jhgl/wcy/PlanDetail.vue'], resolve),
          meta: {
            title: '我参与的计划详情',
            requireAuth: true
          }
        },
        {
          path: '/zgjhydb-wshd', // 我审核的计划
          component: resolve => require(['../components/page/jhgl/wsh/PlanList.vue'], resolve),
          meta: {
            title: '我审核的计划',
            requireAuth: true
          }
        },
        {
          path: '/wshPlanDetail/:id', // 我审核的计划详情
          component: resolve => require(['../components/page/jhgl/wsh/PlanDetail.vue'], resolve),
          meta: {
            title: '我审核的计划详情',
            requireAuth: true
          }
        },
        {
          path: '/zgdsj-zgjsc', // 诊改驾驶舱
          component: resolve => require(['../components/page/zgjsc/jscNew.vue'], resolve),
          meta: {
            title: '诊改驾驶舱',
            isshowSubTitle: false,
            requireAuth: true
          }
        },
        // zgdsj-zwzd
        // {
        //   path: '/zgdsj-zwzd',
        //   component: resolve => require(['../components/page/zwfx/zwfx.vue'], resolve),
        //   meta: {
        //     title: '自我诊断',
        //     isshowSubTitle: false,
        //     requireAuth: true
        //   }
        // },
        // sjxlfx
        {
          path: '/sjxlfx', // 自我诊断-时间序列分析
          component: resolve => require(['../components/page/zwfx/zwfx.vue'], resolve),
          meta: {
            title: '自主诊断-时间序列分析',
            isshowSubTitle: true,
            requireAuth: true
          }
        },
        {
          path: '/ysdbfx', // 自我诊断-要素对比分析
          component: resolve => require(['../components/page/zwfx/zwfx-ysdb.vue'], resolve),
          meta: {
            title: '自主诊断-要素对比分析',
            isshowSubTitle: true,
            requireAuth: true
          }
        },
        {
          path: '/xgxfx', // 自我诊断-相关性分析
          component: resolve => require(['../components/page/zwfx/zwfx-xgx.vue'], resolve),
          meta: {
            title: '自主诊断-相关性分析',
            isshowSubTitle: true,
            requireAuth: true
          }
        },
        {
          path: '/qsycfx', // 自我诊断-趋势预测分析
          component: resolve => require(['../components/page/zwfx/zwfx-qsyc.vue'], resolve),
          meta: {
            title: '自主诊断-趋势预测分析',
            isshowSubTitle: true,
            requireAuth: true
          }
        },
        // zgdsj-zwzd-demo
        {
          path: '/cjs-demo', // 自我诊断
          component: resolve => require(['../components/page/zwfx/zwfx_demo.vue'], resolve),
          meta: {
            title: '学生缺课趋势分析',
            isshowSubTitle: true,
            requireAuth: true
          }
        },
        {
          path: '/cjs-demo1', // 自我诊断
          component: resolve => require(['../components/page/zwfx/zwfx_demo1.vue'], resolve),
          meta: {
            title: '学生缺课趋势分析',
            isshowSubTitle: true,
            requireAuth: true
          }
        },
        {
          path: '/zgsjpt',
          component: resolve => require(['../components/page/zgRepository/zgRepository.vue'], resolve),
          meta: {
            title: '诊改数据平台',
            requireAuth: true
          }
        },
        {
          path: '/zgzsk',
          component: resolve => require(['../components/page/zgRepository/zgLoreNew.vue'], resolve),
          meta: {
            title: '诊改知识库',
            isshowSubTitle: false,
            requireAuth: true
          }
        },
        {
          path: '/xxdak',
          component: resolve => require(['../components/page/zgRepository/zz_xxdak.vue'], resolve),
          meta: {
            title: '学校档案库',
            isshowSubTitle: false,
            requireAuth: true
          }
        },
        {
          path: '/bz',
          component: resolve => require(['../components/page/jm_bzlgl/jm_bzlzbk.vue'], resolve),
          meta: {
            title: '标准链管理',
            requireAuth: true
          }
        },
        {
          path: '/Add_jm_bzlzbk/:id',
          component: resolve => require(['../components/page/jm_bzlgl/AddJm_bzlzbk.vue'], resolve),
          meta: {
            title: '标准链管理-添加',
            requireAuth: true
          }
        },
        {
          path: '/edit_jm_bzlzbk/:id',
          component: resolve => require(['../components/page/jm_bzlgl/editWork.vue'], resolve),
          meta: {
            title: '标准链管理-编辑',
            requireAuth: true
          }
        },
        {
          path: '/xxx',
          component: resolve => require(['../components/page/diaowen/diaowen.vue'], resolve),
          meta: {
            title: '新建问卷',
            isshowSubTitle: true,
            requireAuth: true
          }
        },
        {
          path: '/xtsz-sjqx',
          component: resolve => require(['../components/page/setting/sjqx.vue'], resolve),
          meta: {
            title: '数据权限',
            requireAuth: true
          }
        },
        {
          path: '/zgzjdyyjy',
          component: resolve => require(['../components/page/zgzjdyyjy/zgzjdyyjy.vue'], resolve),
          meta: {
            title: '诊改专家平台',
            requireAuth: true,
            isshowSubTitle: false
          }
        },
        {
          path: '/zggzylt',
          component: resolve => require(['../components/page/zggzylt/zggzylt.vue'], resolve),
          meta: {
            title: '诊改工作一览',
            requireAuth: true
          }
        },
        {
          path: '/zggzt',
          component: resolve => require(['../components/page/Workbench/Workbench.vue'], resolve),
          meta: {
            title: '诊改工作台',
            requireAuth: true
          }
        },
        {
          path: '/xtsz-grzx',
          component: resolve => require(['../components/page/grzx.vue'], resolve),
          meta: {
            title: '个人中心',
            requireAuth: true
          }
        },
        {
          path: '/message',
          component: resolve => require(['../components/page/messNotices.vue'], resolve),
          meta: {
            title: '消息通知',
            requireAuth: true
          }
        },
        {
          path: '/zdbg',
          component: resolve => require(['../components/page/swdt.vue'], resolve),
          meta: {
            title: '职业院校内部质量保证体系自我诊改报告',
            requireAuth: true,
            isshowSubTitle: false
          }
        },
        {
          path: '/zdbg_ls/:id',
          component: resolve => require(['../components/page/historyBG.vue'], resolve),
          meta: {
            title: '历史报告',
            requireAuth: true,
            isshowSubTitle: true
          }
        },
        // 发展中心
        {
          path: '/zgdsj-ztfx', // 发展中心
          component: resolve => require(['../components/page/load/load.vue'], resolve),
          meta: {
            title: '发展中心',
            requireAuth: true,
            isshowSubTitle: false
          }
        },
        // 主题分析
        {
          path: '/zyjszd', // 专业建设诊断,
          component: resolve => require(['../components/page/ztfx/zyjszd.vue'], resolve),
          meta: {
            title: '专业建设诊断',
            requireAuth: true
          }
        },
        {
          path: '/pyfazd', // 培养方案诊断,
          component: resolve => require(['../components/page/ztfx/pyfazd.vue'], resolve),
          meta: {
            title: '培养方案诊断',
            requireAuth: true
          }
        },
        {
          path: '/jxzlzd', // 教学质量诊断,
          component: resolve => require(['../components/page/ztfx/jxzlzd.vue'], resolve),
          meta: {
            title: '教学质量诊断',
            requireAuth: true
          }
        },
        {
          path: '/jxgczd', // 教学过程诊断,
          component: resolve => require(['../components/page/ztfx/jxgczd.vue'], resolve),
          meta: {
            title: '教学过程诊断',
            requireAuth: true
          }
        },
        {
          path: '/xscjzd', // 学生成绩诊断,
          component: resolve => require(['../components/page/ztfx/xscjzd.vue'], resolve),
          meta: {
            title: '学生成绩诊断',
            requireAuth: true
          }
        },
        {
          path: '/xsjyzd', // 学生就业诊断,
          component: resolve => require(['../components/page/ztfx/xsjyzd.vue'], resolve),
          meta: {
            title: '学生就业诊断',
            requireAuth: true
          }
        },
        {
          path: '/xszszd', // 学生招生诊断,
          component: resolve => require(['../components/page/ztfx/xszszd.vue'], resolve),
          meta: {
            title: '学生招生诊断',
            requireAuth: true
          }
        },
        // {
        //   path: '/zghxzb',
        //   component: resolve => require(['../components/page/zgcoreYW.vue'], resolve),
        //   meta: {
        //     title: '诊改核心指标一览表',
        //     requireAuth: true,
        //     isshowSubTitle: false
        //   }
        // },
        {
          path: '/zghxzb',
          component: resolve => require(['../components/page/zz_zgcore.vue'], resolve),
          meta: {
            title: '重点关注',
            requireAuth: true,
            isshowSubTitle: true
          }
        },
        {
          path: '/zgywzbk',
          component: resolve => require(['../components/page/zgcore.vue'], resolve),
          meta: {
            title: '诊改业务指标库',
            requireAuth: true
          }
        },
        {
          path: '/sjhx-grhx',
          component: resolve => require(['../components/page/zz_portrait/portraitCommon.vue'], resolve),
          meta: {
            title: '单体画像',
            isshowSubTitle: false,
            requireAuth: true
          },
          children: [
            {
              path: '/',
              component: resolve => require(['../components/page/zz_portrait/portraitMajor.vue'], resolve),
              meta: {
                title: '单体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            },
            {
              path: '/sjhx-grhx/student',
              component: resolve => require(['../components/page/zz_portrait/portraitPreson.vue'], resolve),
              meta: {
                title: '单体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            },
            {
              path: '/sjhx-grhx/teacher',
              component: resolve => require(['../components/page/zz_portrait/portraitTeach.vue'], resolve),
              meta: {
                title: '单体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            },
            {
              path: '/sjhx-grhx/lesson',
              component: resolve => require(['../components/page/zz_portrait/portraitLeason.vue'], resolve),
              meta: {
                title: '单体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            }
          ]

        },
        // {
        //   path: '/zgdsj-sjhx',
        //   component: resolve => require(['../components/page/batchprotrait/Professional.vue'], resolve),
        //   meta: {
        //     title: '诊改大数据-数据画像',
        //     requireAuth: true
        //   }
        // },
        {
          path: '/xxhx', // 学校画像
          component: resolve => require(['../components/page/HxPro/XxCommon.vue'], resolve),
          meta: {
            title: '数据画像',
            requireAuth: true
          },
          children: [
            {
              path: '/',
              component: resolve => require(['../components/page/batchprotrait/School.vue'], resolve),
              meta: {
                title: '学校画像-群体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            }
          ]
        },
        {
          path: '/xxhxNew',
          component: resolve => require(['../components/page/batchprotrait/new/School.vue'], resolve),
          meta: {
            title: '学校画像-群体画像',
            isshowSubTitle: false,
            requireAuth: true
          }
        },
        {
          path: '/zyhx', // 专业画像
          component: resolve => require(['../components/page/HxPro/ZyCommon.vue'], resolve),
          meta: {
            title: '数据画像',
            requireAuth: true
          },
          children: [
            {
              path: '/zyhx/dt',
              component: resolve => require(['../components/page/zz_portrait/portraitMajor.vue'], resolve),
              meta: {
                title: '专业画像-个人画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            },
            {
              path: '/',
              component: resolve => require(['../components/page/batchprotrait/Professional.vue'], resolve),
              meta: {
                title: '专业画像-群体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            }
          ]
        },
        {
          path: '/zyhx2', // 专业画像
          component: resolve => require(['../components/page/HxPro/ZyCommon.vue'], resolve),
          meta: {
            title: '数据画像',
            requireAuth: true
          },
          children: [
            {
              path: '/zyhx2/dt',
              component: resolve => require(['../components/page/zz_portrait/portraitMajor_jm.vue'], resolve),
              meta: {
                title: '专业画像-个人画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            },
            {
              path: '/',
              component: resolve => require(['../components/page/batchprotrait/Professional.vue'], resolve),
              meta: {
                title: '专业画像-群体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            }
          ]
        },
        {
          path: '/zyhxNew',
          component: resolve => require(['../components/page/batchprotrait/new/Professional.vue'], resolve),
          meta: {
            title: '专业画像-群体画像',
            isshowSubTitle: false,
            requireAuth: true
          }
        },
        {
          path: '/kchx', // 课程画像
          component: resolve => require(['../components/page/HxPro/KcCommon.vue'], resolve),
          meta: {
            title: '数据画像',
            requireAuth: true
          },
          children: [
            {
              path: '/kchx/dt',
              component: resolve => require(['../components/page/zz_portrait/portraitLeason.vue'], resolve),
              meta: {
                title: '课程画像-个人画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            },
            {
              path: '/',
              component: resolve => require(['../components/page/batchprotrait/Classprotrait.vue'], resolve),
              meta: {
                title: '课程画像-群体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            }
          ]
        },
        {
          path: '/kchxNew',
          component: resolve => require(['../components/page/batchprotrait/new/Classprotrait.vue'], resolve),
          meta: {
            title: '课程画像-群体画像',
            isshowSubTitle: false,
            requireAuth: true
          }
        },
        {
          path: '/jshx', // 教师画像
          component: resolve => require(['../components/page/HxPro/JsCommon.vue'], resolve),
          meta: {
            title: '数据画像',
            requireAuth: true
          },
          children: [
            {
              path: '/jshx/dt',
              component: resolve => require(['../components/page/zz_portrait/portraitTeach.vue'], resolve),
              meta: {
                title: '教师画像-个人画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            },
            {
              path: '/',
              component: resolve => require(['../components/page/batchprotrait/GroupPic.vue'], resolve),
              meta: {
                title: '教师画像-群体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            }
          ]
        },
        {
          path: '/xshx', // 学生画像
          component: resolve => require(['../components/page/HxPro/XsCommon.vue'], resolve),
          meta: {
            title: '数据画像',
            requireAuth: true
          },
          children: [
            {
              path: '/xshx/dt',
              component: resolve => require(['../components/page/zz_portrait/portraitPreson.vue'], resolve),
              meta: {
                title: '学生画像-个人画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            },
            {
              path: '/',
              component: resolve => require(['../components/page/batchprotrait/Student.vue'], resolve),
              meta: {
                title: '学生画像-群体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            }
          ]
        },
        {
          path: '/sjhx-qthx',
          component: resolve => require(['../components/page/batchprotrait/GroupCommon.vue'], resolve),
          meta: {
            title: '群体画像',
            requireAuth: true
          },
          children: [
            {
              path: '/',
              component: resolve => require(['../components/page/batchprotrait/School.vue'], resolve),
              meta: {
                title: '群体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            },
            {
              path: '/sjhx-qthx/pr',
              component: resolve => require(['../components/page/batchprotrait/Professional.vue'], resolve),
              meta: {
                title: '群体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            }, {
              path: '/sjhx-qthx/student',
              component: resolve => require(['../components/page/batchprotrait/Student.vue'], resolve),
              meta: {
                title: '群体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            },
            {
              path: '/sjhx-qthx/class',
              component: resolve => require(['../components/page/batchprotrait/Classprotrait.vue'], resolve),
              meta: {
                title: '群体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            },
            {
              path: '/sjhx-qthx/teacher',
              component: resolve => require(['../components/page/batchprotrait/GroupPic.vue'], resolve),
              meta: {
                title: '群体画像',
                isshowSubTitle: false,
                requireAuth: true
              }
            }
          ]
        },
        {
          path: '/xxkj',
          component: resolve => require(['../components/page/statistics/StudySpace.vue'], resolve),
          meta: {
            title: '学习空间',
            requireAuth: true
          }
        },
        {
          path: '/lmybk',
          component: resolve => require(['../components/page/statistics/LanMo.vue'], resolve),
          meta: {
            title: '蓝墨云班课',
            isshowSubTitle: false,
            requireAuth: true
          },
          children: [
            {
              name: 'lmybk-classes',
              path: '/lmybk/classes',
              component: resolve => require(['../components/page/statistics/classinfo.vue'], resolve),
              meta: {
                title: '蓝墨云班课-班级情况',
                isshowSubTitle: false,
                requireAuth: true
              }
            },
            {
              path: '/lmybk/student',
              component: resolve => require(['../components/page/statistics/studentinfo.vue'], resolve),
              meta: {
                title: '蓝墨云班课-学生情况',
                isshowSubTitle: false,
                requireAuth: true
              }
            }
          ]
        },
        {
          path: '/preview/:id',
          component: resolve => require(['../components/page/zgRepository/preview.vue'], resolve),
          meta: {
            title: '',
            requireAuth: true
          }
        }
        // {
        //   path: '/list1',
        //   component: resolve => require(['../components/page/zgRepository/file/list1.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list2',
        //   component: resolve => require(['../components/page/zgRepository/file/list2.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list3',
        //   component: resolve => require(['../components/page/zgRepository/file/list3.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list4',
        //   component: resolve => require(['../components/page/zgRepository/file/list4.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list5',
        //   component: resolve => require(['../components/page/zgRepository/file/list5.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list6',
        //   component: resolve => require(['../components/page/zgRepository/file/list6.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list7',
        //   component: resolve => require(['../components/page/zgRepository/file/list7.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list8',
        //   component: resolve => require(['../components/page/zgRepository/file/list8.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list9',
        //   component: resolve => require(['../components/page/zgRepository/file/list9.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list10',
        //   component: resolve => require(['../components/page/zgRepository/file/list10.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list11',
        //   component: resolve => require(['../components/page/zgRepository/file/list11.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list12',
        //   component: resolve => require(['../components/page/zgRepository/file/list12.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list13',
        //   component: resolve => require(['../components/page/zgRepository/file/list13.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list14',
        //   component: resolve => require(['../components/page/zgRepository/file/list14.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list15',
        //   component: resolve => require(['../components/page/zgRepository/file/list15.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // },
        // {
        //   path: '/list16',
        //   component: resolve => require(['../components/page/zgRepository/file/list16.vue'], resolve),
        //   meta: {
        //     title: '',
        //     requireAuth: true
        //   }
        // }
      ]
    }
  ]
})
router.afterEach(route => {
  try {
    document.getElementById('out-contetn').scrollTop = 0
  } catch (e) {
    console.log('无需理会的错误')
  }
})
let loginBYCOOKIE = function (to, from, next) {
  let username = Vue.prototype.doCookie.getCookie('name')
  let password = Vue.prototype.doCookie.getCookie('password')
  let data = {
    username: username,
    password: password
  }
  Vue.prototype.$ajax('post', Vue.prototype.HOST + '/tr/trLogin/web/loginByCookie', data, (res) => {
    if (res.success) {
      if (res.data.user.mobile === '' || res.data.user.mobile === null) {
        // Vue.loginstate = 2
        // 如果没有绑定手机号，跳转到登录页
        next({path: '/login'})
      } else {
        if (!(res.data.userType === 3 || res.data.userType === 4)) {
          alert('非法登陆')
          return
        }
        // 跳转到首页
        store.commit('changeLogin', {
          login: 1,
          name: res.data.user.name,
          roleName: res.data.user.positionName
        })
        setTimeout(() => {
          next({path: to.fullPath})
        }, 110)
      }
    } else {
      next({path: '/login'})
      // Vue.$message({
      //   type: 'error',
      //   message: res.msg
      // })
    }
  })
}
router.beforeEach(function (to, from, next) {
  if (store.state.isLogin === 1) {
    next()
  } else {
    if (to.path !== '/login') {
      axios({
        method: 'post',
        url: Vue.prototype.HOST + '/tr/trUser/web/checkLogin'
      }).then((res) => {
        if (res.data.success) {
          if (res.data.obj) {
            store.commit('changeLogin', {
              login: 1,
              name: res.data.obj.name,
              roleName: res.data.obj.positionName,
              roleId: res.data.obj.roleId
            })
            document.title = to.meta.title
            next()
          } else {
          // 判断是否记住密码
            if (to.path !== '/login') {
              loginBYCOOKIE(to, from, next)
            }

            if (to.path === '/login') {
              next()
            } else {
              next({path: '/login'})
            }
          }
        } else {
          if (to.path === '/login') {
            next()
          } else {
          // next();
            next({path: '/login'})
          }
        }
      }).catch((res) => {
        loginBYCOOKIE(to, from, next)
        // next()
      })
    } else {
      next()
    }
  }
})

export default router
