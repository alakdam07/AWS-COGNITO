// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback, useEffect, useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const Pool_Data = {
  UserPoolId: process.env.REACT_APP_COGNITO_USERPOOL_ID,
  ClientId: process.env.REACT_APP_COGNITO_ClIENT_ID
};

export default function useHandler() {
  const [state, setstate] = useState(undefined)
  const userPool = new CognitoUserPool(Pool_Data)

  const getAuthenticatedUser = useCallback(() => {
    return userPool.getCurrentUser();
  },
    [],
  );

  useEffect(() => {
    getAuthenticatedUser();

    setstate(getAuthenticatedUser())
  }, [getAuthenticatedUser])

  const signOut = () => {
    return userPool.getCurrentUser()?.signOut()
  }

  return {
    userPool,
    getAuthenticatedUser,
    signOut,
    state
  }
};











