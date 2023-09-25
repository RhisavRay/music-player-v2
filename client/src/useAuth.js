// A custom hook to handle all the logic behind the login, authentication and refresh tokens

import React, { useEffect, useState } from 'react'

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    effect
  }, [code])
}

export default useAuth