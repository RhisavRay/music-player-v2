// A custom hook to handle all the logic behind the login, authentication and refresh tokens

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios.post('http://localhost:3001/login', {
        code
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(() => {
        window.location = '/';
    })
  }, [code])
}

export default useAuth