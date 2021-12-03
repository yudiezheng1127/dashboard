// eslint-disable
module.exports = {
    com: {
        del: '删除',
        delX: '删除{obj}',
        create: '添加',
        createX: '添加{obj}',
        edit: '编辑',
        editX: '编辑{obj}',
        submit: '提交',
        cancel: '取消',
        establish: '创建',
        enable: '启用',
        deactivate: '停用',
        nextStep: '下一步',
        lastStep: '上一步',
        haveInHand: '进行中',
        pending: '待进行',
        completed: '已完成',
        reset: '重置',
        notEffective: '未生效',
        submitAndEffect: '提交并生效',
        cancellation: '注销',
        query: '查询',
        see: '查看',
        seeX: '查看{obj}',
        save: '保存',
        operation: '操作',
        name: '名称',
        nameX: '{obj}名称',
        state: '状态',
        desc: '描述',
        detail: '详情',
        tips: '提示',
        informationTips: '信息提示',
        confirmDelX: '是否删除{obj}',
        confirmDel: '是否删除',
        confirmX: '确认{obj}',
        maxValueX: '最大值为{num}',
        minValueX: '最小值为{num}',
        ruleExplain: '规则说明',
        localSave: '本地保存',
        password: '密码',
        userName: '用户名',
        sysAdmin: '系统管理员',
        ordinaryUser: '租户管理员',
        sysAdminView: '系统视图',
        configureExportUser: '配置导出管理员',
        productView: '租户视图',
        currentVersion: '当前版本号 ',

        tipError: '错误',
        tipNetworkFail: '网络异常',
        tipCancelDel: '取消删除',
        tipEstablishSucc: '创建成功！',
        tipDelSucc: '删除成功!',
        tipAddSucc: '添加成功!',
        tipCancel: '取消操作',
        tipSubmitSucc: '提交成功!',
        tipOperationSucc: '操作成功',
        tipAddSuccX: '{obj}添加成功!',
        tipEditSucc: '修改成功',
        tipEditSuccX: '{obj}修改成功!',
        tipEnterX: '请输入{obj}',
        tipRequiredX: '请输入{obj}（必填）',
        tipUploadX: '请上传{obj}',
        tipLengthX: '长度应大于{len}',
        tipNameRule: '仅允许输入数字、大小写字母、点、下划线、中划线',
        tipSelectX: '请选择{obj}',
        tipAlreadyExistsX: '{obj}已存在',
        tipFormatError: '格式错误',
        tipNotEmpty: '输入不能为空',
        tipNotEmptyX: '{obj}不能为空',
        tipValidateError: '请检查参数填写是否规范!',
        tipMustStartWithX: '{obj}必须以 / 开头'
    },
    nav: {
        Backend: '后端',
        InstancePool: '实例池',
        BFEInstancePool: 'BFE实例池',
        SubCluster: '子集群',
        Cluster: '集群',
        BFECluster: 'BFE集群',
        SubClusterLB: '子集群负载',
        Route: '路由',
        Domain: '域名',
        ForwardRule: '转发规则',
        ProductInfo: '产品线信息',
        ProductUser: '产品线用户',
        ProductManage: '产品线管理',
        UserManage: '用户管理',
        CertificateManage: '证书管理'
    },
    instancePool: {
        name: '实例池',
        list: '实例列表',
        machineName: '机器名',
        port: '端口',
        weight: '权重',
        portName: '端口名',
        portValue: '端口值',

        tipWeightRang: '实例权重错误, 范围1～100',
        tipPortRang: 'Default端口错误, 范围1～65535'
    },
    login: {
        userLogin: '用户登录',
        verificationCode: '验证码',
        changeOne: '换一张',
        name: '登录',

        tipConfirmLogout: '确认注销？',
        tipCodeError: '验证码输入错误',
        tipNotLogin: '当前未登录或者登录已过期请前往登录',
        tipUrlIllegal: '当前url非法',
        tipSelectProductLine: '请先选择产品线',
        tip404: '啊嘞，找不到路了~'
    },
    user: {
        relationX: '关联{obj}',
        changePassword: '修改密码',
        disassociate: '解除关联',
        name: '用户',
        role: '角色',
        confirmPassword: '确认密码',
        oldPassword: '原密码',
        newPassword: '新密码',
        ordinaryUser: '用户',
        innerUser: 'Token',

        tipInnerUserDel: 'Token 是内部程序访问APIServer的鉴权凭证，请按需创建，谨慎删除',
        tipDisassociate: '是否确认解除{obj}关联？',
        tipDisassociateSucc: '解除关联成功！',
        tipAssociationSucc: '关联成功',
        tipNameRule: '用户名仅允许输入数字、大小写字母、点、下划线、中划线',
        tipConfirmPasswordRule: '请再次确认密码',
        tipPasswordRule: '密码必须包含字母，数字和特殊字符',
        tipConfirmError: '两次密码输入不一致，请重新输入',
        tipPasswordModified: '当前用户密码已修改请重新登录',
        tipUserDel: '当前用户已被删除请重新登录'
    },
    route: {
        name: '转发规则',
        config: '转发规则配置',
        basicRule: '基础规则',
        advanceRule: '高级规则',
        default: '默认规则（必须）',
        hostName: '主机名',
        path: '路径',
        targetCluster: '目标集群',
        expression: '匹配条件',
        logicalConnector: '逻辑连接符',

        tipBasicRule: '请填写至少一项匹配条件(host/path)',
        tipExpression: 'false为大小写敏感',
        tipPathRule:
            '可输入多个path,以逗号分隔，每个path以/开始, 例如：/pa，/pa/*。不输入或path为*表示匹配任意path',
        tipHostNameRule:
            '可输入多个host,用逗号分隔。例如：www.a.com，*.b.com。不输入或者host为*表示匹配任意host',
        tipDel: '确定删除 ? 提交并生效后删除成功',
        tipAdvanceMate: '由高级规则匹配',
        tipHitRule: '命中此规则的请求转发至指定的集群',
        tipHitAdvanceRule: '命中此规则的请求继续进行高级规则的匹配以确定目标集群',
        tipTargetCluster: '指定目标集群',
        tipDefaultRule: '请设置默认规则得目标集群',
        tipBasic: '基于URL，满足大部分场景',
        tipAdvance: '基于复杂条件，针对复杂场景',
        tipDefault: '未命中任何规则时使用默认规则',
        tipExplain: '确定请求被转发到哪个集群，匹配顺序：1.基础规则；2.高级规则；3.默认规则。',
        tipExplain2: '编辑完成后，请点击"提交并生效"以使变更生效',
        tipBasicExplain: '基础规则先对Host进行匹配，Host符合条件后再对Path进行匹配来确定是否命中',
        tipAdvanceExplain: '高级规则按从上到下的顺序逐条进行匹配，可上下拖动规则以调整顺序',
        tipDefaultExplain: '必须设置；未能命中其他规则时转发到默认规则指定的目标集群'
    },
    cert: {
        name: '证书',
        expiredDate: '过期时间',
        certFile: '证书文件',
        file: '文件',
        selectFile: '选择文件',
        privateKeyFile: '私钥文件',
        globalDefaultCert: '全局缺省证书',

        tipCertNameRule: '证书名称不可以包含特殊字符，请重新输入',
        tipSumitCertFile: '是否将证书',
        tipCofigDefault: '设置为默认'
    },
    cluster: {
        name: '集群',
        BFE: 'BFE集群',
        clusterDescription: '集群说明',
        maxIdleConnPerRs: '单个后端最大空闲连接数',
        hashStrategy: '哈希策略',
        hashHeader: '哈希头部',
        stickySessions: '会话保持级别',
        reqWriteBufferSize: '请求写缓存大小（Byte）',
        reqWriteBuffer: '请求写缓存大小',
        cancelOnClientClose: '后端连接随客户端连接关闭 ',
        instanceSessionPersistence: '实例级会话保持',
        subClusterSessionPersistence: '子集群级会话保持',
        basicConfig: '基础配置',
        timeoutAndRetransmission: '超时和重传',
        passiveHealthCheck: '被动健康检查',
        review: '复查&检查',
        schedulerConfig: '调度配置',
        healthCheckInterval: '健康检查间隔(ms)',
        healthCheckFailnum: '故障阈值（触发设置实例为不可用，启动被动健康检查）',
        faultThreshold: '故障阈值',
        healthCheckHost: '健康检查Host',
        healthCheckUri: '健康检查Uri',
        healthCheckStatuscode: '健康检查期望的状态码',
        proportion: '比重',
        manual: '手动模式',
        subClusterPool: '子集群池',
        subClusterMounted: '已挂载子集群',
        mounted: '已挂载',
        available: '可用',
        mount: '挂载',
        unmount: '移除',
        timeoutReadClientAgain: '客户端连接空闲超时(ms) ',
        timeoutReadbodyClient: '读客户端请求Body超时(ms)',
        timeoutConnServ: '连接后端超时(ms) ',
        timeoutResHeader: '读后端响应头部超时(ms) ',
        timeoutWriteClient: '写响应超时(ms)',
        maxRetryInSubcluster: '同子集群重试次数',
        maxRetryCrossSubcluster: '跨子集群重试次数',
        subClusterCapacity: '子集群容量设置',
        subClusterCapacityRule: '子集群容量必须为非负数',
        timeInterval: '时间间隔(ms)',
        timeout: '超时时间(ms)',
        reqUri: '请求uri',

        tipSubClusterMounted: '请至少挂载一个子集群',
        tipBfeClusterNotExist: 'BFE集群不存在, 请先添加BFE集群',
        tipAtLeastoneInstance: '请至少添加一项实例',
        tipSubClusterCapacityTotalRule: 'BFE集群下的子集群比重总和必须为100',
        tipValueNonnegativeInteger: '值必须是非负整数',
        tipsValueMax: '输入值过大',
        tipClusterNameRule:
            '集群名称只能包含字母、数字以及-杠、.点、$符、+加号、~波浪线且长度大于1',
        tipNameRule: '名称只能包含字母、数字以及短横线-、下划线、点，且长度大于1小于255'
    },
    subCluster: {
        name: '子集群',

        tipNameRule: '集群名称只能包含字母、数字以及短横线-、下划线、点，且长度大于1'
    },
    gslb: {
        name: '内网调度配置',
        type: '调度方式',
        config: '配置'
    },
    bfeClusters: {
        clusterInstancePool: 'BFE实例池'
    },
    domain: {
        name: '域名'
    },
    product: {
        productLine: '产品线',
        name: '产品线名称',
        list: '产品线列表',
        introduction: '产品线介绍',
        contactPersonEmail: '接口人邮箱',
        teamMailGroup: '团队邮件组',
        dutyTelephone: '值班电话',
        delMessage:
            '<h3>请确保：所有的域名，都已经删除</h3>' + '<p> 请查看左侧菜单栏【域名管理】</p>',
        welcome: '欢迎您',
        promptLanguage: '您可以切到租户视图去管理产品线内的配置',
        productLineManager: '产品线管理员',
        productTips: '你当前操纵的是选取的产品线',
        contacts: '联系人',

        tipNameRule: '必填，仅字母、数字和下划线组合',
        tipsPersonRule: '多个接口人之间用 ；分割',
        tipsIntroductionRule: '请填写产品线简介',
        tipMailNotEmpty: '请填写团队邮件组，多个邮件地址用 ；分割',
        tipPhoneNotEmpty: '请填写值班手机，多个号码间用 ；分割'
    }
};
