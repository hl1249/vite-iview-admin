import { h, defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        let count = ref(0)

        const clickFn = () => {
            count.value += 1
        }

        const gap = [0, 50]

        const rotue_list = [
            {
                path: '/',
                name: 'home',
                title: '首页'
            },
            {
                path: '/jsx/index',
                name: 'jsx',
                title: 'jsx模版'
            },
            {
                path: '/multilevel/level2',
                name: 'level2',
                title: '路由嵌套'
            }
        ]

        let show = ref(true)
        const changeShow = () => {
            show.value = !show.value
        }
        return () => (
            <div>
                <Typography >
                    <Space wrap direction="vertical" size={gap}>
                        <Space direction="vertical">
                            <Title level={4}>组件渲染</Title>
                            <Space>
                                <Button type="info">Info</Button>
                                <Button type="success">Success</Button>
                                <Button type="warning">Warning</Button>
                                <Button type="error">Error</Button>
                            </Space>
                        </Space>

                        <Space >
                            <Space direction="vertical" >
                                <Title level={4}>click事件绑定/值渲染</Title>
                                <Button onclick={clickFn} type="info">修改的值:{count.value}</Button>
                            </Space>
                        </Space>

                        <Space >
                            <Space direction="vertical" >
                                <Title level={4}>for循环</Title>
                                <Space>
                                    <Breadcrumb>
                                        {
                                            rotue_list.map((item) => (
                                                <BreadcrumbItem to={{ name: item.name }}>{item.title}</BreadcrumbItem>
                                            ))
                                        }
                                    </Breadcrumb>
                                </Space>
                            </Space>
                        </Space>

                        <Space >
                            <Space direction="vertical" >
                                <Title level={4}>if判断{show.value}</Title>
                                <Space direction="vertical">
                                    {show.value ? <Alert type="success">show == true 出现</Alert> : <Alert type="error">show == false 出现</Alert>}
                                    <Button onclick={changeShow} type="info">show:{show.value.toString()}</Button>
                                </Space>
                            </Space>
                        </Space>

                        <Space direction="vertical" >
                            <Title level={4}>插槽使用</Title>

                            <Card v-slots={{
                                title: () => <Title level={4}>卡片标题</Title>,
                            }}>
                                <div>卡片内容</div>
                            </Card>
                        </Space>
                    </Space>


                </Typography>

            </div >

        );
    },
});