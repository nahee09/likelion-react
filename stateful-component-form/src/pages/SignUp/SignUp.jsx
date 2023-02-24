<<<<<<< HEAD
import { useState } from 'react';
import { BaseLayout, FormInput, Button } from '@/components';
import classes from './SignUp.module.scss';
=======
import { useRef } from 'react';
import { BaseLayout, FormInput, Button } from '@/components';
import classes from './SignUp.module.scss';

/* Init --------------------------------------------------------------------- */
const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};
>>>>>>> e3dabfc180839a4b015ec9f64f1c223a8d7cde27

/* Component ---------------------------------------------------------------- */

export default function SignUp() {
<<<<<<< HEAD
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleReset = (e) => {
    e.preventDefault();

    console.log('reset');
    setFormState(initialFormState);
=======
  const formStateRef = useRef(initialFormState);

  const handleReset = (e) => {
    e.preventDefault();
    console.log('reset');
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
    // console.log(formStateRef.current);
>>>>>>> e3dabfc180839a4b015ec9f64f1c223a8d7cde27
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD

=======
>>>>>>> e3dabfc180839a4b015ec9f64f1c223a8d7cde27
    console.log('회원가입 시도 → Firebase Authentication');
  };

  return (
    <BaseLayout className={classes.SignUp}>
      <h2>회원가입 페이지</h2>
      <form
        className={classes.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <FormInput name="name" label="이름" onChange={handleChangeInput} />

        <FormInput
<<<<<<< HEAD
          label="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormInput
          type="email"
          label="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          type="password"
          label="패스워드"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormInput
          type="password"
          label="패스워드 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
=======
          name="email"
          type="email"
          label="이메일"
          onChange={handleChangeInput}
        />

        <FormInput
          name="password"
          type="password"
          label="패스워드"
          onChange={handleChangeInput}
        />

        <FormInput
          name="passwordConfirm"
          type="password"
          label="패스워드 확인"
          onChange={handleChangeInput}
>>>>>>> e3dabfc180839a4b015ec9f64f1c223a8d7cde27
        />

        <div className={classes.group}>
          <Button type="submit">회원가입</Button>
          <Button secondary type="reset">
            초기화
          </Button>
        </div>
      </form>
    </BaseLayout>
  );
}
