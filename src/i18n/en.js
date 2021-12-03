// eslint-disable
module.exports = {
    com: {
        del: 'Delete',
        delX: 'Delete {obj}',
        create: 'Add',
        createX: 'Add {obj}',
        edit: 'Edit',
        editX: 'Edit {obj}',
        submit: 'Submit',
        cancel: 'Cancel',
        establish: 'Create',
        enable: 'Enable',
        deactivate: 'Disable',
        nextStep: 'Next',
        lastStep: 'Previous',
        haveInHand: 'Processing',
        pending: 'Pending',
        completed: 'Finished',
        reset: 'Reset',
        notEffective: 'Not Effective',
        submitAndEffect: 'Submit and Take Effect',
        cancellation: 'Logout',
        query: ' to search',
        see: 'View',
        seeX: 'View {obj}',
        save: 'Save',
        operation: 'Operation',
        name: 'Name',
        nameX: '{obj} Name',
        state: 'State',
        desc: 'Description',
        detail: 'Detail',
        tips: 'Tips',
        informationTips: 'Tips',
        confirmDelX: 'Confirm to delete {obj}',
        confirmDel: 'Confirm to delete',
        confirmX: 'Confirm {obj}',
        setupX: 'Please setup {obj}',
        maxValueX: 'Maximum value is {num}',
        minValueX: 'Minimum value is {num}',
        ruleExplain: 'Rule Explaination',
        localSave: 'Save at local',
        password: 'Password',
        userName: 'Username',
        sysAdmin: 'System Admin',
        ordinaryUser: 'Tenant Admin',
        sysAdminView: 'System View',
        configureExportUser: 'Configure Export Admin',
        productView: 'Tenant View',
        currentVersion: 'Current Version Number ',

        tipError: 'Error',
        tipNetworkFail: 'Network Error',
        tipCancelDel: 'Cancel the delete',
        tipEstablishSucc: 'Create Successfully！',
        tipDelSucc: 'Delete Successfully!',
        tipAddSucc: 'Add Successfully!',
        tipCancel: 'Cancel',
        tipSubmitSucc: 'Submit Successfully!',
        tipOperationSucc: 'Operation Successfully',
        tipAddSuccX: '{obj} add successfully!',
        tipEditSucc: 'Edit Successfully',
        tipEditSuccX: '{obj} edit successfully!',
        tipEnterX: 'Please input {obj}',
        tipRequiredX: 'Please input {obj}(required)',
        tipUploadX: 'Please upload {obj}',
        tipLengthX: 'Should be longer than {len}',
        tipNameRule: 'Only numbers, letters, dot, under dash, underline are allowed for Name',
        tipSelectX: 'Please select {obj}',
        tipAlreadyExistsX: '{obj} already exist',
        tipFormatError: 'Wrong format',
        tipNotEmpty: 'Empty not allowed',
        tipNotEmptyX: '{obj} should not be empty',
        tipValidateError: 'Please check if all parameters are input correctly!',
        tipMustStartWithX: '{obj} should be started with / '
    },
    nav: {
        Backend: 'Backend',
        InstancePool: 'Instance Pool',
        BFEInstancePool: 'BFE Instance Pool',
        SubCluster: 'SubCluster',
        Cluster: 'Cluster',
        BFECluster: 'BFE Cluster',
        SubClusterLB: 'SubCluster Balancing',
        Route: 'Route',
        Domain: 'Domain Name',
        ForwardRule: 'Forward Rule',
        ProductInfo: 'Product Info',
        ProductUser: 'Product User',
        ProductManage: 'Product Manage',
        UserManage: 'User Manage',
        CertificateManage: 'Certificate Manage'
    },
    instancePool: {
        name: 'Instance Pool',
        list: 'Instance List',
        machineName: 'Instance Name',
        port: 'Port',
        weight: 'Weight',
        portName: 'Port Name',
        protValue: 'Port Number',

        tipWeightRang: 'Wrong weight, should be between 1 and 100',
        tipPortRang: 'Wrong port, shoudl be between 1 and 65535'
    },
    login: {
        userLogin: 'User Login',
        verificationCode: 'Verification Code',
        changeOne: 'Change',
        name: 'Login',

        tipCodeError: 'Wrong verification code',
        tipNotLogin: 'Please login first',
        tipUrlIllegal: 'URL not exist',
        tipSelectProductLine: 'Please select a product first',
        tip404: 'Page not found'
    },
    user: {
        relationX: 'Associate {obj}',
        changePassword: 'Change Password',
        disassociate: 'Disassociate',
        name: 'User',
        role: 'Role',
        confirmPassword: 'Confirm Password',
        oldPassword: 'Old Password',
        newPassword: 'New Password',
        ordinaryUser: 'User',
        innerUser: 'Token',

        tipInnerUserDel:
            'Token is used to authenticate internal program when calling API.' +
            ' Only create token when need. Delete with caution.',
        tipDisassociate: 'Confirm to {obj} disassociate?',
        tipDisassociateSucc: 'Successfully disassociated！',
        tipAssociationSucc: 'Successfully associated',
        tipNameRule: 'Only numbers, letters, dot, under dash, underline are allowed for user name',
        tipConfirmPasswordRule: 'Please confirm password',
        tipPasswordRule: 'Password should contain letter,number and special character',
        tipConfirmError: 'Password entered is inconsist. Please input again',
        tipPasswordModified: 'Passwrod modified. Please login again',
        tipUserDel: 'Current user deleted.'
    },
    route: {
        name: 'Rules',
        config: 'Rule Config',
        basicRule: 'Basic Rules',
        advanceRule: 'Advanced Rules',
        default: 'Default Rules (Required)',
        hostName: 'hostname',
        path: 'path',
        targetCluster: 'Destination Cluster',
        expression: 'Conditions',
        logicalConnector: 'Logical connector',

        tipExpression: 'False is case sensitive',
        tipBasicRule: 'Please input at lease one type of Match Conditions(host/path)',
        tipPathRule:
            'Input one or multiple path, seperated by a comma. Each path started with / .' +
            ' Examples：/pa，/pa/*  .  Empty or * means it can match any path value.',
        tipHostNameRule:
            'Input one or multiple host, seperated by a comma. Examples：www.a.com，*.b.com .' +
            ' Empty or * means it can match any path value.',
        tipDel: 'Confirm to delelte ? Will be deleted after click  "Submit and Take Effect"  ',
        tipAdvanceMate: 'Advanced Mode',
        tipHitRule:
            'Request that his this rule will be forwarded to the specified destination cluster',
        tipHitAdvanceRule:
            'Request that his this rule will continue matching the advanced rule to determine the destination cluster',
        tipTargetCluster: 'Specify a destination cluster',
        tipDefaultRule: 'Please specify the destination cluster of Default Rule',
        tipBasic: 'Based on URL, can support most scenarios',
        tipAdvance: 'Based on Condition Expression, support complicated scenarios',
        tipDefault: 'Default Rule will be used if request not hit any other rules',
        tipExplain:
            'Determine destination cluster for a request, matching order：1.Basic Rules；2.Aavanced Rules；3.Default Rule。',
        tipExplain2: 'When finish modifying, please click "Submit and Take Effect" to take effect',
        tipBasicExplain:
            'Basic Rules will be searched with host conditions,' +
            ' then searched with path conditions among rules matching host conditions to determine if a rule is hit',
        tipAdvanceExplain:
            'Advanced rules are searched from up to down. Drag rules to adjust the order',
        tipDefaultExplain:
            'Required.  If request not hit any other rules, it will be forwarded to destination cluster of Default Rule'
    },
    cert: {
        name: 'Certificates',
        expiredDate: 'Expiration Date',
        certFile: 'Certificate File',
        file: 'File',
        selectFile: 'Select File',
        privateKeyFile: 'PrivateKey File',
        globalDefaultCert: 'Global Default Certificate',

        tipCertNameRule: 'Special characters are not allowed in certificate file name',
        tipSumitCertFile: 'Config the certificate ',
        tipCofigDefault: ' as Global Default Certificate'
    },
    cluster: {
        name: 'Cluster',
        BFE: 'BFE Cluster',
        clusterDescription: 'Description',
        maxIdleConnPerRs: 'Max idle connections per backend instance',
        hashStrategy: 'Hash Strategy',
        hashHeader: 'Hash Header',
        stickySessions: 'Session Sticky Level',
        reqWriteBufferSize: 'Request Write Buffer Size (Byte)',
        reqWriteBuffer: 'Request Write Buffer Size',
        cancelOnClientClose: 'Close Backend Connection when Client Connection close',
        instanceSessionPersistence: 'Instance',
        subClusterSessionPersistence: 'Sub-Cluster',
        basicConfig: 'Basic Config',
        timeoutAndRetransmission: 'Timeout and Retransmission',
        passiveHealthCheck: 'Passive Healthcheck',
        review: 'Review',
        schedulerConfig: 'Sub-Cluster Load Balancing',
        healthCheckInterval: 'Heachcheck interval(ms)',
        healthCheckFailnum:
            'Failure Threshold (Triggers instance unavailable and initiate passive healthcheck)',
        faultThreshold: 'Failure Threshold',
        healthCheckHost: 'Host',
        healthCheckUri: 'Uri',
        healthCheckStatuscode: 'Expected Status Code',
        proportion: 'Weight',
        manual: 'Manual Mode',
        subClusterPool: 'Sub-Cluster List',
        subClusterMounted: 'Sub-Clusters mounted',
        mounted: 'Mounted',
        available: 'Available',
        mount: 'Mount',
        unmount: 'Unmount',
        timeoutReadClientAgain: 'Timeout for client connection idle(ms) ',
        timeoutReadbodyClient: 'Timeout for read client request body(ms)',
        timeoutConnServ: 'Timeout for connect backend(ms) ',
        timeoutResHeader: 'Timeout for read backend response header(ms) ',
        timeoutWriteClient: 'Timeout for write response to client(ms)',
        maxRetryInSubcluster: 'Retry times within Sub-Cluster',
        maxRetryCrossSubcluster: 'Retry times cross Sub-Cluster',
        subClusterCapacity: 'Sub-Cluster Capacity',
        subClusterCapacityRule: 'Capacity should be >=0',
        timeInterval: 'Interval(ms)',
        timeout: 'Timeout(ms)',
        reqUri: 'Request Uri',

        tipSubClusterMounted: 'Please mount at least one Sub-Cluster',
        tipBfeClusterNotExist: 'BFE Cluster not exist, please config BFE cluster first',
        tipAtLeastoneInstance: 'Please add at least one instance',
        tipSubClusterCapacityTotalRule:
            'Sum weight of all sub-cluster should be 100 for each BFE Cluster',
        tipValueNonnegativeInteger: 'Value should be >=0',
        tipsValueMax: 'Input value too big',
        tipClusterNameRule: 'Cluster Name can includes characters, numbers, dash, dot, $, +, ~',
        tipNameRule:
            'Name can includes characters, numbers, dash, underline, dot, and length between 1 and 255'
    },
    subCluster: {
        name: 'SubCluster',

        tipNameRule: 'Sub-Cluster Name can includes characters, numbers, dash, underline, dot'
    },
    gslb: {
        name: 'Sub-Cluster Load Balancing',
        type: 'Method',
        config: 'Config'
    },
    bfeClusters: {
        clusterInstancePool: 'BFE Instance Pool'
    },
    domain: {
        name: 'Domain Name'
    },
    product: {
        productLine: 'Product',
        name: 'Product Name',
        list: 'List of Product',
        introduction: 'Introduction',
        contactPersonEmail: 'Contact Emails',
        teamMailGroup: "Team's Emails",
        dutyTelephone: 'Duty Phones',
        delMessage:
            '<h3>Please confirm: All hostname are deleted</h3>' +
            '<p> Check Hostname Management on the manual on the left</p>',
        welcome: 'Welcome',
        promptLanguage: 'To manage configurations in the Product, switch to Tenant View.',
        productLineManager: 'Product Administrator',
        productTips: 'You are managing the Product selected',
        contacts: 'Contacts',

        tipNameRule: 'Required, can includes characters, numbers and underline',
        tipsPersonRule: 'Seperate multiple contacts by ;',
        tipsIntroductionRule: 'Input product introduction',
        tipMailNotEmpty: "Input team's email address. Seperate multiple email by ;",
        tipPhoneNotEmpty: 'Input duty phone number. Seperate multiple phone number by ;'
    }
};
