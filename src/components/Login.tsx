import {Button, Form, FormProps, Input} from "antd";
import {useEffect, useState} from "react";
import {fetchToken} from "../api/fetchToken.ts";
import {useQuery} from "@tanstack/react-query";
import {tokenAtom} from "../atomStore.ts";
import {useSetAtom} from "jotai/react";
import {LockOutlined, UserOutlined} from '@ant-design/icons';

type FieldType = {
    username: string;
    password: string;
};

const Login = () => {
    const setToken = useSetAtom(tokenAtom);
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [form] = Form.useForm();

    const {data: token, refetch} = useQuery({
        queryKey: ['fetchToken'],
        queryFn: () => fetchToken(identifier, password),
        enabled: false,
        retry: false,
    })


    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        setIdentifier(values.username)
        setPassword(values.password)
        setTimeout(() => {
            refetch();
        }, 0);
    };

    useEffect(() => {
        if (token) {
            setToken(token);
        }
    }, [token])

    return (
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item shouldUpdate
                style={{marginInlineEnd: 0}}
            >
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            !form.isFieldsTouched(true) ||
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                        }
                    >
                        Log in
                    </Button>
                )}
            </Form.Item>
        </Form>
    )
}

export default Login;