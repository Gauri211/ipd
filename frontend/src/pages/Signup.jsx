import React from 'react'
import {Button, Form, Input, Typography, Select, InputNumber} from 'antd'
import './Signup.css'

const Signup = () => {

    const onChange = (value) => {
        console.log('changed', value);
    };

  return (
    <div className='appBg'>
        <div className='formBg'>
            <Form className='loginForm'>
                <Typography className='heading'>SIGN UP</Typography>
                <Typography className='label'>Name</Typography>
                <Form.Item name={"Username"}>
                    <Input className='input'/>
                </Form.Item>
                <Typography className='label'>Email ID</Typography>
                <Form.Item name={"Email"}>
                    <Input className='input'/>
                </Form.Item>
                <Typography className='label'>Password</Typography>
                <Form.Item name={"Password"}>
                    <Input className='input'/>
                </Form.Item>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                    <InputNumber className='input' style={{width: 60}} min={1} max={100} onChange={onChange} />
                    <Select
                        className='input'
                        defaultValue=""
                        style={{ width: 220, backgroundColor: '#3b3736' }}
                        options={[
                            { value: 'Male', label: 'Male' },
                            { value: 'Female', label: 'Female' },
                        ]}
                    />
                </div>
                {/* <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography className='label'>Age</Typography>
                        <InputNumber className='input' style={{width: 60}} min={1} max={100} onChange={onChange} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography className='label'>Gender</Typography>
                        <Select
                            className='input'
                            defaultValue=""
                            style={{ width: 220 }}
                            options={[
                                { value: 'Male', label: 'Male' },
                                { value: 'Female', label: 'Female' },
                            ]}
                        />
                    </div>
                </div> */}
                <Typography className='text' style={{marginTop: '5%', textAlign: 'center'}}>I've read and agreed to Term's and Conditions</Typography>
                <Button className='button1'>REGISTER</Button>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                    <Typography className='text' style={{marginRight: '15px'}}>Already a user?</Typography>
                    <Typography className='text' style={{position: 'relative'}}>Login <span style={{ position: 'absolute', bottom: '-2px', left: 0, width: '100%', borderBottom: '1px solid', paddingBottom: '2px' }}></span></Typography>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default Signup