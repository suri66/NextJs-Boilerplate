import { LockClosedIcon } from '@heroicons/react/solid'
import { Component } from 'react';
import Link from 'next/link'

import { Text, Button } from 'components/common/Forms';

class Login extends Component {
    render() {
        return(
            <form method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="form-wrapper">
                        <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <Text name="email" id="email" type="email" placeholder="Email" />
                        </div>
                        <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <Text name="password" type="password" placeholder="Password" className="input-control-end" />
                        </div>
                    </div>

                    <div className="center-wrapper">
                        <div className="flex items-center">
                        &nbsp;
                        </div>

                        <div className="text-sm">
                        <Link href="/">
                            <a>
                                Forgot your password?
                            </a>
                        </Link>
                        </div>
                    </div>

                    <div>
                        <Button type="submit">
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            <svg className="button-loading" viewBox="0 0 24 24" />
                        </span>
                        Sign in
                        </Button>
                    </div>
                    </form>
                
        )
    }
}

export default Login;