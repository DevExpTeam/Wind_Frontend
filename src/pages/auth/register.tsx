import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  loginAsync,
  registerAsync,
  selectAuth
} from '../../store/slices/authSlice';
import styles from './auth.module.scss';
import Logo from '../../assets/images/title.png';
import BackgroundImage from '../../assets/images/background.jpg';
import { checkPasswordValidate } from '../../utils/funtions';
import { toast } from 'react-toastify';

export function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { error } = useAppSelector(selectAuth);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const passwordConf = event.currentTarget.passwordConf.value;

    if (!checkPasswordValidate(password)) {
      toast.error(
        'Invalid password! Password must contain uppercase letter, lowercase letter, special character and number!'
      );
      return;
    }

    setLoading(true);

    dispatch(registerAsync({ email, password, passwordConf }))
      .unwrap()
      .then(() => {
        navigate('/auth/login');
        window.location.reload();
        // dispatch(loginAsync({ email, password }))
        //   .unwrap()
        //   .then(() => {
        //     setLoading(true);
        //     navigate('/');
        //     window.location.reload();
        //   })
        //   .catch(() => {
        //     setLoading(false);
        //   });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <main
        className={styles.body}
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div>
          <img src={Logo} className={styles.logoImage} />
          <div className={styles.loginBox}>
            <div className={styles.title}>REGISTER</div>
            <div className={styles.error}>{error}</div>
            <form onSubmit={handleSubmit}>
              <input
                className={styles.loginInput}
                type="email"
                name="email"
                placeholder="EMAIL"
                required
              ></input>
              <input
                className={styles.loginInput}
                type="password"
                name="password"
                placeholder="PASSWORD"
                required
              ></input>
              <input
                className={styles.loginInput}
                type="password"
                name="passwordConf"
                placeholder="REPEAT PASSWORD"
                required
              ></input>
              <button className={styles.loginButton}>SIGN UP</button>
              <div className={styles.linkText}>
                Already have an account?{' '}
                <Link className={styles.link} to="/auth/login">
                  SIGN IN
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
