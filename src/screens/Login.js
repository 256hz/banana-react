import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return <div>
    <div className="title large-text">
      LOG IN.<br />
      <br />
    </div>
    <Form>
      <Form.Field>
        <label className='form-label'>EMAIL ADDRESS</label>
        <input className='form-input' placeholder='you@example.com' />
      </Form.Field>
      <Form.Field>
        <label className='form-label'>PASSWORD</label>
        <input className='form-input' placeholder='' type='password'/>
      </Form.Field>
      <div className="center">
        <Button type='submit' className='button-nav'>
          <NavLink to="/home">
            <div className="button-text">LOGIN</div>
          </NavLink>
        </Button>
      </div>
    </Form>
    </div>
}

export default Login