/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React from 'react';
import { treeData } from './data/data';
import { Button, Checkbox, Form, Input, TreeSelect } from 'antd';

const { SHOW_PARENT } = TreeSelect;

function App() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">
      <Form
        name="basic"
        style={{ width: '100%' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3>
          Please enter your name and pick the Sectors you are currently involved
          in.
        </h3>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Please input your name" />
        </Form.Item>
        <Form.Item
          name="Sectors"
          rules={[{ required: true, message: 'Need to be checked' }]}
        >
          <TreeSelect
            placeholder="Please select"
            treeData={treeData}
            allowClear
            treeCheckable={true}
            showCheckedStrategy={SHOW_PARENT}
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
