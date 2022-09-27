import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

/* eslint linebreak-style: ["error", "unix"] */
export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: '',
    email: '',
    id: '',
    name: '',
    username: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
      const jwtToken = atob(token);
      const payload = jwt_decode(jwtToken);
      const { player } = payload;

      const IMG = process.env.NEXT_PUBLIC_IMG;
      player.avatar = `${IMG}/${player.avatar}`;

      setIsLogin(true);
      setUser(player);
    }
  }, []);

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.avatar}
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li><Link href="/member"><a className="dropdown-item text-lg color-palette-2">My Profile</a></Link></li>
            <li><Link href="/"><a className="dropdown-item text-lg color-palette-2">Wallet</a></Link></li>
            <li>
              <Link href="/member/edit-profile"><a className="dropdown-item text-lg color-palette-2">Account Settings</a></Link>
            </li>
            <li><Link href="/sign-in"><a className="dropdown-item text-lg color-palette-2">Log Out</a></Link></li>
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          href="./src/sign-in.html"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>

  );
}
