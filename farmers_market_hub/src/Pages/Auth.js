import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// API Base URL - CORRECT
const API_BASE_URL = 'https://seed2sale-production.up.railway.app';

// Shared helpers
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const passwordChecks = [
  { test: v => v.length >= 8, msg: 'At least 8 characters' },
  { test: v => /[A-Z]/.test(v), msg: 'At least 1 uppercase letter' },
  { test: v => /[a-z]/.test(v), msg: 'At least 1 lowercase letter' },
  { test: v => /[0-9]/.test(v), msg: 'At least 1 number' },
  { test: v => /[~!@#$%^&*()_+\-={}[\]|:;"',.<>/?]/.test(v), msg: 'At least 1 special character' },
];

export default function Auth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialMode =
    (searchParams.get('mode') || 'login').toLowerCase() === 'signup' ? 'signup' : 'login';
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    setSearchParams({ mode });
  }, [mode, setSearchParams]);

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="d-flex justify-content-center mb-3 auth-toggle">
          <div className="btn-group" role="group" aria-label="Auth mode">
            <button
              type="button"
              className={`btn ${
                mode === 'login' ? 'btn-primary' : 'btn-outline-primary'
              } fmh-cta`}
              onClick={() => setMode('login')}
            >
              Login
            </button>
            <button
              type="button"
              className={`btn ${
                mode === 'signup' ? 'btn-primary' : 'btn-outline-primary'
              } fmh-cta`}
              onClick={() => setMode('signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="auth-divider"></div>
        <div className="auth-card">
          {mode === 'login' ? (
            <LoginForm onSwitch={() => setMode('signup')} />
          ) : (
            <SignupForm onSwitch={() => setMode('login')} />
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Login Form ---------- */
function LoginForm({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const emailError = useMemo(() => {
    if (!touched.email) return '';
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Enter a valid email address';
    return '';
  }, [email, touched.email]);

  const pwdError = useMemo(() => {
    if (!touched.password) return '';
    if (!password) return 'Password is required';
    return '';
  }, [password, touched.password]);

  const formValid = !emailError && !pwdError && email && password;

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formValid) {
      setTouched({ email: true, password: true });
      return;
    }

    setLoading(true);
    setError('');

    try {
      // ✅ CORRECT PATH: Added /api
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        alert(`Login successful! Welcome ${data.user.fullName}`);
        window.location.href = '/';
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const onBlur = field => setTouched(prev => ({ ...prev, [field]: true }));

  return (
    <>
      <h2 className="mb-3 section-title">Login</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label" htmlFor="loginEmail">
            Email
          </label>
          <input
            id="loginEmail"
            type="email"
            className={`form-control ${
              emailError ? 'is-invalid' : touched.email && !emailError ? 'is-valid' : ''
            }`}
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={() => onBlur('email')}
            required
            aria-invalid={!!emailError}
            disabled={loading}
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="loginPassword">
            Password
          </label>
          <div className="input-group">
            <input
              id="loginPassword"
              type={showPwd ? 'text' : 'password'}
              className={`form-control ${
                pwdError ? 'is-invalid' : touched.password && !pwdError ? 'is-valid' : ''
              }`}
              value={password}
              onChange={e => setPassword(e.target.value)}
              onBlur={() => onBlur('password')}
              required
              aria-invalid={!!pwdError}
              disabled={loading}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPwd(s => !s)}
              disabled={loading}
            >
              {showPwd ? 'Hide' : 'Show'}
            </button>
          </div>
          {pwdError && <div className="invalid-feedback d-block">{pwdError}</div>}
        </div>

        <button
          className="btn btn-primary fmh-cta w-100"
          type="submit"
          disabled={!formValid || loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className="mt-3 mb-0 small text-muted">
          New here?{' '}
          <button
            type="button"
            className="btn btn-link p-0 align-baseline"
            onClick={onSwitch}
            disabled={loading}
          >
            Create an account
          </button>
        </p>
      </form>
    </>
  );
}

/* ---------- Signup Form ---------- */
function SignupForm({ onSwitch }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    password: false,
    confirm: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fullNameError = useMemo(() => {
    if (!touched.fullName) return '';
    if (!fullName) return 'Full name is required';
    if (fullName.length < 2) return 'Full name must be at least 2 characters';
    return '';
  }, [fullName, touched.fullName]);

  const emailError = useMemo(() => {
    if (!touched.email) return '';
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Enter a valid email address';
    return '';
  }, [email, touched.email]);

  const pwdErrors = useMemo(() => {
    if (!touched.password) return [];
    return passwordChecks.filter(r => !r.test(password)).map(r => r.msg);
  }, [password, touched.password]);

  const confirmError = useMemo(() => {
    if (!touched.confirm) return '';
    if (!confirm) return 'Please confirm password';
    if (password !== confirm) return 'Passwords do not match';
    return '';
  }, [confirm, password, touched.confirm]);

  const formValid =
    !fullNameError &&
    !emailError &&
    pwdErrors.length === 0 &&
    !confirmError &&
    fullName &&
    email &&
    password &&
    confirm;

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formValid) {
      setTouched({ fullName: true, email: true, password: true, confirm: true });
      return;
    }

    setLoading(true);
    setError('');

    try {
      // ✅ CORRECT PATH: Added /api
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Registration successful! Welcome ${data.user.fullName}`);
        onSwitch();
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  const onBlur = field => setTouched(prev => ({ ...prev, [field]: true }));

  return (
    <>
      <h2 className="mb-3 section-title">Sign Up</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label" htmlFor="signupFullName">
            Full Name
          </label>
          <input
            id="signupFullName"
            type="text"
            className={`form-control ${
              fullNameError ? 'is-invalid' : touched.fullName && !fullNameError ? 'is-valid' : ''
            }`}
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            onBlur={() => onBlur('fullName')}
            required
            aria-invalid={!!fullNameError}
            disabled={loading}
          />
          {fullNameError && <div className="invalid-feedback d-block">{fullNameError}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="signupEmail">
            Email
          </label>
          <input
            id="signupEmail"
            type="email"
            className={`form-control ${
              emailError ? 'is-invalid' : touched.email && !emailError ? 'is-valid' : ''
            }`}
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={() => onBlur('email')}
            required
            aria-invalid={!!emailError}
            disabled={loading}
          />
          {emailError && <div className="invalid-feedback d-block">{emailError}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="signupPassword">
            Password
          </label>
          <div className="input-group">
            <input
              id="signupPassword"
              type={showPwd ? 'text' : 'password'}
              className={`form-control ${
                pwdErrors.length ? 'is-invalid' : touched.password && !pwdErrors.length ? 'is-valid' : ''
              }`}
              value={password}
              onChange={e => setPassword(e.target.value)}
              onBlur={() => onBlur('password')}
              required
              aria-invalid={pwdErrors.length > 0}
              disabled={loading}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPwd(s => !s)}
              disabled={loading}
            >
              {showPwd ? 'Hide' : 'Show'}
            </button>
          </div>

          <ul className="mt-2 mb-0 small" style={{ listStyle: 'none', paddingLeft: 0 }}>
            {passwordChecks.map((rule, idx) => {
              const ok = rule.test(password);
              return (
                <li
                  key={idx}
                  className={`d-flex align-items-center gap-2 ${ok ? 'text-success' : 'text-muted'}`}
                >
                  <span
                    className={`badge rounded-pill ${
                      ok ? 'bg-success' : 'bg-light text-muted border'
                    }`}
                    style={{ width: 18, height: 18, padding: 0 }}
                    aria-hidden="true"
                  >
                    {ok ? '✓' : ''}
                  </span>
                  {rule.msg}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-4">
          <label className="form-label" htmlFor="signupConfirm">
            Confirm Password
          </label>
          <div className="input-group">
            <input
              id="signupConfirm"
              type={showConfirm ? 'text' : 'password'}
              className={`form-control ${
                confirmError ? 'is-invalid' : touched.confirm && !confirmError ? 'is-valid' : ''
              }`}
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              onBlur={() => onBlur('confirm')}
              required
              aria-invalid={!!confirmError}
              disabled={loading}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowConfirm(s => !s)}
              disabled={loading}
            >
              {showConfirm ? 'Hide' : 'Show'}
            </button>
          </div>
          {confirmError && <div className="invalid-feedback d-block">{confirmError}</div>}
        </div>

        <button
          className="btn btn-primary fmh-cta w-100"
          type="submit"
          disabled={!formValid || loading}
        >
          {loading ? 'Creating account...' : 'Create account'}
        </button>

        <p className="mt-3 mb-0 small text-muted">
          Already have an account?{' '}
          <button
            type="button"
            className="btn btn-link p-0 align-baseline"
            onClick={onSwitch}
            disabled={loading}
          >
            Login
          </button>
        </p>
      </form>
    </>
  );
}